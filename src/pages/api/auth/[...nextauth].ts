import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import MyAdapter from './prisma-adapter'

export const authOptions: NextAuthOptions = {
  adapter: MyAdapter(),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
      authorization: {
        params: {
          scope: 'read:user,user:email',
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        },
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ account }) {
      if (
        !account?.scope?.includes(
          'https://www.googleapis.com/auth/userinfo.email',
        ) &&
        !account?.scope?.includes(
          'https://www.googleapis.com/auth/userinfo.profile',
        ) &&
        !account?.scope?.includes('read:user,user:email')
      ) {
        return '/'
      }

      return true
    },
    async session({ session, user }) {
      return {
        ...session,
        user,
      }
    },
  },
}

export default NextAuth(authOptions)
