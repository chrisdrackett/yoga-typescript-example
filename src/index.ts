import * as dotenv from 'dotenv'

dotenv.config()

import { GraphQLServer } from 'graphql-yoga'

import { resolvers } from './resolvers'
import { prisma } from './generated/prisma-client'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
} as any)

server.start(() => console.log('Server is running on http://localhost:4000'))
