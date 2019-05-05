import { InvoiceActions } from '../resources/Invoices';

export const InvoicesDef = `
type InvoiceItem {
    product_id: String
    product_code: String
    product_name: String
    product_rate: Float
    discount: Float
    quantity: Float
    metric: String
    note: [String]
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

input InvoiceItemInput {
    product_id: String
    product_code: String
    product_name: String
    product_rate: Float
    discount: Float
    quantity: Float
    metric: String
    note: [String]
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

type Invoice {
    description: String
    business_name: String
    business_address: String
    amount: Float
    total_amount: Float
    total_discount: Float
    invoice_item: [InvoiceItem]
    note: [String]
    status: String
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

input InvoiceInput {
    _id: String
    description: String
    business_name: String
    business_address: String
    amount: Float
    total_amount: Float
    total_discount: Float
    paid_amount: Float
    balance: Float
    invoice_item: [InvoiceItemInput]
    note: [String]
    status: String
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}
`;

export const InvoicesQuery = `
    listInvoices: [Invoice]
    getInvoice: [Invoice]
`;

export const InvoicesMutation = `
  createInvoice(invoice: InvoiceInput): Invoice
  updateInvoice(invoice: InvoiceInput): Invoice
`;

const invoices = [
  {
    description: "Bangus Belly Trimmings, Salmon Belly Trimmings",
    business_name: "Love Brownies",
    business_address: "Pasay",
    amount: 140300.0,
    total_amount: 140300.0,
    total_discount: 3800.0,
    status: "active",
    invoice_item: [
      {
        product_id: "5099803df3f4948bd2f98391",
        product_code: "BBTRM",
        product_name: "Bangus Belly Trimmings",
        product_rate: 115.0,
        discount: 2.0,
        quantity: 700.0,
        metric: "kg",
        createdat: new Date(),
        createdby: "ryann",
        updatedat: new Date(),
        updatedby: "ryann",
        note: ["2 pesos discount"]
      },
      {
        product_id: "5099803df3f4948bd2f98392",
        product_code: "SBTRM",
        product_name: "Salmon Belly Trimmings",
        product_rate: 106.0,
        discount: 4.0,
        quantity: 600.0,
        metric: "kg",
        createdat: new Date(),
        createdby: "ryann",
        updatedat: new Date(),
        updatedby: "ryann",
        note: ["4 pesos discount"]
      },
      {
        product_id: "5099803df3f4948bd2f98393",
        product_code: "DELCHARGE",
        product_name: "Delivery Charge",
        product_rate: 500.0,
        quantity: 1.0,
        metric: "km",
        createdat: new Date(),
        createdby: "ryann",
        updatedat: new Date(),
        updatedby: "ryann"
      }
    ],
    note: ["Deliver to pasay terminal", "Payment: Cash-On-Delivery"],
    createdat: new Date(),
    createdby: "ryann",
    updatedat: new Date(),
    updatedby: "ryann"
  }
];

export const InvoicesResolver = {
  Query: {
    listInvoices: () => invoices,
    getInvoice: id => invoices[0]
  },
  Mutation: {
    createInvoice: (parent, args) => {
      return InvoiceActions.createInvoice(args);
    },
    updateInvoice: (parent, args) => {
      return InvoiceActions.updateInvoice(args);
    }
  }
};
