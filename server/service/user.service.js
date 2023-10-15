import { userRepository } from "../repository/user.repository.js";

export const userService = {
    signUp: async (email, bcryptedPw, nickname) => {
        try {
            const userSignUpData = await userRepository.signUp(email, bcryptedPw, nickname);
            return userSignUpData;
        } catch (error) {
            console.log(error);
            return {
                error: 500,
                message: "user Insert failed"
            }
        }
    },

}