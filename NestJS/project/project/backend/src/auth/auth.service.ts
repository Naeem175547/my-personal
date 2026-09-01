import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async login(username: string, password: string) {
        const user = await this.userService.getUserByUserName(username);
        if (!user) {
            throw new UnauthorizedException('Invalid username or password');
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new UnauthorizedException('Invalid username or password');
        }

        const payload = {
            id: user.id,
            name: user.name,
            username: user.username,
            role: user.role,
        };
        const accessToken = await this.jwtService.signAsync(payload);
        return {
            accessToken,
            id: user.id
        };
    }
}