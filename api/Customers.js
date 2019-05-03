export const CustomersDef = `
type Customer {
    fname: String
    lname: String
    region: String
    address1: String
    address2: String
    city: String
    mobile: [String]
    tags: [String]
    status: String
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

input CustomerInput {
    fname: String
    lname: String
    region: String
    address1: String
    address2: String
    city: String
    mobile: [String]
    tags: [String]
    status: String
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}
`;

export const CustomersQuery = `
    listCustomers: [Customer]
    getCustomer: [Customer]
`;

export const CustomersMutation = `
    createCustomer(customer: CustomerInput): Customer
`;

const customers = [
  {
    fname: "Ryann",
    lname: "Flores",
    region: "East",
    address1: "341 Richmond",
    address2: "Angono",
    city: "Rizal",
    mobile: ["09178112371"],
    tags: [""],
    status: "active",
    createdat: new Date(),
    createdby: "ryann",
    updatedat: new Date(),
    updatedby: "ryann"
  },
  {
    fname: "Cherry",
    lname: "Flores",
    region: "EAST",
    address1: "341 Richmond",
    address2: "Angono",
    city: "Rizal",
    mobile: ["4510014"],
    tags: [""],
    status: "active",
    createdat: new Date(),
    createdby: "ryann",
    updatedat: new Date(),
    updatedby: "ryann"
  }
];

export const CustomersResolver = {
  Query: {
    listCustomers: () => customers,
    getCustomer: id => customers[0]
  },
  Mutation: {
    createCustomer: (parent, args) => {
      return customers[0];
    }
  }
};
