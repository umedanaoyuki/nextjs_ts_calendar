import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const SignupPage = () => {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>ユーザー登録</CardTitle>
                <CardDescription>ユーザーを作成してください</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    </div>
  )
}

export default SignupPage