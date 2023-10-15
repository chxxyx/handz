import { userService } from "../service/user.service.js";
import asyncWrapper from "../common/wrap.js";
import { createJwtToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";

export const signUp = asyncWrapper(async (req, res) => {
    const { email, password, nickname } = req.body;

    const bcryptedPw = await bcryptPassword(password);
    const result = await userService.signUp(email, bcryptedPw, nickname);
    
  if(result.error) {
    return res.status(500).json({message: result.message})
  }
  return res.status(201).json(result);

});

const bcryptPassword = (password) => {
    return bcrypt.hash(password, 10);
  };

const comparePassword = (password, dbPassword) => {
return bcrypt.compare(password, dbPassword);
};