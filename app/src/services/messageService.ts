import type { MessageInterface } from '@/interfaces/MessageInterface'
import { senderIdEnum } from '@/enums/senderIdEnum'

const sendMessage = async (messages: MessageInterface[]) => {
    const apiUrl = 'http://localhost:11434/api/chat'

    const systemPrompt = `Você é um assistente inteligente e útil. Você receberá uma lista de mensagens anteriores em uma 
  conversa no formato JSON, onde cada mensagem tem um papel ('user' ou 'assistant') e um conteúdo. Use todo o 
  histórico para entender o contexto e gerar uma resposta apropriada à ÚLTIMA mensagem enviada pelo usuário. 
  Mantenha consistência, naturalidade e clareza na conversa.`

    const payload = {
        model: 'gemma2:2b',
        messages: [
            {
                role: 'system',
                content: systemPrompt
            },
            ...messages.map((m) => ({
                role: m.senderId === senderIdEnum.USER ? 'user' : 'assistant',
                content: m.content
            }))
        ],
        stream: false
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        const message: MessageInterface = {
            id: data.id,
            senderId: senderIdEnum.ASSISTANT,
            content: data.message.content,
            timestamp: new Date()
        }

        return message
    } catch (error) {
        console.error('Error sending message:', error)
        throw error
    }
}

export default {
    sendMessage
}
