import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const providers = [
  Providers.GitHub({
    clientId: process.env.GITHUB_CLIENT,
    clientSecret: process.env.GITHUB_SECRET
  })
]

const callbacks = {}

const database = process.env.MONGO_URL

const options = {
  providers,
  database,
  callbacks
}

export default (req, res) => NextAuth(req, res, options)