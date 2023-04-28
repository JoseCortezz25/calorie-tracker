import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const options: NextAuthOptions = {
  theme: {
    colorScheme: 'light'
  },
  debug: true,
  session: {},
  jwt: {},
  providers: [
    CredentialsProvider({
      name: 'Slimmer',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'mail@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '****************',
        },
      },

      async authorize(credentials) {
        // const res = await fetch(`http://localhost:3002/api/users/login`, {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/users/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-type': 'application/json' },
        })
        console.log('res',res);
        

        const user = await res.json()

        if (res.ok && user) {
          return user
        }
        return null
      },
    }),
  ],
}

export default NextAuth(options)

