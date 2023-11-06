import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'message' })
export class SuccessMessage {
  @Field()
  success: string;
}
