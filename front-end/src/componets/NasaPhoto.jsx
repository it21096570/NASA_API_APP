import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NasaPhoto.css'


function NasaPhoto() {

    const [photoData, setPhotoData] = useState(null)
    // const apiKey = process.env.REACT_APP_NASA_
    const navigate = useNavigate(); // Navigation hook

    const back = () => {
        navigate('/home');
    };

    useEffect(() => {

        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=OGNeaLOFaEYt7VEbVcTO2lznyXtIh7LGqMQAt7uV`);

            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <div className="outer-container">
            <div className="image-card">
                <img className="image-photo" src={photoData.url} alt={photoData.title} />
                <div className="image-info">
                    <h1 className="image-title">{photoData.title}</h1>
                    <p className="image-date">Date - {photoData.date}</p>
                    <p className="image-explanation">{photoData.explanation}</p>
                </div>
            </div>

            <div className="button-container">
                <button className="register-button" onClick={back}>Back to Menu</button>
            </div>
        </div>
    );

}

export default NasaPhoto
