import { IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
    @MinLength(2)
    firstName: string;

    @MinLength(2)
    lastName: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}

export class UpdateUserDto {
    @MinLength(2)
    firstName: string;

    @MinLength(2)
    lastName: string;

    @IsEmail()
    email: string;
}
