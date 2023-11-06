import { Field, InputType } from '@nestjs/graphql';
import { LinkType } from './link.input';

@InputType()
export class UserDetailsInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => [LinkType])
  links: LinkType[];
}
