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
          <Route path="/search" element={<Home/>}/>
          <Route path="/library" element={<Home/>}/>
          <Route path="/cart" element={<Home/>}/>
        </Routes>

        <NavbarMobile/>
        
      </main>
    </Router>
  )
}

export default App
