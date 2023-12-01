import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Main from './components/Main/main';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/main" element={<Main />} />
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
