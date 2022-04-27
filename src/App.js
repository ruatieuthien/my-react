
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Navbar from './common/Navbar/Navbar';
import Home from "./components/pages/Home";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' component={Home}></Route>
      </Routes>
    </Router>
  );
}

export default App;
