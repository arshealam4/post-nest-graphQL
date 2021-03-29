import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile:'schema.gql',
    installSubscriptionHandlers: true,
  }), PostModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
