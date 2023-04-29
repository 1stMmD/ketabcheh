import { useEffect } from "react"
import { normalAxios } from "../api/axiosAuth"
import { useAccessToken } from "../store"
import { useRefreshToken } from "./use-refresh-token";

export const useNormalAxios = () => {
    const { accessToken } = useAccessToken(state => state);
    const refresh = useRefreshToken()

    useEffect(() => {
        const requestInterceptor = normalAxios.interceptors.request.use((req) => {
            if(!req.headers["Authorization"]){
                req.headers["Authorization"] = `Bearer ${accessToken}`
                return req
            }
            return req
        })

        const responseInterceptor = normalAxios.interceptors.response.use(
            res => res,
            async err => {
                const previousRequest = err.config

                if(err?.response.status === 403 && !previousRequest.sent){
                    previousRequest.sent = true
                    const new_token = await refresh()
                    previousRequest.headers["Authorization"] = `Bearer ${new_token}`
                    return normalAxios(previousRequest)
                }
                return Promise.reject(err)
            }
        )

        return () => {
            normalAxios.interceptors.request.eject(requestInterceptor)
            normalAxios.interceptors.response.eject(responseInterceptor)
        }
    },[accessToken,refresh])

    return normalAxios
}