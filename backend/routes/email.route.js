import express from "express";
import {
  createEmail,
  deleteEmail,
  getAllEmailById,
  getReceivedEmails,
  getSentEmails,
} from "../controllers/email.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createEmail);
router.route("/:id").delete(isAuthenticated, deleteEmail);
router.route("/getallemails").get(isAuthenticated, getAllEmailById);
router.route("/getreceived").get(isAuthenticated, getReceivedEmails);
router.route("/getsent").get(isAuthenticated, getSentEmails);

export default router;
