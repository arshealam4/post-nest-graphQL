import { Document } from 'mongoose';

export interface IPost extends Document {
    readonly id: string;
    readonly title: string;
    readonly description: string;
}