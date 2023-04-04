import { Injectable } from "@nestjs/common";
import { CreateRevenueDto, UpdateRevenueDto } from "src/dtos";

import { Revenue } from "@prisma/client";
import prisma from "prisma/prisma";

@Injectable()
export default class RevenuesService {
    async findAll(where: any): Promise<Revenue[]> {
        return await prisma.revenue.findMany({
            where: where,
        });
    }

    async findOne(where: any): Promise<Revenue> {
        return await prisma.revenue.findUnique({
            where: where,
        });
    }

    async create(revenue: CreateRevenueDto): Promise<Revenue> {
        return await prisma.revenue.create({
            data: revenue,
        });
    }

    async update(id: number, revenue: UpdateRevenueDto): Promise<Revenue> {
        return await prisma.revenue.update({
            where: {
                id: id,
            },
            data: revenue,
        });
    }

    async delete(id: number): Promise<Revenue> {
        return await prisma.expense.delete({
            where: {
                id: id,
            },
        });
    }
}
