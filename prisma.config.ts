import "dotenv/config";
import { defineConfig } from "prisma/config";

function getRequiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(
            `Environment variable ${name} is required but was not set.`,
        );
    }
    return value;
}

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        url: getRequiredEnv("DATABASE_URL"),
    },
});
