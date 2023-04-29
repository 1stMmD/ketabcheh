import React from 'react'
import { QueryClient , QueryClientProvider } from "react-query"

type props = {
    children : React.ReactNode
}

function ReactQueryProvider({
    children
} : props) {
    const client = new QueryClient()

    return (
        <QueryClientProvider
        client={client}>
            {children}
        </QueryClientProvider>
    )
}

export default ReactQueryProvider