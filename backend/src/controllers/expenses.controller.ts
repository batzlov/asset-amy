import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { Expense } from "@prisma/client";
import { ExpensesService } from "src/services";
import JwtAuthGuard from "../guards/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller("expenses")
export default class ExpensesController {
    constructor(private readonly expensesService: ExpensesService) {}

    @Get()
    getExpenses(@Request() req: any): Promise<Expense[]> {
        const currentUserId = req.user.id;

        return this.expensesService.findAll({
            belongsToId: currentUserId,
        });
    }
}
