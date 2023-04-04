import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/models/entities/user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async find(): Promise<User[]> {
    // Find all entities in the databse, without limit
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    // Searches for one entity in the database, if now throws exception
    return await this.userRepository.findOneByOrFail({
      id,
    });
  }

  async create(createUserInput: CreateUserInput) : Promise<User> {
    // Create a new entity from DTO input
    const newUser = this.userRepository.create(createUserInput);
    return await this.userRepository.save(newUser);
  }

  async update(updateUserInput: UpdateUserInput) {
    const user = await this.userRepository.findOneOrFail({
      where: {
        id: updateUserInput.id,
      },
    });
    if(user) {
      return await this.userRepository.update(updateUserInput.id, updateUserInput)
    } else {
      throw new NotFoundException('User not found.')
    }
  }

  async delete(id: string) : Promise<User[]> {
    await this.userRepository.delete(id)
    return await this.userRepository.find()
  }
}
