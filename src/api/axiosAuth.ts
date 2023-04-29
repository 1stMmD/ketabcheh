import axios from "axios";

export const authAxios = axios.create({
    baseURL : "http://localhost:3000",
    withCredentials : true,
    headers : {"Content-Type" : "application/json"}
})

export const normalAxios = axios.create({
    baseURL : "http://localhost:3000",
    headers : {"Content-Type" : "application/json"}
})