import { PrismaClient } from "@/app/generated/prisma"
import { withAccelerate } from "@prisma/extension-accelerate"

type PrismaClinetWIthExtensions = ReturnType<typeof createPrismaClient>

const createPrismaClient = () => {
    return new PrismaClient().$extends(withAccelerate())
}

const globalForPrisma = global as unknown as { prisma: PrismaClinetWIthExtensions }

const prisma = globalForPrisma.prisma || createPrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma