import { defineStore } from 'pinia'
import type { MessageInterface } from '@/interfaces/MessageInterface'
import messageService from '@/services/messageService'

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [] as MessageInterface[],
  }),

  actions: {
    async sendMessage(message: MessageInterface) {
      this.messages.push(message);
      const response = await messageService.sendMessage(this.messages);
      this.messages.push(response);
    }
  }
})
