<template>
  <div class="flex justify-center items-center h-screen bg-gray-900 text-white">
    <div class="flex flex-col h-[90vh] w-[80%] bg-gray-800 rounded-xl p-6 shadow-xl">
      <!-- Title -->
      <div class="text-3xl font-semibold mb-4">OffGrid Private Assistant</div>

      <!-- Messages -->
      <div ref="chatContainer" class="flex-1 overflow-y-auto bg-gray-700 rounded-lg p-4 space-y-2">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="flex"
          :class="msg.senderId === senderIdEnum.USER ? 'justify-end' : 'justify-start'"
        >
          <div
            :class="[
              'px-4 py-2 rounded-lg break-words',
              'w-4/9',
              msg.senderId === senderIdEnum.USER
                ? 'bg-blue-600 text-white'
                : 'bg-gray-600 text-gray-100',
            ]"
          >
            <div
              v-html="formatChatText(msg.content)"
              :class="[
                'px-4 py-2 rounded-lg break-words',
                msg.senderId === senderIdEnum.USER
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-600 text-gray-100',
              ]"
            />
          </div>
        </div>
      </div>

      <!-- Message Input -->
      <form @submit.prevent="sendMessage" class="mt-4 flex gap-2">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Digite sua mensagem..."
          class="flex-1 px-4 py-2 rounded-lg bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
        />
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useChatStore } from '@/stores/chat.ts'
import { senderIdEnum } from '@/enums/senderIdEnum'
import { formatChatText } from '@/utils/formatChatText.ts'

const chatStore = useChatStore()
const messages = chatStore.messages
let lastId = 1
const newMessage = ref('')
const chatContainer = ref<HTMLElement | null>(null)

const sendMessage = () => {
  const text = newMessage.value.trim()
  if (!text) return
  lastId++
  chatStore.sendMessage({
    id: lastId,
    senderId: senderIdEnum.USER,
    content: text,
    timestamp: new Date(),
  })

  newMessage.value = ''
}

watch(messages, async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
})
</script>
