
import Cards from "./components/Cards"
import Navbar from "./Navbar"
import View from "./components/View"
import {Routes,Route} from "react-router-dom"
import Main from "./Main/Main"
import "./App.css"
function App() {

  return (
    <>
<Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="/products/:id" element={<View/>}/>
  </Routes>

    </>
  )
}

export default App
