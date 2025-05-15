import type { MessageInterface } from '@/interfaces/MessageInterface'
import { senderIdEnum } from '@/enums/senderIdEnum';

const sendMessage = async (message: MessageInterface) => {

    const apiUrl = 'http://localhost:11434/api/chat';

    const payload = {
        model: 'gemma2:2b',
        messages: [
            { role: 'user', content: message.content }
        ],
        stream: false
    }

    const headers = {
        'Content-Type': 'application/json',
    }

    try {

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const message: MessageInterface = {
            id: data.id,
            senderId: senderIdEnum.ASSISTANT,
            content: data.message.content,
            timestamp: new Date()
        };
        return message;

    } catch (error) {
        console.error('Error sending message:', error)
        throw error
    }

}

export default {
    sendMessage
}