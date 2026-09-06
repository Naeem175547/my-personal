import { Message } from '../../message/types/message.type.js';
export declare class Channel {
    id: number;
    name: string;
    messages?: Message[];
    createdAt: Date;
    updatedAt: Date;
}
