import "./App.css";
import Intro from "./pages/intro/Intro";
import Explore from "./pages/explore/Explore";
import Restaurant from "./pages/restaurant/Restaurant";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/expore" element={<Explore />}></Route>
          <Route path="/restaurant" element={<Restaurant />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
