import NextAuth, { NextAuthOptions } from 'next-auth'
// import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID ?? '',
    //   clientSecret: process.env.GITHUB_SECRET ?? '',
    // }),
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
        account?.scope?.includes(
          'https://www.googleapis.com/auth/userinfo.email',
        ) &&
        account?.scope?.includes(
          'https://www.googleapis.com/auth/userinfo.profile',
        )
      ) {
        return '/dashboard'
      }

      if (
        !account?.scope?.includes(
          'https://www.googleapis.com/auth/userinfo.email',
        ) ||
        !account?.scope?.includes(
          'https://www.googleapis.com/auth/userinfo.profile',
        )
      ) {
        return '/'
      }
      return true
    },
  },
}

export default NextAuth(authOptions)
