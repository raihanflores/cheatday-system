import { ApolloError } from "apollo-server";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

const customersSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  region: String,
  address1: String,
  address2: String,
  city: String,
  mobile: [String],
  tags: [String],
  status: String
});

let Customer = mongoose.model("customer", customersSchema);

export const CustomerActions = {
  createCustomer: data => {
    return new Promise((resolve, reject) => {
      let customer = new Customer(data.customer);
      customer.save((err, created) => {
        if (err)
          throw new ApolloError("Failed to create record.", "CREATE_ERROR", {
            message: err
          });
        resolve(created);
      });
    });
  },
  updateCustomer: data => {
    return new Promise((resolve, reject) => {
      let id = data.customer._id;
      delete data.customer._id;

      Customer.update({ _id: id }, data.customer, (err, updated) => {
        if (err) console.log("Failed to update record.");
        Customer.find({_id: id}, (err, customer) => {
          resolve(customer[0]);
        });
      });
    });
  }
};
