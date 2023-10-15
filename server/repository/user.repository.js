import db from '../database/index.js';
const { User, Profile } = db;


export const userRepository = {
    signUp: async (email, bcryptedPw, nickname) => { 
        const user = await User.create({ email: email, pw: bcryptedPw, 
            profile: {
                nickname: nickname
            } 
        }, { include: Profile});
            return user;     
    },

}