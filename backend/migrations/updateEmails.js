import { Email } from "../models/email.model.js";
import mongoose from "mongoose";

const updateEmailSchema = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Kmail");

    await Email.updateMany(
      {},
      { $set: { showreceiver: true, showsender: true } }
    );

    console.log("Email schema updated successfully");
  } catch (error) {
    console.log("Error updating email schema", error);
  } finally {
    mongoose.connection.close();
  }
};

updateEmailSchema();
