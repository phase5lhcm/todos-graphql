import { gql, ApolloServer } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 1 Define types and resolves
// contains application schema
// which documents all endpoints we will have that can be queried

/**
 * Query - holds operations that will fetch data
 * Mutation -  holds operations that will change db
 */
const typeDefs = gql`
    type TodoItem {
        id: String
        text: String
    }

    type Query {
        todoItems: [TodoItem]
    }

    type Mutation {
        addTodoItem(text: String): TodoItem
        editTodoItem(id: String, text: String): TodoItem
        deleteTodoItem(id: String): TodoItem
    }
`;

// our resolvers will define what our operations in the schema will do
// resolver schema must match schema in types
// resolvers are our functions that will fetch the data/update db when user call operation defined in types
const resolvers = {
    Query: {
        todoItems: () => {
            return prisma.todoItem.findMany();
        },
    },

    Mutation: {
        addTodoItem: (_parent, { text }, _context) => {
            return prisma.todoItem.create({ data: { text } });
        },
        editTodoItem: (_parent, { id, text }, _context) => {
            return prisma.todoItem.update({ where: { id }, data: { text } });
        },
        deleteTodoItem: (_parent, { id }, _context) => {
            return prisma.todoItem.delete({ where: { id } });
        },
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const handler = apolloServer.createHandler({ path: '/api/graphql' });

//prevent body parser from processing requests because Nextjs runs default parsers
export const config = {
    api: {
        bodyParser: false,
    },
};
export default handler;
