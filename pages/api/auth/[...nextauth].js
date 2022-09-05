import NextAuth from "next-auth";
import { getToken } from "next-auth/jwt"
import FacebookProvider from "next-auth/providers/facebook";


const secret = process.env.NEXTAUTH_SECRET

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
        //...ADD MORE PROVIDERS HERE
    ],
    
    secret: process.env.SECRET,
});