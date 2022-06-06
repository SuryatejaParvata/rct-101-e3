import "./App.css";
import  {Navbar}  from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
      
      
      {
        // Code here
        <>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>} /> 
          <Route path="/" element={<Home/>} />
          </Routes>
        </>
      }
    </div>
  );
}

export default App;
