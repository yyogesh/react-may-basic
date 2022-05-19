import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);
    let [color, setColor] = useState('Red');
    let [name, setName] = useState('BMW');

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const onAddClick = () => {
        setCount(++count);
    };
    const onAddColor = () => {
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        setCar({
            ...car,
            color
        });
    }

    console.log('this is re-render')

    return (
        <div>
            {count}
            <button onClick={onAddClick}>Add</button>
            <button style={{ color }} onClick={onAddColor}>Add Color</button>
            <p>
                It is a {car.color} {car.model} from {car.year}. this is name of new component {name}
            </p>

            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

        </div>
    )
}

export default Counter