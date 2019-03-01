export const typeDefs = /* GraphQL */ `type AggregateTask {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createTask(data: TaskCreateInput!): Task!
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateManyTasks(data: TaskUpdateManyMutationInput!, where: TaskWhereInput): BatchPayload!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  task(where: TaskWhereUniqueInput!): Task
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  node(id: ID!): Node
}

type Subscription {
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
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

type TaskConnection {
  pageInfo: PageInfo!
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  completedAt: DateTime
  deletedAt: DateTime
  isComplete: Boolean
  isDeleted: Boolean
  title: String!
}

type TaskEdge {
  node: Task!
  cursor: String!
}

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

type TaskPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  completedAt: DateTime
  deletedAt: DateTime
  isComplete: Boolean!
  isDeleted: Boolean!
  title: String!
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
  AND: [TaskSubscriptionWhereInput!]
  OR: [TaskSubscriptionWhereInput!]
  NOT: [TaskSubscriptionWhereInput!]
}

input TaskUpdateInput {
  completedAt: DateTime
  deletedAt: DateTime
  isComplete: Boolean
  isDeleted: Boolean
  title: String
}

input TaskUpdateManyMutationInput {
  completedAt: DateTime
  deletedAt: DateTime
  isComplete: Boolean
  isDeleted: Boolean
  title: String
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

input TaskWhereUniqueInput {
  id: ID
}
`