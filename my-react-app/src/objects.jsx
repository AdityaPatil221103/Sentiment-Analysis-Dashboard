import React, {useState} from 'react';

function Objects() {
    const [car, setCar] = useState({year: 2020, 
                                    model: 'Mustang', 
                                    color: 'red'});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));

    }   
    function handleColorChange(event){
        setCar(c => ({...c, color: event.target.value}));

    }

    return (
    <div>
        <p>Your Fav car is: {car.year} {car.model} in {car.color}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        <input type="text" value={car.color} onChange={handleColorChange}/><br/>
    </div>);
}
export default Objects;