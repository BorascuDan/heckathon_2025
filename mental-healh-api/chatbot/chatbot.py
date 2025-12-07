from azure.identity import AzureCliCredential
from azure.ai.projects import AIProjectClient
from azure.ai.projects.models import PromptAgentDefinition

class Chatbot():    
    USER_ENDPOINT = "https://hack2025project.services.ai.azure.com/api/projects/talkingtom"

    def __init__(self):
        project_client = AIProjectClient(
            endpoint=Chatbot.USER_ENDPOINT,
            credential=AzureCliCredential(),
        )

        # creates an agent, bumps the agent version if parameters have changed
        self.agent_name = "talkingtom"
        self.agent = project_client.agents.create_version(  
            agent_name=self.agent_name,
            definition=PromptAgentDefinition(
                model="o4-mini",
                instructions="You are my virtual friend. Talk to me in short, natural, supportive messages (1–2 sentences), like a real friend who listens first and responds calmly.",
            ),
        )

        # creates and OpenAI client to acces the API
        self.openai_client = project_client.get_openai_client()

    def talk(self, message: str) -> str:
        response = self.openai_client.responses.create(
            input=[{"role": "user", "content": message}],
            extra_body={"agent": {"name": self.agent_name, "type": "agent_reference"}},
        )

        return {"id": response.id, "message": response.output_text}
