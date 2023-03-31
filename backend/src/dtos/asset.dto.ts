import { AssetType } from "@prisma/client";
import { IsNumber, MinLength } from "class-validator";
import { Connect } from "./connect.interface";

export class CreateAssetDto {
    @MinLength(2)
    name: string;

    @MinLength(2)
    description: string;

    @IsNumber()
    value: number;

    type: AssetType;

    belongsTo: Connect;
}

export class UpdateAssetDto {
    @MinLength(2)
    name: string;

    @MinLength(2)
    description: string;

    @IsNumber()
    value: number;

    type: AssetType;
}
