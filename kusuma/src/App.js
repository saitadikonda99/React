import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js'
import ContactMe from "./ContactMe.js";

const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/ContactMe' element={<ContactMe/>} />
              </Routes>
            </Router>
        </>
    );
}

export default App;