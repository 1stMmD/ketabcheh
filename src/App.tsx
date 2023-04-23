import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Loading from "./views/loading"
import Boarding from "./views/boarding"

function App() {
  return (
    <Router>
      <main
      className='
      '>

        <Routes>
          <Route path="/" element={<Boarding/>}/>
        </Routes>
        
      </main>
    </Router>
  )
}

export default App
