import { useQuery } from "react-query"
import { useNormalAxios } from "./use-normal-axios"

export const useAuth = () => {
    const normalAxios = useNormalAxios()

    const {data , isLoading} = useQuery("auth",async () => {
        const res = await normalAxios.get("/profile")
        return res
    })

    return [data , isLoading]
}