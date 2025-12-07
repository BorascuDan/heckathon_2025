import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { getUserPersonality, getChatMessages, sendMessage } from "../../api";

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
    const { speak, cancel, speaking } = useSpeechSynthesis();
    const [inputValue, setInputValue] = useState('');
    const [personality, setPersonality] = useState('');
    const [userId, setUserId] = useState(null);
    const [isLoadingMessages, setIsLoadingMessages] = useState(true);
    const navigate = useNavigate();

    const { listen, listening, stop } = useSpeechRecognition({
        onResult: (result) => {
            setInputValue(result);
        },
    });

    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    // Extract personality code from format like "Adventurer (INFP)" -> "INFP"
    const extractPersonalityCode = (name) => {
        if (!name) return '';
        const match = name.match(/\(([^)]+)\)/);
        return match ? match[1] : name;
    };

    // Fetch user personality and chat messages on mount
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Get user from localStorage
                const userStr = localStorage.getItem('user');
                if (!userStr) {
                    navigate('/log-in');
                    return;
                }

                const user = JSON.parse(userStr);
                setUserId(user.id);

                // Fetch personality
                try {
                    const personalityResponse = await getUserPersonality(user.id);
                    if (personalityResponse.success && personalityResponse.data) {
                        const code = extractPersonalityCode(personalityResponse.data);
                        setPersonality(code);
                    }
                } catch (error) {
                    console.error('Error fetching personality:', error);
                }

                // Fetch chat messages
                try {
                    const chatResponse = await getChatMessages(user.id);
                    if (chatResponse.success && chatResponse.data && chatResponse.data.length > 0) {
                        // Convert backend message format to frontend format
                        // Backend uses 'type' field: 'bot' or 'user'
                        const formattedMessages = chatResponse.data.map((msg, index) => ({
                            id: index + 1,
                            text: msg.content,
                            sender: msg.type // 'bot' or 'user'
                        }));
                        setMessages(formattedMessages);
                    } else {
                        // Set default welcome message if no chat exists
                        setMessages([
                            { id: 1, text: "Hello, I'm your pocket friend nice meeting you", sender: 'bot' }
                        ]);
                    }
                } catch (error) {
                    console.error('Error fetching chat messages:', error);
                    // Set default welcome message if no chat exists
                    setMessages([
                        { id: 1, text: "Hello, I'm your pocket friend nice meeting you", sender: 'bot' }
                    ]);
                } finally {
                    setIsLoadingMessages(false);
                }
            } catch (error) {
                console.error('Error loading user data:', error);
                navigate('/log-in');
            }
        };

        fetchUserData();
    }, [navigate]);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

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

    const handleSpeak = (message) => {
        speak({ text: message });
    }

    const handleTalk = () => {
        if (listening) {
            stop();
        } else {
            listen();
        }
    }

    const handleSendMessage = async () => {
        if (inputValue.trim() && userId) {
            const userMessage = inputValue;
            
            // Add user message to UI immediately
            const newMessage = {
                id: Date.now(),
                text: userMessage,
                sender: 'user'
            };
            setMessages(prev => [...prev, newMessage]);
            setInputValue('');
            
            try {
                // Send message to backend and get bot response
                const response = await sendMessage({
                    user_id: userId,
                    message: userMessage
                });

                if (response.success && response.data) {
                    // Add bot response to messages
                    const botResponse = {
                        id: Date.now() + 1,
                        text: response.data,
                        sender: 'bot'
                    };
                    setMessages(prev => [...prev, botResponse]);
                }
            } catch (error) {
                console.error('Error sending message:', error);
                // Add error message
                const errorMessage = {
                    id: Date.now() + 1,
                    text: "Sorry, I couldn't process that message.",
                    sender: 'bot'
                };
                setMessages(prev => [...prev, errorMessage]);
            }
        }
    }

    return (
        <>
            <div className="cat-page">
                <Navbar petName={personality ? `${personality} CAT` : 'LOADING...'} />
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
                            {isLoadingMessages ? (
                                <div className="loading-messages">Loading chat...</div>
                            ) : (
                                messages.map((message) => (
                                <div 
                                    key={message.id} 
                                    className={`message ${message.sender === 'bot' ? 'message-bot' : 'message-user'}`}
                                >
                                    <div className="message-content">
                                        <p>{message.text}</p>
                                    </div>
                                    {message.sender === 'bot' && (
                                        <button className="sound-btn" onClick={() => handleSpeak(message.text)}>
                                            <img src={botMic} alt="bot-mic" />
                                        </button>
                                    )}
                                </div>
                                ))
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        
                        <div className="chat-input-container">
                            <input
                                type="text"
                                className="chat-input"
                                placeholder="TYPE MESSAGE..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSendMessage();
                                    }
                                }}
                            />
                            <button 
                                className={`voice-btn ${listening ? 'listening' : ''}`}
                                onClick={handleTalk}
                            >
                                <img src={userMic} alt="mic" />
                            </button>
                            <button className="send-btn" onClick={handleSendMessage}>
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