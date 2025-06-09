import React from 'react'
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from '../actions/siginup';
import { UserOptionalDefaultsSchema } from '@/prisma/generated/zod/modelSchema/UserSchema';

const SignupForm = () => {
    const { form, action, handleSubmitWithAction, resetFormAndAction } = 
        useHookFormAction(signup, zodResolver(UserOptionalDefaultsSchema), {
            actionProps: {},
			formProps: {},
			errorMapProps: {},
        });
	return <form onSubmit={handleSubmitWithAction}>...</form>;
}

export default SignupForm
