import { Field, ObjectType } from '@nestjs/graphql';
import { LinkOutputDTO } from './link-output.dto';

@ObjectType({ description: 'User' })
export class UserOutputDTO {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email?: string;

  @Field(() => [LinkOutputDTO])
  links: LinkOutputDTO[];
}
