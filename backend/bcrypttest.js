import bcrypt from "bcryptjs";

const password = "password123";
const hashedPassword = await bcrypt.hash(password, 10);
console.log(hashedPassword);
