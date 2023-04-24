import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DogFinder from "./DogFinder"

function App() {
  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DogFinder />} />
          <Route path="/dogs/:name" element={<DogFinder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
