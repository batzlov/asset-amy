import { PrismaClient } from '@prisma/client';

export let prisma: PrismaClient = new PrismaClient({
    log:
        process.env.DATABASE_LOGGING === 'true'
            ? ['query', 'warn', 'error']
            : ['warn', 'error'],
});

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in .env');
}

if (process.env.NODE_ENV === 'production') {
    // depending on the environment we can log different prisma outputs
    prisma = new PrismaClient({
        log: ['warn', 'error'],
    });
} else {
    new PrismaClient({
        log:
            process.env.DATABASE_LOGGING === 'true'
                ? ['query', 'warn', 'error']
                : ['warn', 'error'],
    });
}

export default prisma;
