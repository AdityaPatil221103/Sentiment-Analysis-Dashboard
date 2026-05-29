import React, {useState} from 'react';

function Arrays() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear() );
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function handleAddCar() {

        const newCar = {year:carYear,
                        make:carMake,
                        model:carModel};

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }
    function handleDeleteCar(index) {
        setCars(c => c.filter((_, i) => i !== index));

    }
    function handleYearCar(event) {
        setCarYear(event.target.value);

    }
    function handleMakeChange(event) {
        setCarMake(event.target.value);

    }   
    function handleModelChange(event) {
        setCarModel(event.target.value);

    }

    return(<div>
        <h2>List of car objects</h2>
        <ul>
            {cars.map((carMake, index) =>
                  <li key={index} onClick={() => handleDeleteCar(index)}>
                      {cars.year} {cars.make} {cars.model}  
                  </li>)}

        </ul>

        <input type='number' value={carYear} onChange={handleYearCar} /><br/>
        <input type='text' value={carMake} onChange={handleMakeChange} 
               placeholder='Enter Car Make'/><br />
        <input type='text' value={carModel} onChange={handleModelChange} 
               placeholder='Enter Car Model'/><br />
        <button onClick={handleAddCar}>Add Car</button>
    </div>)

}
export default Arrays;