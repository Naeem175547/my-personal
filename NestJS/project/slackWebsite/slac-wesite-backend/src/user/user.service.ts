
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateUserInput } from './dto/create-user.input.js';
import { UpdateUserInput } from './dto/update-user.input.js';
import { UserRepository } from './user.repository.js';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  // CREATE
  async create(createUserInput: CreateUserInput) {
    const existingEmail = await this.userRepository.findByEmail(
      createUserInput.email,
    );

    if (existingEmail) {
      throw new ConflictException(
        'Email already exists',
      );
    }

    const existingUsername =
      await this.userRepository.findByUsername(
        createUserInput.username,
      );

    if (existingUsername) {
      throw new ConflictException(
        'Username already exists',
      );
    }

    return this.userRepository.create(createUserInput);
  }

  // FIND ALL
  async findAll() {
    return this.userRepository.findAll();
  }

  // FIND ONE
  async findOne(id: number) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // UPDATE
  async update(
    id: number,
    updateUserInput: UpdateUserInput,
  ) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepository.update(
      id,
      updateUserInput,
    );

    return this.userRepository.findOne(id);
  }

  // DELETE
  async remove(id: number) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepository.delete(id);

    return user;
  }
}

