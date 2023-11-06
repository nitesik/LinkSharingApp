import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { LinkType } from './link.input';

@InputType()
@ObjectType({ description: 'user details' })
export class UserDetailModel {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => [LinkType])
  links: LinkType[];
}
