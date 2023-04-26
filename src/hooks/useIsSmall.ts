import { useState, useEffect } from "react"

// create a state who shows if the screen is smaller than 450px or not
export const useIsSmall = () => {
    const [isSmall , setIsSmall] = useState<boolean>(true)

    useEffect(() => {
        const onChange = (w : MediaQueryListEvent) => {
            setIsSmall(w.matches)
        }
        const mediaQuery = window.matchMedia("(max-width : 450px)")
        setIsSmall(mediaQuery.matches)
        mediaQuery.addListener(onChange)

        return () => {
            mediaQuery.removeListener(onChange)
        }
    },[])

    return {
        isSmall
    }
}