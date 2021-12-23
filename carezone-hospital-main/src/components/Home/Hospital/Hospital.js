import React, { useEffect, useState } from 'react';
import HospitalCard from '../HospitalCard/HospitalCard';


const Hospital = () => {
    const [hospital, setHospital] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHospital(data);
            })
    }, [])
    return (
        <section id="book-ride" className="mt-5 container">
            <h2 className="text-center fw-bolder">Our <span style={{ color: '#304770' }}>Services</span></h2>
            <h3 className="text-center">The services we provide for you </h3>

            <div className="row">
                {
                    hospital.map(hospital => <HospitalCard hospital={hospital}></HospitalCard>)
                }
            </div>
        </section>
    );
};

export default Hospital;