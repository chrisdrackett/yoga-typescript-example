import { Resolvers } from '../generated/graphqlgen'

import { Query } from './Query'
import { Task } from './Task'
import { Mutation } from './Mutation'

export const resolvers: Resolvers = {
  Query,
  Task,
  Mutation,
}
