import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from "@nestjs/common";
import { User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { CreateUserDto } from "src/dtos";
import { UsersService } from "src/services";

@Controller("users")
export default class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number): Promise<User> {
        return this.usersService.findOne({
            id,
        });
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        const userWithEmail = await this.usersService.findOne({
            email: createUserDto.email,
        });

        if (userWithEmail) {
            throw new HttpException(
                `User with the given email does already exist.`,
                HttpStatus.BAD_REQUEST
            );
        }

        const saltOrRounds = 10;
        createUserDto.password = await bcrypt.hash(
            createUserDto.password,
            saltOrRounds
        );

        const user = await this.usersService.create(createUserDto);

        return user;
    }

    @Put(":id")
    async update(
        @Param("id", ParseIntPipe) id: number,
        @Body() updateUserDto: CreateUserDto
    ): Promise<User> {
        const user = await this.usersService.findOne({
            id: id,
        });

        if (!user) {
            throw new HttpException(
                `User with the given id: ${id} was not found.`,
                HttpStatus.NOT_FOUND
            );
        }

        const updatedUser = await this.usersService.update(id, updateUserDto);

        return updatedUser;
    }

    @Delete(":id")
    async delete(@Param("id", ParseIntPipe) id: number): Promise<User> {
        const user = await this.usersService.findOne({
            id: id,
        });

        if (!user) {
            throw new HttpException(
                `User with the given id: ${id} was not found.`,
                HttpStatus.NOT_FOUND
            );
        }

        return this.usersService.delete(id);
    }
}
