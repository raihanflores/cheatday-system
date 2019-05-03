export const PurchaseOrdersDef = `
type PurchaseOrderItem {
    product_id: String
    product_code: String
    product_name: String
    product_rate: Float
    quantity: Float
    metric: String
    note: [String]
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

input PurchaseOrderItemInput {
    product_id: String
    product_code: String
    product_name: String
    product_rate: Float
    quantity: Float
    metric: String
    note: [String]
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

type PurchaseOrder {
    description: String
    supplier_name: String
    supplier_address: String
    amount: Float
    total_amount: Float
    purchaseorder_item: [PurchaseOrderItem]
    note: [String]
    status: String
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}

input PurchaseOrderInput {
    description: String
    supplier_name: String
    supplier_address: String
    amount: Float
    total_amount: Float
    purchaseorder_item: [PurchaseOrderItemInput]
    note: [String]
    status: String
    createdat: String
    createdby: String
    updatedat: String
    updatedby: String
}
`;

export const PurchaseOrdersQuery = `
    listPurchaseOrders: [PurchaseOrder]
    getPurchaseOrder: [PurchaseOrder]
`;

export const PurchaseOrdersMutation = `
    createPurchaseOrder(payment: PurchaseOrderInput): PurchaseOrder!
`;

const purchaseorders = [
  {
    description: "Bangus Belly Trimmings, Salmon Belly Trimmings",
    supplier_name: "Love Brownies",
    supplier_address: "Pasay",
    amount: 140300.0,
    total_amount: 140300.0,
    total_discount: 3800.0,
    status: "active",
    purchaseorder_item: [
      {
        product_id: "5099803df3f4948bd2f98391",
        product_code: "BBTRM",
        product_name: "Bangus Belly Trimmings",
        product_rate: 115.0,
        quantity: 700.0,
        metric: "kg",
        createdat: new Date(),
        createdby: "ryann",
        updatedat: new Date(),
        updatedby: "ryann",
        note: ["2 pesos discount"]
      },
      {
        product_id: "5099803df3f4948bd2f98393",
        product_code: "DELCHARGE",
        product_name: "Delivery Charge",
        product_rate: 1100.0,
        quantity: 1.0,
        metric: "km",
        createdat: new Date(),
        createdby: "ryann",
        updatedat: new Date(),
        updatedby: "ryann"
      }
    ],
    note: ["Deliver from supplier to home", "Transportify"],
    createdat: new Date(),
    createdby: "ryann",
    updatedat: new Date(),
    updatedby: "ryann"
  }
];

export const PurchaseOrdersResolver = {
  Query: {
    listPurchaseOrders: () => purchaseorders,
    getPurchaseOrder: id => purchaseorders[0]
  },
  Mutation: {
    createPurchaseOrder: (parent, args) => {
      return purchaseorders[0];
    }
  }
};
