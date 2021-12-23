import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Service.css'
const Service = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <h1 className="text-center m-5">Medical Departments

                The Backbone of our Clinic</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4 container-fluid services">
                <div className="col">
                    <div className="card h-100">
                        <img className="img" src="https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">NEURO SURGERY
                            </h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="img" src="https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">CARDIAC SURGERY</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img className="img" src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MEDICINE
                            </h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                       
                    </div>
                </div>

            </div>
            <h1 className="m-5 text-center">About Us</h1>

            <div className="d-lg-flex container-fluid p-5">
                <div className="w-50">
                    <h3>A GLANCE IN TO PAST</h3><hr />
                    <p>Back in 1978, with a rental house at Eskaton Garden, Dhaka, a noble gesture, a wise venture of 5 Founder Directors started shaping up. Primarily based on the personal initiative dream and vision and leadership of Dr. A. K. N. Islam (then Chief of Medicine at Holy family Red Crescent Hospital) all was set to start a private clinic. Throughout the years passed hard work & commitment of the team earned name and fame of the clinic amongst patients & doctors. The 4 other sponsor directors are Mr. Abdul Matin, Prof. M. A. Zaman, Mrs. Lutfor Rahman and Mr. M. A. Matin.</p>
                    <h3>A PURPOSE BUILT PRIVATE HOSPITAL</h3><hr />
                    <p>Defining and redefining the vision in its day to day process the mission was set to shift this clinic to a bigger and better space in view to cater some specific scarce treatment and services. It was 1981 when a land of 1.5 bigha was purchased to construct premises of its own. The venture resulted in the first purpose built private hospital in Dhaka.</p>
                    <h3>NEURO SURGERY:</h3><hr />
                    <p>Metropolitan Medical Centre from its inception till now has one of the largest neuro surgical centre outside govt. sector. Prof. Rashiduddin Ahmad an eminent neuro surgeon of the country has been associated with this hospital from inception. Gradually the department was enlarged with eminent neuro surgeons of BSMMU namely Prof. Afzal Hossain, Prof. Kanak Kanti Barua, Dr. Moududul Hoque. They are rendering valuable services to the patients of Bangladesh.</p>
                </div>
                <div className="w-100 h-100">
                    <img src="https://images.unsplash.com/photo-1591766138175-adc7b22a3708?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxkb2N0b3JzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
            <Footer />
        </div>);
};

export default Service;