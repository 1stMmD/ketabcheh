import axios from "axios";

const BACK_END_URL = import.meta.env.VITE_BACK_END_URL

export const authAxios = axios.create({
    baseURL : BACK_END_URL,
    withCredentials : true,
    headers : {"Content-Type" : "application/json"}
})

export const normalAxios = axios.create({
    baseURL : BACK_END_URL,
    headers : {"Content-Type" : "application/json"}
})