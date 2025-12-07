import { API_ENDPOINTS } from './config';

/**
 * Get all available personalities
 * @param {string} [token] - Authentication token (optional)
 * @returns {Promise<Object>} Response with list of personalities
 */
export const getAllPersonalities = async (token = null) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(API_ENDPOINTS.GET_PERSONALITIES, {
      method: 'GET',
      headers,
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch personalities');
    }

    return data;
  } catch (error) {
    console.error('Error fetching personalities:', error);
    throw error;
  }
};

