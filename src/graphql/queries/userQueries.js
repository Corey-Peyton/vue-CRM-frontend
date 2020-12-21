import gql from 'graphql-tag';

export const GET_USER = gql`
    query obtenerUsuario($token: String!) {
        obtenerUsuario(token: $token) {
            id  
            nombre
            apellido
            email
        }
    }
`;