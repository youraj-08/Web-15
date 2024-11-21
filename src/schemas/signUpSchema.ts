import {z} from "zod";

// Zod validation for a single element. (Username validation only)
export const userNameValidation =
    z.string()
        .min(5, "Username must be atleast 5 characters long")
        .max(20, "Username cannot be longer than 20 characters")
        .regex(/^[a-zA-Z0-9_]+$/, "Username cannot contain speical characters")

// Zod validation for multiple element hence an object is created.
export const signUpSchema = z.object({
    username: userNameValidation,
    email: z.string().email({message: "Enter a valid email"}),
    password: z.string().min(6,{message: "password must be atleast 6 characters long"})
})