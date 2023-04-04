import { Injectable } from "@nestjs/common";
import { CreateExpenseDto, UpdateExpenseDto } from "src/dtos";

import { Expense } from "@prisma/client";
import prisma from "prisma/prisma";

@Injectable()
export default class ExpensesService {
    async findAll(where: any): Promise<Expense[]> {
        return await prisma.expense.findMany({
            where: where,
        });
    }

    async findOne(where: any): Promise<Expense> {
        return await prisma.expense.findUnique({
            where: where,
        });
    }

    async create(expense: CreateExpenseDto): Promise<Expense> {
        return await prisma.expense.create({
            data: expense,
        });
    }

    async update(id: number, expense: UpdateExpenseDto): Promise<Expense> {
        return await prisma.expense.update({
            where: {
                id: id,
            },
            data: expense,
        });
    }

    async delete(id: number): Promise<Expense> {
        return await prisma.expense.delete({
            where: {
                id: id,
            },
        });
    }
}
