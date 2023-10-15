import jwt from 'jsonwebtoken';

export const createJwtToken = (email, nickname, userId) => {
    const secretKey = process.env.SECRET_JWT;

    try {
        const token = jwt.sign({ email, nickname, userId }, secretKey, {
            algorithm: "HS256", 
        })

        return token;
    } catch (error) {
        console.log(error)
        return { error }
    }
}

export const verifyJwtToken = (token) => {
    const secretKey = process.env.SECRET_JWT;
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return { error };
    }
}