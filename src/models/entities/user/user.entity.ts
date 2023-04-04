import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export default class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column({nullable: false})
  @Field({nullable: false})
  name: string
}
