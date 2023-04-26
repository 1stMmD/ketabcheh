import { useState, useEffect } from "react"

// create a state who shows if the screen is smaller than 420px or not
export const useIsSmall = () => {
    const [isSmall , setIsSmall] = useState<boolean>(true)

    useEffect(() => {
        const onChange = (w : MediaQueryListEvent) => {
            setIsSmall(w.matches)
        }
        const mediaQuery = window.matchMedia("(max-width : 420px)")

        mediaQuery.addEventListener("change",onChange)

        return () => {
            mediaQuery.removeEventListener("change",onChange)
        }
    },[])

    return {
        isSmall
    }
}