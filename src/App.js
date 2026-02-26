import logo from './logo.svg';
import './App.css';
// react-router-dom v6+ exports BrowserRouter, Routes and Route directly.
// we don't need `Switch` (replaced by Routes) and we aren't using the
// aliased `Router` variable anywhere in the JSX below.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reg from "./Reg";
import Home from "./Home";

function App() {
  return (
    <>
    <h1>I am App </h1>
    <BrowserRouter>
      <Routes>
        {/* element expects a React node, not the component class itself */}
        <Route path="/reg" element={<Reg />} />
        <Route path="/h" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
