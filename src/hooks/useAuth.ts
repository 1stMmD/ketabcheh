import { useQuery } from "react-query"
import { useNormalAxios } from "./use-normal-axios"

export const useAuth = () => {
    const normalAxios = useNormalAxios()

    const {data , isLoading} = useQuery("auth",async () => {
        const res = await normalAxios.get("/auth/get-profile")
        return res
    },
    {
        refetchOnWindowFocus : false,
        retry : 1
    })

    return [data , isLoading]
}