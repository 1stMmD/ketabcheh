import { useState , useRef , useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Loading from "./views/loading"
import Boarding from "./views/boarding"
import Signup from "./views/signup"
import Home from "./views/home"
import NavbarMobile from "./layouts/navbar-mobile/navbar-mobile"
import Library from "./views/library"
import BookDetails from "./views/book-details"
import Search from "./views/search"
import Results from "./views/search/results"
import OrderBook from "./views/order-book"

function App() {

  const [loading , setLoading] = useState(true)
  const timeout = useRef<null | number>(null)

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setLoading(false)
    },2000)


    return () => {
      if(timeout.current)
        clearTimeout(timeout.current)
    }
  },[])

  if(loading) return (
    <Loading/>
  )

  return (
    <Router>
      <main
      dir="rtl"
      className='
      '>

        <Routes>
          <Route path="/" element={<Boarding/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/search/:text" element={<Results/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/order" element={<OrderBook/>}/>
          <Route path="/book/:id" element={<BookDetails/>}/>
          <Route path="/cart" element={<div className=" w-full flex min-h-[calc(100vh_-_56px)] "></div>}/>
        </Routes>

        <NavbarMobile/>
        
      </main>
    </Router>
  )
}

export default App
