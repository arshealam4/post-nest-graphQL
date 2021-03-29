import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PostDTO {

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;
}