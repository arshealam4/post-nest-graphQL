import { Resolver, Query, Args, Mutation, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { PostService } from './post.service';
import { Post } from './model/post.model';
import { PostDTO } from './dto/post.dto';
import { ParamDTO } from './dto/param.dto';

const pubSub = new PubSub();

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(returns => [Post])
  posts(@Args('params') params: ParamDTO): Promise<Post[]> {
    return this.postService.findAll(params);
  }
  
  @Query(returns => [Post])
  postById(@Args('id') id: String): Promise<Post[]> {
    return this.postService.findOne(id);
  }

  @Mutation(returns => Post)
  async addPost(
    @Args('postData') postData: PostDTO): Promise<Post> {
    return this.postService.create(postData);
  }
  
  @Mutation(returns => Post)
  async editPost(@Args('id') id: String, @Args('editPostData') body: PostDTO): Promise<Post> {
    return this.postService.edit(id, body);
  }

  @Mutation(returns => Post)
  async deletePost(@Args('id') id: String): Promise<Post> {
    const result = await this.postService.delete(id);
    pubSub.publish('commentAdded', { commentAdded: "Post deleted successfully!" });
    return result;
  }

  @Subscription(returns => String)
  commentAdded() {
    return pubSub.asyncIterator('commentAdded');
  }

}