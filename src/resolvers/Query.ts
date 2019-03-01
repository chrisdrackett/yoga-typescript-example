import { QueryResolvers } from '../generated/graphqlgen'

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  tasks: (_parent, args, ctx, _info) => {
    // @ts-ignore https://github.com/prisma/prisma/issues/3621
    return ctx.prisma.tasks(args)
  },
  task: (_parent, { id }, ctx, _info) => {
    return ctx.prisma.task({ id })
  },
}
