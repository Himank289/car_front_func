import React, { useState, useEffect } from 'react';

const CarForm = ({ car, onSave }) => {
    const [formData, setFormData] = useState({
        id:'',
        brand: '',
        color: '',
        name: '',
        type: '',
        description: '',
        price: '',
        year: '',
        image: ''
    });

    useEffect(() => {
        if (car) {
            setFormData(car);
        }
    }, [car]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            
            <input
                type="number"
                name="id"
                value={formData.id}
                onChange={handleChange}
                placeholder="id"
            />
            <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Brand"
            />
            <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                placeholder="Color"
            />
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Type"
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
            />
            <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Year"
            />
            <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image URL"
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default CarForm;
