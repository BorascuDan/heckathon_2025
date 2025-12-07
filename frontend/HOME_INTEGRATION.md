# Home Screen API Integration

## Overview
The Home component now fetches real data from the backend API including user personality and chat messages.

## Features Implemented

### 1. User Personality Display
- ✅ Fetches user personality on component mount
- ✅ Extracts personality code from format: `"Adventurer (INFP)"` → `"INFP"`
- ✅ Displays in Navbar as: `"INFP CAT"`
- ✅ Shows "LOADING..." while fetching

### 2. Chat Messages Integration
- ✅ Fetches chat history from backend on mount
- ✅ Converts backend message format to frontend format
- ✅ Displays loading state while fetching
- ✅ Falls back to welcome message if no chat exists

### 3. Send Message Functionality
- ✅ Sends messages to backend API
- ✅ Receives bot responses from backend
- ✅ Updates UI immediately with user message
- ✅ Adds bot response when received
- ✅ Shows error message if API call fails

### 4. Auto-scroll
- ✅ Automatically scrolls to bottom when new messages arrive
- ✅ Smooth scroll behavior

## Data Flow

### On Component Mount

```
1. Get user from localStorage
   ↓
2. Fetch user personality
   - API: getUserPersonality(userId)
   - Extract code: "Adventurer (INFP)" → "INFP"
   - Display: "INFP CAT" in Navbar
   ↓
3. Fetch chat messages
   - API: getChatMessages(userId)
   - Convert format: { role, content } → { id, text, sender }
   - Display in chat area
```

### When User Sends Message

```
1. Add user message to UI immediately
   ↓
2. Call API: sendMessage({ user_id, message })
   ↓
3. Receive bot response
   ↓
4. Add bot response to UI
   ↓
5. Auto-scroll to bottom
```

## Message Format Conversion

### Backend Format
```json
{
  "success": true,
  "message": "user chat fetched",
  "data": [
    {
      "type": "bot",
      "content": "Hello! How can I help you?"
    },
    {
      "type": "user",
      "content": "Tell me a joke"
    }
  ]
}
```

### Frontend Format
```javascript
[
  {
    id: 1,
    text: "Hello! How can I help you?",
    sender: 'bot'  // Displayed on the LEFT (cat's messages)
  },
  {
    id: 2,
    text: "Tell me a joke",
    sender: 'user'  // Displayed on the RIGHT (user's messages)
  }
]
```

### Message Positioning
- **Bot messages** (`type: "bot"`) → Displayed on the **LEFT** (teal background)
- **User messages** (`type: "user"`) → Displayed on the **RIGHT** (purple background)

## API Calls Used

### getUserPersonality(userId)
```javascript
const response = await getUserPersonality(userId);
// Returns: { success: true, data: "Adventurer (INFP)" }
```

### getChatMessages(userId)
```javascript
const response = await getChatMessages(userId);
// Returns: { success: true, data: [{ type: "bot", content: "..." }] }
```

### sendMessage({ user_id, message })
```javascript
const response = await sendMessage({
  user_id: 1,
  message: "Hello!"
});
// Returns: { success: true, data: "Hi there! How can I help?" }
```

## Error Handling

### No User in localStorage
- Redirects to `/log-in`

### Personality Fetch Fails
- Logs error to console
- Continues loading (doesn't block chat)

### Chat Messages Fetch Fails (or No Chat Exists)
- Falls back to default welcome message
- Shows: "Hello, I'm your pocket friend nice meeting you"

### Send Message Fails
- Shows error message to user
- Message: "Sorry, I couldn't process that message."

## Components Modified

### Home.jsx
- Added `useEffect` for data fetching on mount
- Added `useEffect` for auto-scroll
- Added state: `personality`, `userId`, `isLoadingMessages`
- Modified `handleSendMessage` to use API instead of mock response
- Added personality code extraction function
- Added loading state for messages
- Integrated real API calls

### Navbar.jsx
- Fixed to use `petName` prop instead of hardcoded value
- Changed default from "ESTJ CAT" to "CAT"
- Now displays dynamic personality: "INFP CAT", "ESTJ CAT", etc.

## User Experience

1. **Login** → Home loads
2. **Navbar** shows: "LOADING..." then "INFP CAT"
3. **Chat** shows: "Loading chat..." then actual messages
4. **Send message** → Instant user message, then bot response
5. **Auto-scroll** → Always see latest messages

## Future Enhancements

- Add typing indicator when bot is responding
- Add message timestamps
- Add message read receipts
- Add ability to clear chat
- Add error retry mechanism

