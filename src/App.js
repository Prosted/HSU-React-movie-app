import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MovieInfo from "./pages/MovieInfo";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movieInfo/:id" element={<MovieInfo />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
