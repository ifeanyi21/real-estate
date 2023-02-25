import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import View from "./pages/View Home/View";
import ScrollToTop from "./components/Scroll To Top/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout Children={<Home/>}/>}/>
          <Route path="/:name/:id" element={<Layout Children={<View/>}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
