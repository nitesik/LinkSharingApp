import { Field, InputType } from '@nestjs/graphql';

// @ObjectType({ description: 'link-inputs' })
@InputType()
export class LinkType {
  @Field()
  platform: string;

  @Field()
  link: string;
}
