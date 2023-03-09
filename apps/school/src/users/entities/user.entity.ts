import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum TypeEnum {
  TEACHER = 'teacher',
  STUDENT = 'student',
  STAFF = 'staff',
}

registerEnumType(TypeEnum, { name: 'TypeEnum' });

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Column()
  @Field(() => String, {
    nullable: false,
    description: 'Username (placeholder)',
  })
  name: string;

  @Column({ default: TypeEnum.TEACHER })
  @Field(() => TypeEnum, {
    description: 'Status field (placeholder)',
  })
  type: TypeEnum;
}
