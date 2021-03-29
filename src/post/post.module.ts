import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { DatabaseModule } from 'src/core/database/database.module';
import { postProviders } from './provider/post.providers';

@Module({
  imports: [DatabaseModule],
  providers: [PostService, PostResolver, ...postProviders]
})
export class PostModule {}
