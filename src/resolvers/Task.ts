import { TaskResolvers } from '../generated/graphqlgen'

export const Task: TaskResolvers.Type = {
  ...TaskResolvers.defaultResolvers,
}
