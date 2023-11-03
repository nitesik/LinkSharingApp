import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('token')
export class Token {
  @Field()
  token: string;
}
