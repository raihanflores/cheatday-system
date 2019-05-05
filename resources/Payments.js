import { ApolloError } from "apollo-server";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

const paymentsSchema = new mongoose.Schema({
  description: String,
  total_paid: Number,
  status: String,
  invoices: [Object],
  note: [String],
  createdat: String,
  createdby: String,
  updatedat: String,
  updatedby: String
});

let Payment = mongoose.model("payment", paymentsSchema);

export const PaymentActions = {
  createPayment: data => {
    return new Promise((resolve, reject) => {
      let payment = new Payment(data.payment);
      payment.save((err, created) => {
        if (err)
          throw new ApolloError("Failed to create record.", "CREATE_ERROR", {
            message: err
          });
        resolve(created);
      });
    });
  },
  updatePayment: data => {
    return new Promise((resolve, reject) => {
      let id = data.payment._id;
      delete data.payment._id;

      Payment.update({ _id: id }, data.payment, (err, updated) => {
        if (err) console.log("Failed to update record.");
        Payment.find({_id: id}, (err, payment) => {
          resolve(payment[0]);
        });
      });
    });
  }
};
