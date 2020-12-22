import gql from 'graphql-tag';

export const NEW_CUSTOMER = gql`
    mutation nuevoCliente($input: ClienteInput) {
        nuevoCliente(input: $input) {
            id,
            nombre,
            apellido,
            empresa,
            email,
            telefono
        }
    }
`;

export const UPDATE_CUSTOMER = gql`
    mutation actualizarCliente($id: ID!, $input: ClienteInput) {
        actualizarCliente(id: $id, input: $input) {
            nombre
            apellido
            email
            empresa
        }
    }
`;

export const DELETE_CUSTOMER = gql`
    mutation eliminarCliente($id: ID!) {
        eliminarCliente(id: $id)
    }
`;

