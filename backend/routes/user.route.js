import express from "express";
import {
  getUserById,
  login,
  logout,
  register,
  updateUser,
  getUserDetails,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/getuserbyid/:id").get(getUserById);
router.route("/update").put(isAuthenticated, updateUser);
router.route("/getdetails").get(isAuthenticated, getUserDetails);

export default router;
