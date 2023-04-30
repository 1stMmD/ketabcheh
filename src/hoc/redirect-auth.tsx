import { Navigate } from "react-router"
import { useAuth } from "../hooks/useAuth"

type props = {
    children : React.ReactNode
}

function RedirectAuth({
    children
} : props) {
    const [ auth,loading ] = useAuth()

    if(loading) return <p>loading...</p>

    return (
        <>
        {
            auth ? <Navigate to="home"/> : children
        }
        </>
    )
}

export default RedirectAuth