import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const ExactIteam = data.filter(hospital => hospital._id === id);


    return (


        <div className="card d-flex container justify-content-center mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={ExactIteam[0]?.imageURL} class="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Service : {ExactIteam[0]?.name}</h5>
                        <p className="card-text">description : {ExactIteam[0]?.description}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;