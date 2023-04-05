import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import UsersService from "./users.service";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne({
            email: email,
        });

        if (!user) {
            throw new HttpException(
                `User with the email: ${email} was not found!`,
                HttpStatus.NOT_FOUND
            );
        }

        const passwordIsMatch = await bcrypt.compare(password, user.password);
        if (!passwordIsMatch) {
            throw new HttpException(
                `The given password was not correct!`,
                HttpStatus.BAD_REQUEST
            );
        } else {
            const { password, ...result } = user;

            return result;
        }
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user.id };

        return {
            access_token: this.jwtService.sign(payload),
            current_user: user,
        };
    }
}
