import logging
import os

from contextlib import asynccontextmanager
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException

from base_models import *
from chatbot.chatbot import Chatbot
from classifier.classifier import MentalHealthClassifier
from summarizer.summarizer import MentalHealthSummarizer

# disable warnings
os.environ["HF_HUB_DISABLE_SYMLINKS_WARNING"] = "1"

logger = None
mhs = None
mhc = None
chatbot = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    global logger, mhs, mhc, chatbot

    # load the environment variables
    load_dotenv()

    # create the logger
    logger = logging.getLogger("mental-health-api")
    logger.setLevel(logging.INFO)

    # load the summarization model
    logger.info("Loading the summarizer...")
    mhs = MentalHealthSummarizer()
    
    # load the classifier model
    logger.info("Loading the classifier...")
    mhc = MentalHealthClassifier()

    # load the chatbot model
    logger.info("Loading the chatbot model...")
    chatbot = Chatbot()

    yield
    
    del mhs
    del mhc

app = FastAPI(lifespan=lifespan)

@app.get("/")
def welcome():
    return "Mental Healh API - exposes methods for interogating conversational data for early prevention of mental problems."

@app.post("/predict")
def predict(request: Conversation):
    # format the string that will feed the summarizer
    text = "\n".join([f"{msg.type}: {msg.content}" for msg in request.messages])

    # inference the summarizer
    try:
        logger.info("Inference for summary...")
        summary = mhs.predict(text)
    except Exception as e:
        logger.error(f"Failed to summarize the text: {text}")
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")

    # inference the classifier
    try:
        logger.info("Inference for classifier...")
        diseases = mhc.predict(summary)
    except Exception as e:
        logger.error(f"Failed to classify the summary: {summary}")
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")
    
    return {"diseases": diseases}

@app.post("/talk")
def talk(request: HumanMessage):   
    # inference from the OpenAI API
    try:
        response = chatbot.talk(request.message)
        return response
    except Exception as e:
        logger.error(f"Failed to retrieve message from OpenAI API.")
        raise HTTPException(status_code=500, detail=f"Internal error: {str(e)}")