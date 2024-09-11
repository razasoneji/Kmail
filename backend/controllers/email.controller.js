import { User } from "../models/user.model.js";
import { Email } from "../models/email.model.js";

export const createEmail = async (req, res) => {
  try {
    const userId = req.id;
    const { to, subject, message } = req.body;
    if (!to || !subject || !message)
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });

    const email = await Email.create({
      to,
      subject,
      message,
      userId,
      showreceiver: true,
      showsender: true,
    });
    return res.status(201).json({
      email,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmail = async (req, res) => {
  try {
    const emailId = req.params.id;
    const userId = req.id;

    if (!emailId) {
      return res.status(400).json({ message: "Email ID is required" });
    }

    const email = await Email.findById(emailId);
    if (!email) {
      return res.status(404).json({ message: "Email not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let isModified = false;

    if (email.userId.toString() === userId.toString()) {
      email.showsender = false;
      isModified = true;
    }

    if (email.to === user.email) {
      email.showreceiver = false;
      isModified = true;
    }

    if (!email.showsender && !email.showreceiver) {
      await Email.findByIdAndDelete(emailId);
      return res.status(200).json({
        message: "Email deleted successfully",
      });
    }

    if (isModified) {
      await email.save();
      return res.status(200).json({
        message: "Email visibility updated",
      });
    }

    return res
      .status(403)
      .json({ message: "You are not authorized to delete this email" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getAllEmailById = async (req, res) => {
  try {
    const userId = req.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const emails = await Email.find({
      $or: [{ to: user.email }, { userId: userId }],
    });

    return res.status(200).json({ emails });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getReceivedEmails = async (req, res) => {
  try {
    const userId = req.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const receivedEmails = await Email.find({
      to: user.email,
      showreceiver: true,
    });

    return res.status(200).json({ receivedEmails });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getSentEmails = async (req, res) => {
  try {
    const userId = req.id;

    const sentEmails = await Email.find({
      userId: userId,
      showsender: true,
    });

    return res.status(200).json({ sentEmails });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
