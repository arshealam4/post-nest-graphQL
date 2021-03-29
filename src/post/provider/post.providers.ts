import { Connection } from 'mongoose';
import { PostSchema } from '../schema/post.schema';

export const postProviders = [
  {
    provide: 'POST_MODEL',
    useFactory: (connection: Connection) => connection.model('Post', PostSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];