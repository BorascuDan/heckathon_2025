# Login & Registration Flow Documentation

## Overview
This document describes the complete login, registration, and personality selection process.

## Registration Flow

### Step 1: User enters account information
- User enters age, name, email, and password on `/register` page
- Form validation ensures all fields are filled

### Step 2: Account Creation
When user clicks "NEXT":

1. **API Call**: `registerUser({ username, email, password, age })`
   - If email already exists → Show error: "Email already in use"
   - If registration fails → Show error message
   
2. **Store User Data**:
   - User data stored in localStorage
   - Response contains: `{ id, username, email }`

3. **Redirect to Personality**:
   - Automatically redirect to `/personality` page
   - User selects their personality type
   - After selection, redirects to `/home`

## Login Flow

### Step 1: User enters credentials
- User enters email and password on `/log-in` page
- Form validation ensures both fields are filled

### Step 2: Authentication
When user clicks "LOG IN":

1. **API Call**: `loginUser({ email, password })`
   - If credentials are invalid → Show error: "Account doesn't exist. Please register first."
   - Includes link to registration page
   
2. **Store User Data**:
   - JWT token automatically stored in localStorage by the API
   - User data stored in localStorage for later use

3. **Check Personality**:
   - API Call: `getUserPersonality(userId)`
   - If user has personality → Redirect to `/home`
   - If user doesn't have personality → Redirect to `/personality`

## Personality Selection Flow

### For New Users (from Login)
1. User is redirected to `/personality` page
2. **Fetch Personalities**: `getAllPersonalities()`
3. Display personalities in 4x4 grid showing only the code (e.g., "ISFP")
   - Backend returns: "Adventurer (ISFP)"
   - Frontend displays: "ISFP"
4. User selects a personality
5. **Set Personality**: `setUserPersonality({ user_id, personality_id })`
6. Redirect to `/home`

### For Registration Flow
After successful registration, user is automatically redirected to `/personality` page where they follow the same flow as new login users.

## API Calls Used

```javascript
import { registerUser, loginUser, getUserPersonality, setUserPersonality, getAllPersonalities } from '@/api';

// Register
const registerResult = await registerUser({ 
  username: "John Doe", 
  email: "john@example.com", 
  password: "securePass123", 
  age: 25 
});
// Returns: { success, data: { id, username, email } }

// Login
const loginResult = await loginUser({ email, password });
// Returns: { success, data: { user: { id, username, email } }, token }

// Check personality
const personalityResult = await getUserPersonality(userId);
// Returns: { success, data: "ISFP" or null }

// Get all personalities
const personalities = await getAllPersonalities();
// Returns: { success, data: [{ id: 1, name: "Adventurer (ISFP)" }, ...] }

// Set personality
await setUserPersonality({ user_id: 1, personality_id: 3 });
// Returns: { success, data: "ISFP" }
```

## Personality Name Parsing

The backend returns personality names in format: `"Adventurer (ISFP)"`

The frontend extracts only the code part using regex:
```javascript
const extractPersonalityCode = (name) => {
  const match = name.match(/\(([^)]+)\)/);
  return match ? match[1] : name; // Returns "ISFP"
};
```

## Error Handling

### Login Errors
- **Invalid credentials**: Shows message with link to register
- **Network errors**: Shows generic error message
- **No personality set**: Automatically redirects to personality selection

### Personality Selection Errors
- **Failed to load**: Shows error message
- **Failed to save**: Shows error message, allows retry

## User Data Storage

### localStorage Keys
- `authToken`: JWT token (managed by API layer)
- `user`: User object with id, username, email

### Example User Object
```json
{
  "id": 1,
  "username": "john_doe",
  "email": "john@example.com"
}
```

## Routes

- `/log-in` - Login page
- `/register` - Registration multi-step flow
- `/personality` - Standalone personality selection
- `/home` - Main application (requires login + personality)

## Components Modified

1. **Registration.jsx**: 
   - Calls register API after Step 1 (account info)
   - Stores user data on success
   - Redirects to `/personality` page
   - Shows error messages for registration failures

2. **AccountInfo.jsx**:
   - Accepts loading and error props
   - Displays registration errors
   - Shows loading state during registration
   - Disables inputs while loading

3. **LogIn.jsx**: 
   - Implements login with API calls
   - Checks personality status
   - Redirects based on personality status
   - Shows error messages with links

4. **Personalities.jsx**:
   - Works both standalone (after login/registration)
   - Fetches personalities from backend
   - Displays only code part (ISFP format)
   - Saves selection to backend
   - Handles navigation to `/home`

5. **App.jsx**:
   - Added `/personality` route for standalone access

## Backend Fixes

1. **login.mjs**:
   - Fixed missing `return` statement in email validation
   - Changed duplicate email status code from 201 to 409 (Conflict)
   - Fixed typo in error message

2. **usersMiddleware.mjs**:
   - Fixed destructuring bug in `checkIfUserHasPersonality`

3. **index.mjs**:
   - Added `Authorization` header to CORS exposed headers

