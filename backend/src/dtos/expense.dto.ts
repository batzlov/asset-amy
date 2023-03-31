import { IsNumber, MinLength } from "class-validator";
import { Connect } from "./connect.interface";

export class CreateExpenseDto {
    @MinLength(2)
    name: string;

    @MinLength(2)
    description: string;

    @IsNumber()
    value: number;

    belongsTo: Connect;
}

export class UpdateExpenseDto {
    @MinLength(2)
    name: string;

    @MinLength(2)
    description: string;

    @IsNumber()
    value: number;
}
