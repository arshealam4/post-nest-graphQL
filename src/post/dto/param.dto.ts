import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ParamDTO {
  @Field()
  pageNo?: number;

  @Field()
  limit?: number;
}