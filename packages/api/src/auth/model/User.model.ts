import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'user' })
export class User {
  @Field()
  sub: string;

  @Field()
  email: string;
}
