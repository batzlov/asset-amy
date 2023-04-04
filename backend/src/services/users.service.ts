import { Injectable } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "src/dtos/user.dto";

import { User } from "@prisma/client";
import prisma from "prisma/prisma";

@Injectable()
export default class UsersService {
    async findAll(where: any): Promise<User[]> {
        return await prisma.user.findMany({
            where: where,
        });
    }

    async findOne(where: any): Promise<User> {
        return await prisma.user.findUnique({
            where: where,
        });
    }

    async create(user: CreateUserDto): Promise<User> {
        return await prisma.user.create({
            data: user,
        });
    }

    async update(id: number, user: UpdateUserDto): Promise<User> {
        return await prisma.user.update({
            where: {
                id: id,
            },
            data: user,
        });
    }

    async delete(id: number): Promise<User> {
        return await prisma.user.delete({
            where: {
                id: id,
            },
        });
    }
}
