import { useState, useRef } from "react";
import Navbar from "../navigation/Navbar";

import cat from "../../assets/cat.png" 
import feed from "../../assets/ramen.svg"
import drink from "../../assets/sparkling-drink.svg"
import sleep from "../../assets/bed.svg"
import play from "../../assets/play.svg"
import wash from "../../assets/cold-water.svg"
import send from "../../assets/send.svg";
import userMic from "../../assets/user-mic.svg";
import botMic from "../../assets/bot-mic.svg"
import "./Home.scss";

const Home = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "HEY! I'M YOUR CAT COMPANION. LET'S CHAT!", sender: 'bot' },
        { id: 2, text: "Hello! How are you?", sender: 'user' },
        { id: 3, text: "I'm doing great! Ready to play?", sender: 'bot' },
        { id: 4, text: "Yes, let's play!", sender: 'user' },
        { id: 5, text: "Awesome! What would you like to do?", sender: 'bot' },
        { id: 6, text: "Yes, let's play!", sender: 'user' },
        { id: 7, text: "Yes, let's play!", sender: 'bot' }
    ]);
    const messagesEndRef = useRef(null);

    const actions = [
        { id: 'feed', icon: feed, label: 'FEED' },
        { id: 'drink', icon: drink, label: 'DRINK' },
        { id: 'sleep', icon: sleep, label: 'SLEEP' },
        { id: 'play', icon: play, label: 'PLAY' },
        { id: 'wash', icon: wash, label: 'WASH' }
    ];

    const handleAction = (actionId) => {
        console.log(`Action: ${actionId}`);
    };

    return (
        <>
            <div className="cat-page">
                <Navbar/>
                <div className="cat-content">
                    {/* Cat Display Area */}
                    <div className="cat-display">
                        <div className="cat-sprite">
                            <img src={cat} alt="cat"></img>
                        </div>

                        {/* Action Buttons */}
                        <div className="action-buttons">
                            {actions.map((action) => (
                                <button
                                    key={action.id}
                                    className="action-btn"
                                    onClick={() => handleAction(action.id)}
                                >
                                    <img className="action-icon" src={action.icon} alt="action"></img> 
                                    <span className="action-label">{action.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Chat Input */}
                    <div className="chat-section">
                        <div className="chat-messages">
                            {messages.map((message) => (
                                <div 
                                    key={message.id} 
                                    className={`message ${message.sender === 'bot' ? 'message-bot' : 'message-user'}`}
                                >
                                    <div className="message-content">
                                        <p>{message.text}</p>
                                    </div>
                                    {message.sender === 'bot' && (
                                        <button className="sound-btn">
                                            <img src={botMic} alt="bot-mic" />
                                        </button>
                                    )}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        
                        <div className="chat-input-container">
                            <input
                            type="text"
                            className="chat-input"
                            placeholder="TYPE MESSAGE..."
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                handleSendMessage(e.target.value);
                                e.target.value = '';
                                }
                            }}
                            />
                            <button className="voice-btn">
                                <img src={userMic} alt="mic" />
                            </button>
                            <button className="send-btn">
                                <img src={send} alt="send"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;