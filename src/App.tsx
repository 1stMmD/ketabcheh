import { lazy , Suspense} from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import NavbarMobile from "./layouts/navbar-mobile/navbar-mobile"
import { useIsSmall } from "./hooks/useIsSmall"
import ReactQueryProvider from "./lib/react-query-provider"
import PersistentLogin from "./hoc/persistent-login"
import AuthProtected from "./hoc/auth-protected"
import RedirectAuth from "./hoc/redirect-auth"

const Boarding = lazy(() => import("./views/boarding"))
const Signup = lazy(() => import("./views/signup"))
const Login = lazy(() => import("./views/login"))
const Home = lazy(() => import("./views/home"))
const Library = lazy(() => import("./views/library"))
const BookDetails = lazy(() => import("./views/book-details"))
const Search = lazy(() => import("./views/search"))
const Results = lazy(() => import("./views/search/results"))
const OrderBook = lazy(() => import("./views/order-book"))

function App() {
  const { isSmall } = useIsSmall()

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

  return (
    <PersistentLogin>
      <ReactQueryProvider>
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
                <Route path="/" element={<RedirectAuth><Boarding/></RedirectAuth>}/>
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<AuthProtected><Home/></AuthProtected>}/>
                <Route path="/search" element={<AuthProtected><Search/></AuthProtected>}/>
                <Route path="/search/:text" element={<AuthProtected><Results/></AuthProtected>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/order" element={<OrderBook/>}/>
                <Route path="/book/:id" element={<BookDetails/>}/>
                <Route path="/cart" element={<div className=" w-full flex min-h-[calc(100vh_-_56px)] "></div>}/>
              </Routes>
            </Suspense>

            <NavbarMobile/>

          </main>
        </Router>
      </ReactQueryProvider>
    </PersistentLogin>
  )
}

export default App
