import { IsNumber, MinLength } from "class-validator";
import { Connect } from "./connect.interface";

export class CreateRevenueDto {
    @MinLength(2)
    name: string;

    @MinLength(2)
    description: string;

    @IsNumber()
    value: number;

    belongsTo: Connect;
}

export class UpdateRevenueDto {
    @MinLength(2)
    name: string;

    @MinLength(2)
    description: string;

    @IsNumber()
    value: number;
}
