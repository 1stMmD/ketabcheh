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
  return (
    <Router>
      <main
      dir="rtl"
      className='
      '>

        <Routes>
          <Route path="/loading" element={<Loading/>}/>
          <Route path="/" element={<Boarding/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/search/:text" element={<Results/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/order" element={<OrderBook/>}/>
          <Route path="/book/:id" element={<BookDetails/>}/>
          <Route path="/cart" element={<></>}/>
        </Routes>

        <NavbarMobile/>
        
      </main>
    </Router>
  )
}

export default App
