import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, {
    nullable: false,
    description: 'Username (placeholder)',
  })
  name: string;
}
