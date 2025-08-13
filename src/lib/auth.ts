import { betterAuth } from "better-auth";
import {nextCookies} from 'better-auth/next-js'
import { db } from "./Database";

export const auth = betterAuth({
    database: {
        db,
        type: 'postgres'
    },

    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
      },

    plugins: [nextCookies()],
})