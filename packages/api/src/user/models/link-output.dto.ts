import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LinkOutputDTO {
  @Field()
  platform: string;

  @Field()
  link: string;
}
