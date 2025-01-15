import { Route, Routes,BrowserRouter } from "react-router-dom";
import News from "../components/news/news";
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<News/>}/>
            <Route path="/login" element={""}/>
            <Route path="/signup" element={""}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
