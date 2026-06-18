import bcrypt from "bcryptjs";
import User from "../models/User.js";


const getAllUsers = async () => {
  return User.find().sort({ createdAt: -1 });
};