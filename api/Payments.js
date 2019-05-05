import { PaymentActions } from '../resources/Payments';

export const PaymentsDef = `
type PaymentItem {
    invoice_id: String
    total_amount: Float
    paid_amount: Float
    balance: Float
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

input PaymentItemInput {
    invoice_id: String
    total_amount: Float
    paid_amount: Float
    balance: Float
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

type Payment {
    description: String
    total_paid: Float
    status: String
    invoices: [Invoice]
    note: [String]
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

input PaymentInput {
    description: String
    total_paid: Float
    status: String
    invoices: [InvoiceInput]
    note: [String]
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}`;

export const PaymentsQuery = `
    listPayments: [Payment]
    getPayment: [Payment]
`;

export const PaymentsMutation = `
    createPayment(payment: PaymentInput): Payment
    updatePayment(payment: PaymentInput): Payment
`;

const payments =  [
    {
        description: 'Payment for Invoice 5099803df3f4948bd2f98390',
        total_paid: 140300.00,
        status: 'active',
        invoices: [
            {
                invoice_id: '5099803df3f4948bd2f98390',
                total_amount: 140300.00,
                paid_amount: 140300.00,
                balance: 0,
                createdat: new Date(),
                createdby: 'ryann',
                updatedat: new Date(),
                updatedby: 'ryann'
            }    
        ],
        note: ['Fully paid.', 'Payment: Cebuana'],
        createdat: new Date(),
        createdby: 'ryann',
        updatedat: new Date(),
        updatedby: 'ryann'
    }
];

export const PaymentsResolver = {
  Query: {
    listPayments: () => payments,
    getPayment: id => payments[0]
  },
  Mutation: {
    createPayment: (parent, args) => {
      return PaymentActions.createPayment(args);
    },
    updatePayment: (parent, args) => {
      return PaymentActions.updatePayment(args);
    }
  }
};