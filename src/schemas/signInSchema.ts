import { z } from "zod"

export const signInSchema = z.object({
    //identifier may be username, email etc.
    identifier: z.string(),
    password: z.string()
})