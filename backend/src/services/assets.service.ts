import { Injectable } from "@nestjs/common";
import { CreateAssetDto, UpdateAssetDto } from "src/dtos";

import { Asset } from "@prisma/client";
import prisma from "prisma/prisma";

@Injectable()
export class AssetsService {
    async findAll(where: any): Promise<Asset[]> {
        return await prisma.asset.findMany({
            where: where,
        });
    }

    async findOne(where: any): Promise<Asset> {
        return await prisma.asset.findUnique({
            where: where,
        });
    }

    async create(asset: CreateAssetDto): Promise<Asset> {
        return await prisma.asset.create({
            data: asset,
        });
    }

    async update(id: number, asset: UpdateAssetDto): Promise<Asset> {
        return await prisma.asset.update({
            where: {
                id: id,
            },
            data: asset,
        });
    }

    async delete(id: number): Promise<Asset> {
        return await prisma.asset.delete({
            where: {
                id: id,
            },
        });
    }
}
