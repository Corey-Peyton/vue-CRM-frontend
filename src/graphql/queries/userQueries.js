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

export const GET_USER_CUSTOMERS = gql`
  query obtenerClientesVendedor {
    obtenerClientesVendedor {
      id
      nombre
      apellido
      email
      empresa
    }
  }
`;