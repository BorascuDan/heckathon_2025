import { API_ENDPOINTS } from './config';

/**
 * Send a chat message
 * @param {Object} messageData - Message data
 * @param {number} messageData.user_id - User ID
 * @param {string} messageData.message - Message content
 * @param {string} [token] - Authentication token (optional)
 * @returns {Promise<Object>} Response with bot reply
 */
export const sendMessage = async (messageData, token = null) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(API_ENDPOINTS.SEND_MESSAGE, {
      method: 'POST',
      headers,
      body: JSON.stringify(messageData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to send message');
    }

    return data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

/**
 * Get chat messages for a user
 * @param {number} userId - User ID
 * @param {string} [token] - Authentication token (optional)
 * @returns {Promise<Object>} Response with chat messages
 */
export const getChatMessages = async (userId, token = null) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const url = `${API_ENDPOINTS.GET_CHAT}?user_id=${userId}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to get chat messages');
    }

    return data;
  } catch (error) {
    console.error('Error getting chat messages:', error);
    throw error;
  }
};

/**
 * Get user warnings
 * @param {number} userId - User ID
 * @param {string} [token] - Authentication token (optional)
 * @returns {Promise<Object>} Response with warnings
 */
export const getUserWarnings = async (userId, token = null) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const url = `${API_ENDPOINTS.GET_WARNINGS}?user_id=${userId}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to get warnings');
    }

    return data;
  } catch (error) {
    console.error('Error getting user warnings:', error);
    throw error;
  }
};

/**
 * Get warning trigger messages
 * @param {Object} params - Query parameters
 * @param {number} params.user_id - User ID
 * @param {number} params.warning_id - Warning ID
 * @param {string} [token] - Authentication token (optional)
 * @returns {Promise<Object>} Response with trigger messages
 */
export const getWarningTriggers = async ({ user_id, warning_id }, token = null) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const url = `${API_ENDPOINTS.GET_WARNING_TRIGGERS}?user_id=${user_id}&warning_id=${warning_id}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to get warning triggers');
    }

    return data;
  } catch (error) {
    console.error('Error getting warning triggers:', error);
    throw error;
  }
};

/**
 * Delete chat history for a user
 * @param {number} userId - User ID
 * @param {string} [token] - Authentication token (optional)
 * @returns {Promise<Object>} Response confirming deletion
 */
export const deleteChatHistory = async (userId, token = null) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const url = `${API_ENDPOINTS.DELETE_CHAT}?user_id=${userId}`;
    
    const response = await fetch(url, {
      method: 'DELETE',
      headers,
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete chat');
    }

    return data;
  } catch (error) {
    console.error('Error deleting chat history:', error);
    throw error;
  }
};

