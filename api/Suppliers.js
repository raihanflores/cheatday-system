export const SuppliersDef = `
type Products {
    code: String
    name: String
    description: String
    rate: Float
    metric: String
    note: [String]
}

input ProductsInput {
    code: String
    name: String
    description: String
    rate: Float
    metric: String
    note: [String]
}

type Contacts {
    code: String
    phone: String
    note: [String]
}

input ContactsInput {
    code: String
    phone: String
    note: [String]
}

type Supplier {
    name: String
    contact_person: String
    address1: String
    address2: String
    products: [Products]
    contacts: [Contacts]
    tags: [String]
    status: String
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

input SupplierInput {
    name: String
    contact_person: String
    address1: String
    address2: String
    products: [ProductsInput]
    contacts: [ContactsInput]
    tags: [String]
    status: String
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}
`;


export const SuppliersQuery = `
    listSuppliers: [Supplier]
    getSupplier: [Supplier]
`;

export const SuppliersMutation = `
    createSupplier(payment: SupplierInput): Supplier!
`;

const suppliers =  [
    {
        name: 'ABC Frozen Seafood',
        contact_person: 'Julia',
        address1: 'Corner Tinio',
        address2: 'Pasay',
        products: [{
            code: 'BBTRM',
            name: 'Bangus Belly Trimmings',
            rate: 115.00,
            metric: 'kg',
            note: ['23 tons left']
        }],
        contacts: [{
            code: 'office',
            phone: '2368990',
            note: ['available during 9:00 am to 3:00 pm']
        }],
        tags: [''],
        status: 'active',
        createdat: new Date(),
        createdby: 'ryann',
        updatedat: new Date(),
        updatedby: 'ryann'
    }
];

export const SuppliersResolver = {
  Query: {
    listSuppliers: () => suppliers,
    getSupplier: id => suppliers[0]
  },
  Mutation: {
    createSupplier: (parent, args) => {
      return suppliers[0];
    }
  }
};