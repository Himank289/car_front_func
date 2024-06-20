import React, { useEffect, useState } from 'react';
import CarItem from './CarItem';
import carService from '../Services/CarService';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAllCars().then(response => {
            setCars(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Car List</h1>
            {cars.map(car => (
                <CarItem key={car.id} car={car} />
            ))}
        </div>
    );
};

export default CarList;
