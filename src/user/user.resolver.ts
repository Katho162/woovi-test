import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import User from 'src/models/entities/user/user.entity';
import { DeleteResult } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.userService.find();
  }

  @Query((returns) => User)
  user(@Args('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation((returns) => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(createUserInput);
  }

  @Mutation((returns) => User)
  updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.userService.create(updateUserInput);
  }

  @Mutation((returns) => [User])
  deleteUser(@Args('id') id: string) {
    return this.userService.delete(id);
  }
}
