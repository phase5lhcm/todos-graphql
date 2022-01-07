import { gql } from '@apollo/client';

export const GET_TODOS = gql`
    {
        todoItems {
            id
            text
        }
    }
`;

export const ADD_TODO = gql`
    mutation AddTodoItem($text: String) {
        addTodoItem(text: $text) {
            id
            text
        }
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodoItem($id: String) {
        deleteTodoItem(id: $id) {
            id
            text
        }
    }
`;

export const EDIT_TODO = gql`
    mutation EditTodoItem($id: String, $text: String) {
        editTodoItem(id: $id, text: $text) {
            id
            text
        }
    }
`;
