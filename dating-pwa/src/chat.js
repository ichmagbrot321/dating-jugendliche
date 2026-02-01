import { supabase } from './supabase.js'

export function subscribeToChat(chatId) {
  const channel = supabase
    .channel(`chat-${chatId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `chat_id=eq.${chatId}`
      },
      payload => {
        console.log('Neue Nachricht:', payload.new)
        // hier später Nachrichten ins UI einfügen
      }
    )
    .subscribe()

  return channel
}
