import { useState } from "react"
import { useAccessToken } from "../store"
import { authAxios } from "../api/axiosAuth"

export const useRefreshToken = () => {
    const { setAccessToken } = useAccessToken((state) => state)

    const refresh = async () => {
        try{
            const { data } = await authAxios.get("/refresh")
            setAccessToken(data.token)
            return data.token
        }
        catch(err){
            console.error(err)
        }
    }

    return refresh
}