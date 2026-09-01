
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserInput } from './dto/create-user.input.js';
import { UpdateUserInput } from './dto/update-user.input.js';
import { UserEntity } from './entities/user.entity.js';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  // CREATE
  async create(createUserInput: CreateUserInput) {
    // Check email
    const existingEmail = await this.userRepo.findOne({
      where: {
        email: createUserInput.email,
      },
    });

    if (existingEmail) {
      throw new ConflictException('Email already exists');
    }

    // Check username
    const existingUsername = await this.userRepo.findOne({
      where: {
        username: createUserInput.username,
      },
    });

    if (existingUsername) {
      throw new ConflictException('Username already exists');
    }

    // Create entity
    const user = this.userRepo.create(createUserInput);

    // Save to database
    return await this.userRepo.save(user);
  }

  // FIND ALL
  async findAll() {
    return await this.userRepo.find();
  }

  // FIND ONE
  async findOne(id: number) {
    const user = await this.userRepo.findOne({
      where: { id },
    });

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
    // Check user exists
    const user = await this.userRepo.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Check email if email is being updated
    if (updateUserInput.email) {
      const existingEmail = await this.userRepo.findOne({
        where: {
          email: updateUserInput.email,
        },
      });

      if (existingEmail && existingEmail.id !== id) {
        throw new ConflictException('Email already exists');
      }
    }

    // Check username if username is being updated
    if (updateUserInput.username) {
      const existingUsername = await this.userRepo.findOne({
        where: {
          username: updateUserInput.username,
        },
      });

      if (
        existingUsername &&
        existingUsername.id !== id
      ) {
        throw new ConflictException(
          'Username already exists',
        );
      }
    }

    // Update
    await this.userRepo.update(
      { id },
      updateUserInput,
    );

    // Return updated user
    return await this.userRepo.findOne({
      where: { id },
    });
  }

  // DELETE
  async remove(id: number) {
    // Check user exists
    const user = await this.userRepo.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Delete
    await this.userRepo.delete({ id });

    // Return deleted user
    return user;
  }
}

