import React from 'react';
import {useNavigate } from 'react-router-dom';
import "../css/styles.css"

const Landing = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/calculator");
    };

    return (
        <div className='land-container'>
            <h1 className="text-gradient fw-bolder text-center mb-4" >Adder Calculator React Test!</h1>
            <p className="text-gradient fw-bolder text-center mb-4">Done by Mustafa Alaraj as per a request</p>
            <button onClick={handleNavigate} className='land-button'>
                Calculator
            </button>
        </div>
    );
};


export default Landing;