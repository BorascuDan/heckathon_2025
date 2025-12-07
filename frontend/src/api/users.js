import { API_ENDPOINTS } from './config';

/**
 * Set user personality
 * @param {Object} personalityData - Personality data
 * @param {number} personalityData.user_id - User ID
 * @param {number} personalityData.personality_id - Personality ID
 * @param {string} [token] - Authentication token (optional)
 * @returns {Promise<Object>} Response with personality data
 */
export const setUserPersonality = async (personalityData, token = null) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(API_ENDPOINTS.SET_PERSONALITY, {
      method: 'POST',
      headers,
      body: JSON.stringify(personalityData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to set personality');
    }

    return data;
  } catch (error) {
    console.error('Error setting user personality:', error);
    throw error;
  }
};

/**
 * Get user personality
 * @param {number} userId - User ID
 * @param {string} [token] - Authentication token (optional)
 * @returns {Promise<Object>} Response with personality data
 */
export const getUserPersonality = async (userId, token = null) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const url = `${API_ENDPOINTS.GET_USER_PERSONALITY}?user_id=${userId}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to get personality');
    }

    return data;
  } catch (error) {
    console.error('Error getting user personality:', error);
    throw error;
  }
};

