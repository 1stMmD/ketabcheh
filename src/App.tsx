import { useState , useRef , useEffect, lazy , Suspense} from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import NavbarMobile from "./layouts/navbar-mobile/navbar-mobile"
import { useIsSmall } from "./hooks/useIsSmall"

const Loading = lazy(() => import("./views/loading"))
const Boarding = lazy(() => import("./views/boarding"))
const Signup = lazy(() => import("./views/signup"))
const Home = lazy(() => import("./views/home"))
const Library = lazy(() => import("./views/library"))
const BookDetails = lazy(() => import("./views/book-details"))
const Search = lazy(() => import("./views/search"))
const Results = lazy(() => import("./views/search/results"))
const OrderBook = lazy(() => import("./views/order-book"))

function App() {
  const { isSmall } = useIsSmall()

  // show loading for 2 sec
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

  // if screen is not small don't render the app
  if(!isSmall) return(
    <div
    className="
    flex
    w-full
    min-h-screen
    bg-primary
    text-white
    items-center
    justify-center
    font-[IRANSans]
    ">
        <p
        className="
        text-center
        w-[min(300px,90%)]
        ">
          این سایت فقط در صفحات با عرض کم قابل مشاهده هست
        </p>
    </div>
  )

  // show loading
  if(loading) return (
    <Loading/>
  )

  return (
    <Router>
      <main
      dir="rtl"
      className='
      '>
        <Suspense
        fallback={
          <div
          className="
          flex
          w-full
          min-h-[calc(100vh_-_56px)]
          items-center
          justify-center
          font-[IRANSans]
          ">

          </div>
        }>
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
        </Suspense>

        <NavbarMobile/>

      </main>
    </Router>
  )
}

export default App
