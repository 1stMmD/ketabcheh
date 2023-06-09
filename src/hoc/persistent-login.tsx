import { useEffect, useState } from "react";
import { useRefreshToken } from "../hooks/use-refresh-token";
import { useAccessToken } from "../store";
import Loading from "../views/loading";

type props = {
  children : React.ReactNode
}

function PersistentLogin({
  children
} : props) {
  
  const [loading, setLoading] = useState<boolean>(true)
  const refresh = useRefreshToken()
  const { accessToken } = useAccessToken(state => state)

  useEffect(() => {
    const getAccessToken = async () => {
      try{
        await refresh()
      }
      catch(err){
        console.error(err)
      }
      finally{
        setLoading(false)
      }
    }

    accessToken ? setLoading(false) : getAccessToken()

  },[])

  return (
    <>
    { loading ? 
      <Loading/> : 
      children
    }
    </>
  )
}

export default PersistentLogin