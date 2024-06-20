import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import carService from '../Services/CarService';

const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(() => {
        carService.getCarById(id).then(response => {
            setCar(response.data);
        });
    }, [id]);

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{car.name}</h1>
            <p>Brand: {car.brand}</p>
            <p>Color: {car.color}</p>
            <p>Type: {car.type}</p>
            <p>Description: {car.description}</p>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
            <img src={car.image} alt={car.name} />
        </div>
    );
};

export default CarDetails;