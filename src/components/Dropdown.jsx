import React from 'react'

const Dropdown = ({ options, onSelection }) => {
    return (
        <>
            {/* <div>
                {options.map(option => <h1>{option}</h1>)}
            </div> */}
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {
                        options.map(option => {
                            return <li key={option} onClick={() => onSelection(option)}><a className="dropdown-item" href="#">{option}</a></li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Dropdown