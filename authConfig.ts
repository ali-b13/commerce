import type {NextAuthOptions}  from 'next-auth';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from 'bcrypt'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '@prisma/client';
const prisma =new PrismaClient()
export const authConfig  = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),

        CredentialsProvider({
            // Configuration options for the credentials provider
            credentials: {
                // Define the fields for the username and password inputs
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials: any) => {
                try {
                    console.log(credentials, 'crend')
                    // Logic to verify the provided credentials and return a user object if valid
                    // You can implement your own authentication logic here or call an API for validation
                    const user = await prisma.user.findUnique({ where: { email: credentials?.email } })
                    if (user) {
                        const isEqualPassword = await bcrypt.compare(credentials?.password, user.hashPassword || "")
                        if (isEqualPassword) {
                            return Promise.resolve(user);
                        }
                    }
                    throw new Error("Invalid credentials")
                } catch (error) {
                    console.log(error, 'error in sign in')
                     throw new Error("Invalid credentials")

                }
                
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account }: any) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async signIn({ account, profile, user }: any) {
           
            return true
        },
        async session({ session, token, user }: any) {
            try {
                
                const existedUser=await prisma.user.findUnique({where:{email:session.user.email,name:session.user.name}})
                if(existedUser){
                    
                    session.user.id= existedUser?.id
                }
                return session
            } catch (error) {
                return session
            }

        },

    },

    debug: process.env.NODE_ENV == "development",
    session: {
        strategy: "jwt",

    },
    secret: process.env.NEXTAUTH_SECRET,
   
   
} satisfies NextAuthOptions;
