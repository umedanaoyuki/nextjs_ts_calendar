import { Prisma, PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
    {
        name: "Alice",
        email: "alice@example.com",
        password: "password",
    },
    {
        name: "Bob",
        email: "bob@example.com",
        password: "password",
    },
]

export async function main() {
    for (const user of userData) {
        await prisma.user.create({
            data: user,
        })
    }
}

main()