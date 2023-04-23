import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Loading from "./views/loading"
import Boarding from "./views/boarding"
import Signup from "./views/signup"

function App() {
  return (
    <Router>
      <main
      className='
      '>

        <Routes>
          <Route path="/" element={<Boarding/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
        </Routes>
        
      </main>
    </Router>
  )
}

export default App
