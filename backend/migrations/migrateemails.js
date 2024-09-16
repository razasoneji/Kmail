import { Email } from "../models/email.model.js";
import mongoose from "mongoose";

const updateEmailSchema = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/Kmail");

    // Update all existing emails to include isStarred, isImportant, and isArchived
    await Email.updateMany(
      {},
      {
        $set: {
          isStarred: false,
          isImportant: false,
          isArchived: false,
        },
      }
    );

    console.log("Email schema updated successfully with new fields");
  } catch (error) {
    console.log("Error updating email schema", error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
};

// Run the update
updateEmailSchema();
