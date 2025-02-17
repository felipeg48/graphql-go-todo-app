import { gql } from '@apollo/client';

export const GET_TODOS = gql`
    query GetTodos {
        todos {
            id
            text
            completed
        }
    }
`;

export const CREATE_TODO = gql`
    mutation CreateTodo($text: String!) {
        createTodo(text: $text) {
            id
            text
            completed
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation UpdateTodo($id: ID!, $completed: Boolean!) {
        updateTodo(id: $id, completed: $completed) {
            id
            text
            completed
        }
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($id: ID!) {
        deleteTodo(id: $id)
    }
`;