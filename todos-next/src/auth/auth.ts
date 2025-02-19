import { checkUser, comparePassword } from "@/actions/auth-actions"
import prisma from "@/lib/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google, Credentials({
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      const { email, password } = credentials

      if (!email || !password) {
        return null
      }

      const userExist = await checkUser(email as string, password as string)

      const passwordMatch = await comparePassword(password as string, userExist.password)

      console.log(passwordMatch)
      if (!passwordMatch) {
        return null
      }

      return userExist;
    },
  })],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email }) {
      return true
    },
    async jwt({ token, user, account, profile }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email!
        }
      })
      token.roles = dbUser?.roles
      token.id = dbUser?.id
      return token
    },
    async session({ session, token, user }) {

      if (session && session.user) {
        session.user.roles = token.roles as string[]
        session.user.id = token.id as string;
      }
      return session
    },
  }
})