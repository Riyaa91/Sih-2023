import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup'
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
      </Routes>
    </>
  );
}

export default App;
