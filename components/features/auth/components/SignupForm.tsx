"use client"

import React from 'react'
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from '../actions/siginup';
import { UserOptionalDefaultsSchema } from '@/prisma/generated/zod/modelSchema/UserSchema';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useRouter } from 'next/navigation';

const SignupForm = () => {
    const router = useRouter();
    const { form, action, handleSubmitWithAction } = 
        useHookFormAction(signup, zodResolver(UserOptionalDefaultsSchema), {
            actionProps: {
                onSuccess: ({data}) => {
                    if (data == null) return;
                    toast(data.message)
                    if (data.success) {
                        setTimeout(() => {
                            router.push("/mypage");
                        }, 1000);
                    }
                },
            },
			formProps: {
                defaultValues: {
                    name: "",
                    email: "",
                    password: "",
                    imageUrl: null,
                },
            },
			errorMapProps: {},
        });
	return  <Form {...form}>
                <form onSubmit={handleSubmitWithAction} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ユーザー名</FormLabel>
                                <FormControl>
                                <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormDescription>
                                これは公開表示する名前です
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>メールアドレス</FormLabel>
                                <FormControl>
                                <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormDescription>
                                    様々な通知をこのメールアドレスから受け取ります
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>パスワード</FormLabel>
                                <FormControl>
                                <Input placeholder="Name" {...field} />
                                </FormControl>
                                <FormDescription>
                                    英数字を含めて8文字以上で入力してください
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={action.isPending}>{action.isPending ? "送信中..." : "送信"}</Button>
                </form>
            </Form>;
}

export default SignupForm
