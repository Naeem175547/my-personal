import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './typeOrm/User';
import { Repository } from 'typeorm/browser/repository/Repository.js';
import { CreatedUserInterface } from './interfaces/createdUserInterface';
import { UpdateUserInterface } from './interfaces/UpdateUserInterface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAllUsers() {
    return await this.userRepository.find();
  }
  async getUserById(id: number) {
    const data = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!data) return new NotFoundException('user not foundd!');
    return data;
  }

  async createUser(userData: CreatedUserInterface) {
    const user = this.userRepository.create({
      ...userData,
      createdAt: new Date(),
    });
    return await this.userRepository.save(user);
  }

  async updateUser(id: number, userData: UpdateUserInterface) {
    const result = await this.userRepository.update({ id }, userData);
    if (result.affected == 0) throw new NotFoundException('user not found');
    return { message: 'updated successfully' };
  }

  async patchUser(id: number, userData: UpdateUserInterface) {
    const result = await this.userRepository.update({ id }, userData);
    if (result.affected == 0) throw new NotFoundException('user not found');
    return { message: 'updated successfully' };
  }

  async deleteUser(id: number) {
    const result = await this.userRepository.delete({ id });
    if (result.affected == 0) throw new NotFoundException('user not found');
    return { message: 'deleted successfully' };
  }
}
