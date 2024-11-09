import { prisma } from '@/lib/prisma'
import { Adapter, AdapterAccount, AdapterUser } from 'next-auth/adapters'

/** @return { import("next-auth/adapters").Adapter } */
export default function MyAdapter(): Adapter {
  return {
    async createUser(user: AdapterUser) {
      const prismaUser = await prisma.user.create({
        data: {
          name: user.name!,
          avatar_url: user.image,
        },
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        avatar_url: prismaUser.avatar_url,
        email: '',
        emailVerified: null,
        image: null,
      }
    },
    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        avatar_url: user.avatar_url,
        email: '',
        emailVerified: null,
        image: null,
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async getUserByEmail(_email) {
      return null
    },
    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider_account_id: providerAccountId,
            provider,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        id: user.id,
        name: user.name,
        avatar_url: user.avatar_url,
        email: '',
        emailVerified: null,
        image: null,
      }
    },
    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id!,
        },
        data: {
          name: user.name!,
          avatar_url: user.image,
        },
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        avatar_url: prismaUser.avatar_url,
        email: '',
        emailVerified: null,
        image: null,
      }
    },
    async deleteUser(userId: string) {
      await prisma.user.delete({
        where: {
          id: userId,
        },
      })
    },
    async linkAccount(account: AdapterAccount) {
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      })
    },
    async unlinkAccount({ providerAccountId, provider }) {
      await prisma.account.delete({
        where: {
          provider_provider_account_id: {
            provider_account_id: providerAccountId,
            provider,
          },
        },
      })
    },
    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          user_id: userId,
          session_token: sessionToken,
          expires,
        },
      })

      return {
        sessionToken,
        userId,
        expires,
      }
    },
    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findFirst({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!prismaSession) {
        return null
      }

      const { user, ...session } = prismaSession

      return {
        session: {
          sessionToken: session.session_token,
          expires: session.expires,
          userId: session.user_id,
        },
        user: {
          id: user.id,
          name: user.name,
          avatar_url: user.avatar_url,
          email: '',
          emailVerified: null,
          image: null,
        },
      }
    },
    async updateSession({ sessionToken, expires, userId }) {
      const foundSession = await prisma.session.findFirst({
        where: {
          session_token: sessionToken,
        },
      })

      const prismaSession = await prisma.session.update({
        where: {
          id: foundSession?.id,
          session_token: sessionToken,
        },
        data: {
          expires,
          user_id: userId,
        },
      })

      return {
        sessionToken: prismaSession.session_token,
        userId: prismaSession.user_id,
        expires: prismaSession.expires,
      }
    },
    async deleteSession(sessionToken) {
      const foundSession = await prisma.session.findFirst({
        where: {
          session_token: sessionToken,
        },
      })

      await prisma.session.delete({
        where: {
          id: foundSession?.id,
          session_token: sessionToken,
        },
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async createVerificationToken({ identifier, expires, token }) {
      return null
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async useVerificationToken({ identifier, token }) {
      return null
    },
  }
}
