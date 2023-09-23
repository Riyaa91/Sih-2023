import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login/Login'
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
