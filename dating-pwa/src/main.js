import { subscribeToChat } from './chat.js'

// Service Worker registrieren
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(() => console.log('Service Worker registriert'))
    .catch(err => console.error('SW Fehler', err))
}

// TEST-CHAT-ID (später dynamisch)
const chatId = '123e4567-e89b-12d3-a456-426614174000'

// Realtime Chat starten
subscribeToChat(chatId)
