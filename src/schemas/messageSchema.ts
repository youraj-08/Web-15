import { z } from "zod";

export const messageSchema = z.object({
    content:
        z.string()
            .min(2, { message: "Content must be atleast 2 characters long." })
            .max(300, { message: "Content cannot be more than 300 characters long" })
})