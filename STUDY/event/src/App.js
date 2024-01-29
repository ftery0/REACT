import './App.css';
import Main from './components/Home/Main/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
