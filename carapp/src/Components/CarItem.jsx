import React from 'react';
import { Link } from 'react-router-dom';

const CarItem = ({ car }) => {
    console.log(car);

    return (
        <div>
          
            <h2>{car.name}</h2>
            <p>{car.description}</p>
            <Link to={`/cars/${car.id}`}>Details</Link>
            <Link to={`/edit-car/${car.id}`}>Edit</Link>
        </div>
    );
};

export default CarItem;
