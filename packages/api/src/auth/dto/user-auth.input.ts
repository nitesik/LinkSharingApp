import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserAuthInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
