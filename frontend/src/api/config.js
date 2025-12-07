// API Configuration
const API_BASE_URL = 'http://localhost:3001/api';

export const API_ENDPOINTS = {
  // Auth endpoints
  REGISTER: `${API_BASE_URL}/users/register`,
  LOGIN: `${API_BASE_URL}/users/login`,
  DELETE_USER: `${API_BASE_URL}/users/delete`,
  
  // User personality endpoints
  SET_PERSONALITY: `${API_BASE_URL}/users/personality`,
  GET_USER_PERSONALITY: `${API_BASE_URL}/users/personality`,
  
  // Chat endpoints
  SEND_MESSAGE: `${API_BASE_URL}/chats`,
  GET_CHAT: `${API_BASE_URL}/chats`,
  DELETE_CHAT: `${API_BASE_URL}/chats`,
  GET_WARNINGS: `${API_BASE_URL}/chats/warnings`,
  GET_WARNING_TRIGGERS: `${API_BASE_URL}/chats/warningsTriggers`,
  
  // Personality endpoints
  GET_PERSONALITIES: `${API_BASE_URL}/personality`,
};

export default API_BASE_URL;

