import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import FormInput from "@/components/FormInput";
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';

type Inputs = {
    email: string
    password: string
}

const LoginForm = () => {

    const formSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email('Invalid email address'),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 8 characters")
            .max(12, "Password cannot exceed more than 12 characters")
            .oneOf([Yup.ref("password")], "Passwords do not match")
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>({
        mode: "onTouched",
        resolver: yupResolver(formSchema)
    })
    const onSubmit: SubmitHandler<Inputs | undefined> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
                error={errors.email}
                label='Email'
                placeholder='expample@email.com'
                register={register('email', {required: true})}
            />
            <FormInput
                error={errors.password}
                register={register('password', {required: true})}
                label='Password'
                type='password'
                placeholder='At least 8 characters'
            />
        </form>
    );
};

export default LoginForm;