import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignupForm from "./pages/Signup"


function App() {

  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignupForm/>}/>
    <Route path='/main' element={<SignupForm/>}/>

  </Routes>
  )
}

export default App