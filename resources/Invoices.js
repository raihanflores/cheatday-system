import { ApolloError } from "apollo-server";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

const invoicesSchema = new mongoose.Schema({
  description: String,
  business_name: String,
  business_address: String,
  amount: Number,
  total_amount: Number,
  total_discount: Number,
  invoice_item: [Object],
  note: [String],
  status: String
});

let Invoice = mongoose.model("invoice", invoicesSchema);

export const InvoiceActions = {
  createInvoice: data => {
    return new Promise((resolve, reject) => {
      let invoice = new Invoice(data.invoice);
      invoice.save((err, created) => {
        if (err)
          throw new ApolloError("Failed to create record.", "CREATE_ERROR", {
            message: err
          });
        resolve(created);
      });
    });
  },
  updateInvoice: data => {
    return new Promise((resolve, reject) => {
      let id = data.invoice._id;
      delete data.invoice._id;

      Invoice.update({ _id: id }, data.invoice, (err, updated) => {
        if (err) console.log("Failed to update record.");
        Invoice.find({_id: id}, (err, invoice) => {
          resolve(invoice[0]);
        });
      });
    });
  }
};
