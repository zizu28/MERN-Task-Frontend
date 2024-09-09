import axios from "axios";

const API_URL = "https://merntaskbackend-x7ri8iyj.b4a.run/api/users/";

const register = async (userData) => {
    const response = await axios.post(API_URL, userData);
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const logout = () => localStorage.removeItem("user")


const login = async (userData) =>{
    const response = await axios.post(API_URL + "login", userData);
    if(response.data){
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const authService = {register, logout, login}

export default authService