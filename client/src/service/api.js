import axios from 'axios';

const url='http://localhost:8000';

export const authenticateSignup=async (data)=>{
    try{
        return await axios.post(`${url}/signup`,data);
    }
    catch(error){
        console.log('Error while calling post api 🥹',error);
        throw error;
    }
}
export const authenticateLogin=async (data)=>{
    try{
        return await axios.post(`${url}/login`,data);
    }
    catch(error){
        console.log('Error while calling login api 🥹',error);
        return error.response;
    }
}
export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/product/${id}`);
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}
