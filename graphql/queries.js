import { gql } from '@apollo/client';

export const GET_TODOS = gql`
    {
        todoItems {
            id
            text
        }
    }
`;
