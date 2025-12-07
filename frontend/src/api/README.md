# API Documentation

This folder contains all the API calls for the frontend application, organized by feature.

## Structure

```
api/
├── config.js         # API configuration and endpoints
├── auth.js           # Authentication API calls (register, login, delete)
├── users.js          # User-related API calls (personality management)
├── chat.js           # Chat API calls (messages, warnings)
├── personality.js    # Personality API calls
├── index.js          # Central export file
└── README.md         # This file
```

## Setup

1. Create a `.env` file in the frontend root directory
2. Add your API base URL:
   ```
   VITE_API_BASE_URL=http://localhost:3000
   ```

## Usage Examples

### Authentication

```javascript
import { registerUser, loginUser, deleteUser, getAuthToken } from '@/api';

// Register a new user
const userData = {
  username: 'john_doe',
  email: 'john@example.com',
  password: 'securePassword123',
  age: 25
};
const result = await registerUser(userData);

// Login
const credentials = {
  email: 'john@example.com',
  password: 'securePassword123'
};
const loginResult = await loginUser(credentials);
// Token is automatically stored in localStorage

// Delete user
const token = getAuthToken();
await deleteUser(token);
```

### User Personality

```javascript
import { setUserPersonality, getUserPersonality } from '@/api';

// Set user personality
const personalityData = {
  user_id: 1,
  personality_id: 2
};
await setUserPersonality(personalityData);

// Get user personality
const personality = await getUserPersonality(1);
```

### Chat

```javascript
import { sendMessage, getChatMessages, getUserWarnings, getWarningTriggers, deleteChatHistory } from '@/api';

// Send a message
const messageData = {
  user_id: 1,
  message: 'Hello, how are you?'
};
const response = await sendMessage(messageData);

// Get chat history
const chatHistory = await getChatMessages(1);

// Get user warnings
const warnings = await getUserWarnings(1);

// Get warning triggers
const triggers = await getWarningTriggers({
  user_id: 1,
  warning_id: 5
});

// Delete chat history
await deleteChatHistory(1);
```

### Personalities

```javascript
import { getAllPersonalities } from '@/api';

// Get all available personalities
const personalities = await getAllPersonalities();
```

## Response Format

All API calls return a response in the following format:

```javascript
{
  success: boolean,
  status: number,
  message: string,
  data: any | null
}
```

## Error Handling

All API functions throw errors that should be caught:

```javascript
try {
  const result = await loginUser(credentials);
  console.log('Login successful:', result);
} catch (error) {
  console.error('Login failed:', error.message);
  // Handle error (show notification, etc.)
}
```

## Authentication

Some endpoints support optional authentication tokens. When a token is available, pass it as the last parameter:

```javascript
const token = getAuthToken();
await sendMessage(messageData, token);
```

The login function automatically stores the JWT token in localStorage, which can be retrieved using `getAuthToken()`.

