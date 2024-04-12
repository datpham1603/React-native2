import axios from "axios";

const register = async (userData) => {
    const { userName, passWord, email, phoneNumber } = userData;
    const data = {
        userName: userName,
        passWord: passWord,
        email: email,
        phoneNumber: phoneNumber
    };

    try {
        const response = await axios.post('http://192.168.18.105:3000/v1/register', data);
        console.log(response.data)
        return response.data;

    } catch (err) {
        console.log(err);
    }
}

const signIn = async (userData) => {
    const { userName, passWord } = userData;
    console.log(userName)
    data = {
        userName,
        passWord
    }
    try {
        const response = await axios.post('http://192.168.18.105:3000/v1/authenticate', data);
        console.log(response.data)
        return response.data
        
    } catch (err) {
        console.log(err)
    }
}

export {
    register,
    signIn
} 
