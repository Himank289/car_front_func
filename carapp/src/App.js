import React from 'react';
import {  Routes,BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import AddCar from './pages/AddCar';
import EditCar from './pages/EditCar';
import Header from "./Components/Header";
import './App.css';

const App = () => {
    return (
       <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/"  element={<Home/>} />
                    <Route path="/cars/:id" element={<CarDetails/>} />
                    <Route path="/add-car" element={<AddCar/>} />
                    <Route path="/edit-car/:id" element={<EditCar/>} />
                    </Routes>
            </div>
            </Router>

    );
};

export default App;