// Code generated by Prisma (prisma@1.26.4). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  task: (where?: TaskWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  task: (where: TaskWhereUniqueInput) => TaskPromise;
  tasks: (
    args?: {
      where?: TaskWhereInput;
      orderBy?: TaskOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Task>;
  tasksConnection: (
    args?: {
      where?: TaskWhereInput;
      orderBy?: TaskOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TaskConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTask: (data: TaskCreateInput) => TaskPromise;
  updateTask: (
    args: {
      data: TaskUpdateInput;
      where: TaskWhereUniqueInput;
    }
  ) => TaskPromise;
  updateManyTasks: (
    args: {
      data: TaskUpdateManyMutationInput;
      where?: TaskWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertTask: (
    args: {
      where: TaskWhereUniqueInput;
      create: TaskCreateInput;
      update: TaskUpdateInput;
    }
  ) => TaskPromise;
  deleteTask: (where: TaskWhereUniqueInput) => TaskPromise;
  deleteManyTasks: (where?: TaskWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  task: (
    where?: TaskSubscriptionWhereInput
  ) => TaskSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TaskOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "completedAt_ASC"
  | "completedAt_DESC"
  | "deletedAt_ASC"
  | "deletedAt_DESC"
  | "isComplete_ASC"
  | "isComplete_DESC"
  | "isDeleted_ASC"
  | "isDeleted_DESC"
  | "title_ASC"
  | "title_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type TaskWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface TaskWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  completedAt?: DateTimeInput;
  completedAt_not?: DateTimeInput;
  completedAt_in?: DateTimeInput[] | DateTimeInput;
  completedAt_not_in?: DateTimeInput[] | DateTimeInput;
  completedAt_lt?: DateTimeInput;
  completedAt_lte?: DateTimeInput;
  completedAt_gt?: DateTimeInput;
  completedAt_gte?: DateTimeInput;
  deletedAt?: DateTimeInput;
  deletedAt_not?: DateTimeInput;
  deletedAt_in?: DateTimeInput[] | DateTimeInput;
  deletedAt_not_in?: DateTimeInput[] | DateTimeInput;
  deletedAt_lt?: DateTimeInput;
  deletedAt_lte?: DateTimeInput;
  deletedAt_gt?: DateTimeInput;
  deletedAt_gte?: DateTimeInput;
  isComplete?: Boolean;
  isComplete_not?: Boolean;
  isDeleted?: Boolean;
  isDeleted_not?: Boolean;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  AND?: TaskWhereInput[] | TaskWhereInput;
  OR?: TaskWhereInput[] | TaskWhereInput;
  NOT?: TaskWhereInput[] | TaskWhereInput;
}

export interface TaskCreateInput {
  completedAt?: DateTimeInput;
  deletedAt?: DateTimeInput;
  isComplete?: Boolean;
  isDeleted?: Boolean;
  title: String;
}

export interface TaskUpdateInput {
  completedAt?: DateTimeInput;
  deletedAt?: DateTimeInput;
  isComplete?: Boolean;
  isDeleted?: Boolean;
  title?: String;
}

export interface TaskUpdateManyMutationInput {
  completedAt?: DateTimeInput;
  deletedAt?: DateTimeInput;
  isComplete?: Boolean;
  isDeleted?: Boolean;
  title?: String;
}

export interface TaskSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TaskWhereInput;
  AND?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput;
  OR?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput;
  NOT?: TaskSubscriptionWhereInput[] | TaskSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Task {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  completedAt?: DateTimeOutput;
  deletedAt?: DateTimeOutput;
  isComplete: Boolean;
  isDeleted: Boolean;
  title: String;
}

export interface TaskPromise extends Promise<Task>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  completedAt: () => Promise<DateTimeOutput>;
  deletedAt: () => Promise<DateTimeOutput>;
  isComplete: () => Promise<Boolean>;
  isDeleted: () => Promise<Boolean>;
  title: () => Promise<String>;
}

export interface TaskSubscription
  extends Promise<AsyncIterator<Task>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  completedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  deletedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  isComplete: () => Promise<AsyncIterator<Boolean>>;
  isDeleted: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
}

export interface TaskConnection {
  pageInfo: PageInfo;
  edges: TaskEdge[];
}

export interface TaskConnectionPromise
  extends Promise<TaskConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TaskEdge>>() => T;
  aggregate: <T = AggregateTaskPromise>() => T;
}

export interface TaskConnectionSubscription
  extends Promise<AsyncIterator<TaskConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TaskEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTaskSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface TaskEdge {
  node: Task;
  cursor: String;
}

export interface TaskEdgePromise extends Promise<TaskEdge>, Fragmentable {
  node: <T = TaskPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TaskEdgeSubscription
  extends Promise<AsyncIterator<TaskEdge>>,
    Fragmentable {
  node: <T = TaskSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTask {
  count: Int;
}

export interface AggregateTaskPromise
  extends Promise<AggregateTask>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTaskSubscription
  extends Promise<AsyncIterator<AggregateTask>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TaskSubscriptionPayload {
  mutation: MutationType;
  node: Task;
  updatedFields: String[];
  previousValues: TaskPreviousValues;
}

export interface TaskSubscriptionPayloadPromise
  extends Promise<TaskSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TaskPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TaskPreviousValuesPromise>() => T;
}

export interface TaskSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TaskSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TaskSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TaskPreviousValuesSubscription>() => T;
}

export interface TaskPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  completedAt?: DateTimeOutput;
  deletedAt?: DateTimeOutput;
  isComplete: Boolean;
  isDeleted: Boolean;
  title: String;
}

export interface TaskPreviousValuesPromise
  extends Promise<TaskPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  completedAt: () => Promise<DateTimeOutput>;
  deletedAt: () => Promise<DateTimeOutput>;
  isComplete: () => Promise<Boolean>;
  isDeleted: () => Promise<Boolean>;
  title: () => Promise<String>;
}

export interface TaskPreviousValuesSubscription
  extends Promise<AsyncIterator<TaskPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  completedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  deletedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  isComplete: () => Promise<AsyncIterator<Boolean>>;
  isDeleted: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Task",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/chris-drackett-0067e7/demo/dev`
});
export const prisma = new Prisma();
