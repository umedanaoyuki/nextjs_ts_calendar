"use server";


import { UserOptionalDefaultsSchema } from "@/prisma/generated/zod/modelSchema/UserSchema";
import prisma from "@/lib/prisma";
import { actionClient } from "@/lib/safe-action";

export const signup = actionClient
    .schema(UserOptionalDefaultsSchema)
    .action(async ({ parsedInput: { name, email, password } }) => {
        try {
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
        } catch (err) {
            console.error(err);
            return {
                success: false,
                message: "ユーザーの作成に失敗しました",
            };
        }
        
    });