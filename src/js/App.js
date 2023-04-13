import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Details from "../pages/details";
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="venue/details" element={<Details />} />
        <Route path="*" element={<div>Route not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
