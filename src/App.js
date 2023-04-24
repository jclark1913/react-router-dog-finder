import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import DogFinder from "./DogFinder"

function App() {
  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dogs" element={<DogFinder />} />
          <Route path="/dogs/:name" element={<DogFinder />} />
          <Route path="*" element={<Navigate to='/dogs' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
