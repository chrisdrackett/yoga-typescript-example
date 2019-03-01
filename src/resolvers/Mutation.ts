import { MutationResolvers } from '../generated/graphqlgen'

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  createTask: (_parent, { title }, ctx, _info) => {
    return ctx.prisma.createTask({ title })
  },
  setDeleted: (_parent, { id, deletedAt }, ctx, _info) => {
    return ctx.prisma.updateTask({
      where: { id },
      data: { isDeleted: true, deletedAt: deletedAt },
    })
  },
  setComplete: (_parent, { id, completedAt }, ctx, _info) => {
    return ctx.prisma.updateTask({
      where: { id },
      data: { isComplete: true, completedAt },
    })
  },
  setIncomplete: (_parent, { id }, ctx, _info) => {
    return ctx.prisma.updateTask({
      where: { id },
      data: { isComplete: false, completedAt: undefined },
    })
  },
  updateTitle: (_parent, { id, title }, ctx, _info) => {
    return ctx.prisma.updateTask({ where: { id }, data: { title: title } })
  },
}
