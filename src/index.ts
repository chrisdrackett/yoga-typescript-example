import * as dotenv from "dotenv";

dotenv.config();

import { GraphQLServer } from "graphql-yoga";

import { resolvers } from "./resolvers";
import { prisma } from "./generated/prisma-client";

import * as path from "path";

const server = new GraphQLServer({
  typeDefs: path.join(__dirname, "schema.graphql"),
  resolvers,
  context: {
    prisma
  }
} as any);

server.start({ endpoint: "/api/", playground: "/api/" }, () =>
  console.log("Server is running on http://localhost:4000")
);
