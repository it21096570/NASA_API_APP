import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


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
            const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=OGNeaLOFaEYt7VEbVcTO2lznyXtIh7LGqMQAt7uV`);

            const data = await res.json();
            setPhotoData(data.photos);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;

    return (
        <div className="outer-container">
            <h1 style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', border: '2px', opacity: '0.8' }}>Mars Rover Photos</h1>
            <div>
                {
                    photoData.map((photo) => (
                        <div key={photo.id}>
                            <div className="image-card">
                                <img className="image-photo" src={photo.img_src} alt={photo.rover.name} />
                                <div className="image-info">
                                    <h1 className="image-title">{photo.rover.name}</h1>
                                    <p className="image-date">Camera - {photo.camera.full_name}</p>
                                    <p className="image-date">Earth Date - {photo.earth_date}</p>
                                    <p className="image-date">Launch Date - {photo.rover.launch_date}</p>
                                    <p className="image-date">Landing Date - {photo.rover.landing_date}</p>
                                    <p className="image-explanation">{photo.explanation}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className="button-container">
                <button className="register-button" onClick={back}>Back to Menu</button>
            </div>

        </div>
    );

}

export default NasaPhoto
