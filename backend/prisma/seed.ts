import { AssetType, PrismaClient } from "@prisma/client";
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const lorem = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.`;

async function createUsers() {
    await prisma.user.createMany({
        data: [
            {
                id: 1,
                firstName: "Robert",
                lastName: "Ackermann",
                email: "robert.ackermann@fh-erfurt.de",
                password:
                    "$2b$10$lTarxieWGiXTEmEEqXiIsOB6IyVxZkEzf1NO/2M6iT6lbgG1nVouO",
                role: "USER",
            },
        ],
    });
}

async function createExpenses() {
    await prisma.expense.createMany({
        data: [
            {
                id: 1,
                name: "Miete",
                description: lorem,
                value: 350,
                belongsToId: 1,
            },
            {
                id: 2,
                name: "Konsumausgaben",
                description: lorem,
                value: 300,
                belongsToId: 1,
            },
            {
                id: 3,
                name: "Krankenkasse",
                description: lorem,
                value: 122.78,
                belongsToId: 1,
            },
            {
                id: 4,
                name: "Spotify",
                value: 9.99,
                description: lorem,
                belongsToId: 1,
            },
            {
                id: 5,
                name: "McFit",
                description: lorem,
                value: 20.0,
                belongsToId: 1,
            },
            {
                id: 6,
                name: "iCloud",
                description: lorem,
                value: 2.99,
                belongsToId: 1,
            },
            {
                id: 7,
                name: "Reisekrankenversicherung",
                description: lorem,
                value: 0.75,
                belongsToId: 1,
            },
            {
                id: 8,
                name: "Strom",
                description: lorem,
                value: 39.0,
                belongsToId: 1,
            },
            {
                id: 9,
                name: "Mobilfunk",
                description: lorem,
                value: 10.0,
                belongsToId: 1,
            },
            {
                id: 10,
                name: "Brillenversicherung",
                description: lorem,
                value: 0.83,
                belongsToId: 1,
            },
            {
                id: 11,
                name: "BahnCard",
                description: lorem,
                value: 3.08,
                belongsToId: 1,
            },
            {
                id: 12,
                name: "Hosting",
                description: lorem,
                value: 5.0,
                belongsToId: 1,
            },
            {
                id: 13,
                name: "Internet",
                description: lorem,
                value: 25.0,
                belongsToId: 1,
            },
            {
                id: 14,
                name: "Haftpflichtversicherung",
                description: lorem,
                value: 3.48,
                belongsToId: 1,
            },
        ],
    });
}

async function createRevenues() {
    await prisma.revenue.createMany({
        data: [
            {
                id: 1,
                name: "Bafög",
                description: lorem,
                value: 800,
                belongsToId: 1,
            },
            {
                id: 2,
                name: "Aufzehrung von Ersparnissen",
                description: lorem,
                value: 200,
                belongsToId: 1,
            },
        ],
    });
}

async function createAssets() {
    await prisma.asset.createMany({
        data: [
            {
                name: "Bondora Go & Grow",
                description: lorem,
                type: AssetType.P2P,
                value: 2400,
                belongsToId: 1,
            },
            {
                name: "LBS Bausparen",
                description: lorem,
                type: AssetType.CASH,
                value: 1400,
                belongsToId: 1,
            },
            {
                name: "ING-Depot",
                description: lorem,
                type: AssetType.STOCK,
                value: 5500,
                belongsToId: 1,
            },
            {
                name: "Trade-Republic-Depot",
                description: lorem,
                type: AssetType.STOCK,
                value: 1500,
                belongsToId: 1,
            },
            {
                name: "DKB-Tagesgeld",
                description: lorem,
                type: AssetType.CASH,
                value: 3000,
                belongsToId: 1,
            },
        ],
    });
}

async function main() {
    await createUsers();
    await createExpenses();
    await createRevenues();
    await createAssets();
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch((e) => {
        console.error(e);
        prisma.$disconnect();
        process.exit(1);
    });
