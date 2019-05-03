const { ApolloServer, gql } = require('apollo-server');
import { CustomersDef, CustomersQuery, CustomersResolver, CustomersMutation } from './api/Customers';
import { InvoicesDef, InvoicesQuery, InvoicesResolver, InvoicesMutation } from './api/Invoices';
import { PaymentsDef, PaymentsQuery, PaymentsResolver, PaymentsMutation } from './api/Payments';
import { SuppliersDef, SuppliersQuery, SuppliersResolver, SuppliersMutation } from './api/Suppliers';
import { PurchaseOrdersDef, PurchaseOrdersQuery, PurchaseOrdersResolver, PurchaseOrdersMutation } from './api/PurchaseOrders';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
${CustomersDef}
${InvoicesDef}
${PaymentsDef}
${SuppliersDef}
${PurchaseOrdersDef}

type Query {
  ${CustomersQuery}
  ${InvoicesQuery}
  ${PaymentsQuery}
  ${SuppliersQuery}
  ${PurchaseOrdersQuery}
}

type Mutation {
  ${CustomersMutation}
  ${InvoicesMutation}
  ${PaymentsMutation}
  ${SuppliersMutation}
  ${PurchaseOrdersMutation}
}
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {},
  Mutation: {}
};

[CustomersResolver, InvoicesResolver, PaymentsResolver, SuppliersResolver, PurchaseOrdersResolver].forEach(r => {
  Object.keys(r.Query).map(o => {
    resolvers.Query[o] = r.Query[o]
  })
  Object.keys(r.Mutation).map(o => {
    resolvers.Mutation[o] = r.Mutation[o]
  })
});

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});