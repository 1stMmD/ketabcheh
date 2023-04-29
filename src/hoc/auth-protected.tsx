import { Navigate } from "react-router"
import { useAuth } from "../hooks/useAuth"

type props = {
    children : React.ReactNode
}

function AuthProtected({
    children
} : props) {
    const [auth, loading] = useAuth()
    
    if(loading) return <p>Loading...</p>

    return (
        <>
            {auth ? children : <Navigate to="/"/>}
        </>
    )
}

export default AuthProtected