import { subscribeToChat } from './chat.js'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}

// später:
const chatId = 'HIER-DEINE-CHAT-ID'
subscribeToChat(chatId)
