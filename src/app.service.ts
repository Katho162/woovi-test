import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserEntity from './models/entities/user/user.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository : Repository<UserEntity>
  ) {}

  async find(): Promise<string> {
    let users = await this.userRepository.find()
    return `Hello currently we have ${users.length} users!`;
  }
}
