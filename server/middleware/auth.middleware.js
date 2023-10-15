import jwt from "jsonwebtoken";
import { verifyJwtToken } from "../utils/jwt";

export const auth = {
     // 로그인 되어 있는 유저인 지 검증
     verifyAuthentication: (req, res, next) => {
        const token = req.cookies['token'];

        console.log(token)
        
        const verifyToken = verifyJwtToken(token);
        if(verifyToken.error) {
            return next();
        }
        req.email = verifyToken.email;
        req.nickname = verifyToken.nickname;
        return next();
    }
}