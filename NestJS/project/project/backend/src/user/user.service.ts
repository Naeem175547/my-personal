import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserInputDto } from './dto/userInputDto';
// import * as bcrypt from 'bcrypt';
import bcrypt from 'bcrypt';
import { UserUpdateDto } from './dto/userUpdateDto';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>, private dataSource: DataSource) { }
    async signUp(userInput: UserInputDto) {
        const { key, ...userData } = userInput;
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const data = {
            ...userData,
            password: hashedPassword,
        };
        const result = await this.userRepo.insert(data);
        const userId = result.identifiers[0].id;
        if (key) {
            await this.dataSource.query(
                `INSERT INTO uploads (userId, imgKey)
       VALUES (?, ?)`,
                [userId, key],
            );
        }
        return true;
    }
    async getAllUsers() {
        return await this.userRepo.find({
            relations: {
                posts: true
            }

        });
    }

    async getUserById(id: number) {
        const result = await this.userRepo.findOne({
            where: { id },
            relations: {
                posts: true
            }
        })
        const uploads = await this.dataSource.query(
            `SELECT * FROM uploads WHERE userId = ?`,
            [id]
        );
        const key = uploads[0]?.imgKey;
        return { ...result, key }
    }

   

    async getUserByUserName(username: string) {
        return await this.userRepo.findOne({
            where: { username }
        })
    }

    async update(id: number, userData: UserUpdateDto) {
        const user = await this.userRepo.findOne({
            where: { id }
        })
        if (!user) {
            throw new Error('User not found')
        }
        Object.assign(user, userData)
        await this.userRepo.update({ id }, user)
        return true;
    }

    async delete(id: number) {
        const result = await this.userRepo.delete({ id });
        if (result.affected === 0) {
            throw new Error('User not found');
        }
        return true;
    }

}
