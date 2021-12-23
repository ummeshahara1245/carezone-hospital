import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide img-caro" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 h-100" alt="..." />
                    <div class="card-img-overlay margin">
                        <h2 className=" text-dark heading">WE CARE FOR YOUR BEST HEALTH</h2>
                        <h2>PROVIDE BEST MEDICAL TREATMENT</h2>
                        <p>We have a state of the art Accident & Emergency unit capable of handling all emergencies, as well as modern wards. <br /> Our ultra-modern theatres ensure that patients are well taken care of and our critical care unit will provide much needed care when clients need life support services. <br />
                        We have opened a state of the art maternity wing where comfort has been emphasized to ensure that mother and baby experience the best. We also have a 9 bed renal unit for patients requiring hemodialysis.</p>
                    </div>
                </div>
                <div class="carousel-item">

                    <img src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img w-100 h-100" alt="..." />
                    <div class="card-img-overlay margin">
                        <h2 className=" text-dark heading">WE CARE FOR YOUR BEST HEALTH</h2>
                        <h2>PROVIDE BEST MEDICAL TREATMENT</h2>
                        <p>We have a state of the art Accident & Emergency unit capable of handling all emergencies, as well as modern wards. <br /> Our ultra-modern theatres ensure that patients are well taken care of and our critical care unit will provide much needed care when clients need life support services. <br />
                        We have opened a state of the art maternity wing where comfort has been emphasized to ensure that mother and baby experience the best. We also have a 9 bed renal unit for patients requiring hemodialysis.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100 h-100" alt="..." />
                    <div class="card-img-overlay margin">
                        <h2 className=" text-dark heading">WE CARE FOR YOUR BEST HEALTH</h2>
                        <h2>PROVIDE BEST MEDICAL TREATMENT</h2>
                        <p>We have a state of the art Accident & Emergency unit capable of handling all emergencies, as well as modern wards.
                            <br /> Our ultra-modern theatres ensure that patients are well taken care of and our critical care unit will provide much needed care when clients need life support services. <br />
                        We have opened a state of the art maternity wing where comfort has been emphasized to ensure that mother and baby experience the best. We also have a 9 bed renal unit for patients requiring hemodialysis.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeaderMain;