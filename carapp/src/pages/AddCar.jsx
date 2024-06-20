import React from 'react';
import { useNavigate } from 'react-router-dom';
import CarForm from '../Components/CarForm'
import carService from '../Services/CarService';

const AddCar = () => {
    const navigate=useNavigate();

    const handleSave = (car) => {
        carService.createCar(car).then(() => {
            navigate('/');
        });
    };

    return (
        <div>
            <h1>Add Car</h1>
            <CarForm onSave={handleSave} />
        </div>
    );
};

export default AddCar;
