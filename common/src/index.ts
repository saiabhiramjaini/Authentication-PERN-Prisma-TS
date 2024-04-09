import { z } from "zod";

export const signupSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    cPassword: z.string().min(8)
})

// type infer for signup
export type SignupInput = z.infer<typeof signupSchema>

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

// type infer for signin
export type SigninInput = z.infer<typeof signinSchema>

export const forgotPasswordSchema = z.object({
    email: z.string().email(),
})

// type infer for signin
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>

export const resetPasswordSchema = z.object({
    password: z.string().min(8),
    cPassword: z.string().min(8) 
})

// type infer for signin
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>