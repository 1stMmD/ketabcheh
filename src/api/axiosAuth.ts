import axios from "axios";

export const authAxios = axios.create({
    baseURL : "htto://localhost:3000",
    withCredentials : true,
    headers : {"Content-Type" : "application/json"}
})