import * as dotenv from "dotenv";

dotenv.config();

import { GraphQLServer } from "graphql-yoga";
import gql from "graphql-tag";

import { resolvers } from "./resolvers";
import { prisma } from "./generated/prisma-client";

const typeDefs = gql`
  scalar DateTime

  type Query {
    tasks(
      where: TaskWhereInput
      orderBy: TaskOrderByInput
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): [Task]!
    task(id: ID!): Task
  }

  type Mutation {
    createTask(title: String!): Task!
    setDeleted(id: ID!, deletedAt: DateTime!): Task!
    setComplete(id: ID!, completedAt: DateTime!): Task!
    setIncomplete(id: ID!): Task!
    updateTitle(id: ID!, title: String!): Task!
  }

  type Task {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    completedAt: DateTime
    deletedAt: DateTime
    isComplete: Boolean!
    isDeleted: Boolean!
    title: String!
  }

  ### Start: Copied from prisma.graphql

  enum TaskOrderByInput {
    id_ASC
    id_DESC
    createdAt_ASC
    createdAt_DESC
    updatedAt_ASC
    updatedAt_DESC
    completedAt_ASC
    completedAt_DESC
    deletedAt_ASC
    deletedAt_DESC
    isComplete_ASC
    isComplete_DESC
    isDeleted_ASC
    isDeleted_DESC
    title_ASC
    title_DESC
  }

  input TaskWhereInput {
    id: ID
    id_not: ID
    id_in: [ID!]
    id_not_in: [ID!]
    id_lt: ID
    id_lte: ID
    id_gt: ID
    id_gte: ID
    id_contains: ID
    id_not_contains: ID
    id_starts_with: ID
    id_not_starts_with: ID
    id_ends_with: ID
    id_not_ends_with: ID
    createdAt: DateTime
    createdAt_not: DateTime
    createdAt_in: [DateTime!]
    createdAt_not_in: [DateTime!]
    createdAt_lt: DateTime
    createdAt_lte: DateTime
    createdAt_gt: DateTime
    createdAt_gte: DateTime
    updatedAt: DateTime
    updatedAt_not: DateTime
    updatedAt_in: [DateTime!]
    updatedAt_not_in: [DateTime!]
    updatedAt_lt: DateTime
    updatedAt_lte: DateTime
    updatedAt_gt: DateTime
    updatedAt_gte: DateTime
    completedAt: DateTime
    completedAt_not: DateTime
    completedAt_in: [DateTime!]
    completedAt_not_in: [DateTime!]
    completedAt_lt: DateTime
    completedAt_lte: DateTime
    completedAt_gt: DateTime
    completedAt_gte: DateTime
    deletedAt: DateTime
    deletedAt_not: DateTime
    deletedAt_in: [DateTime!]
    deletedAt_not_in: [DateTime!]
    deletedAt_lt: DateTime
    deletedAt_lte: DateTime
    deletedAt_gt: DateTime
    deletedAt_gte: DateTime
    isComplete: Boolean
    isComplete_not: Boolean
    isDeleted: Boolean
    isDeleted_not: Boolean
    title: String
    title_not: String
    title_in: [String!]
    title_not_in: [String!]
    title_lt: String
    title_lte: String
    title_gt: String
    title_gte: String
    title_contains: String
    title_not_contains: String
    title_starts_with: String
    title_not_starts_with: String
    title_ends_with: String
    title_not_ends_with: String
    AND: [TaskWhereInput!]
    OR: [TaskWhereInput!]
    NOT: [TaskWhereInput!]
  }

  ### End: Copied from prisma.graphql
`;

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    prisma
  }
} as any);

server.start(() => console.log("Server is running on http://localhost:4000"));
