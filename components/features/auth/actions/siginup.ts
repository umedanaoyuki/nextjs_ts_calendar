"use server";

import { actionClient } from "@/lib/safe-action";
import { UserOptionalDefaultsSchema } from "@/prisma/generated/zod/modelSchema/UserSchema";
import prisma from "@/lib/prisma";

export const signup = actionClient
    .schema(UserOptionalDefaultsSchema)
    .action(async ({ parsedInput: { name, email, password } }) => {
        await prisma.user.create({
            data: {
                name,
                email,
                password,
            },
        });
        return {
            success: true,
            message: "ユーザーを作成しました",
        };
    });