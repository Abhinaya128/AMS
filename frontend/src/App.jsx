import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";
import Errorpage from "./pages/Errorpage";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";


function App(){
  return(
    <>
    <Navbar/>
    <Routes>
       <Route path="/login" element={<Login/>}/>
        <Route path="/employee" element={<Employee/>}/>
         <Route path="/admin" element={<Admin/>}/>
          <Route path="/*" element={<Errorpage/>}/>
    </Routes>
    </>
  )
}
export default App