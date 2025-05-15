import type { senderIdEnum } from '@/enums/senderIdEnum';

export interface MessageInterface {
    id: number;
    senderId: senderIdEnum;
    content: string;
    timestamp: Date;
}