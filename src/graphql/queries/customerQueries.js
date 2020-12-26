import gql from 'graphql-tag';

export const GET_CUSTOMER = gql`
    query obtenerCliente($id: ID!) {
        obtenerCliente(id: $id) {
            id
            nombre
            apellido
            empresa
            email
            telefono
        }
    }
`;

export const GET_CUSTOMERS = gql`
    query obtenerClientes {
        obtenerClientes {
            nombre
            apellido
            email
            empresa
        }
    }
`;

export const GET_SELLER_CUSTOMERS = gql`
    query obtenerClientesVendedor {
        obtenerClientesVendedor {
            nombre
            apellido
            email
            empresa
        }
    }
`;