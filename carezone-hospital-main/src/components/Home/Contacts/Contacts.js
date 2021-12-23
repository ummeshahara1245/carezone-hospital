import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Contacts.css'
const Contacts = () => {
    return (
        <div>
            <HeaderMain />
            <h1 className='text-center m-5'>Contact Us</h1>
            <div className="d-lg-flex">
            <div className="container-fluid p-5">
                <div className="container">
                    <form id="contact" action="" method="post">
                        <h3>Contact Form</h3>
                        <h4>Contact us for custom quote</h4>
                        <fieldset>
                            <input placeholder="Your name" type="text" tabindex="1" required autofocus />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Email Address" type="email" tabindex="2" required />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
                        </fieldset>
                        <fieldset>
                            <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className="m-5 text-left">
                    <h3>CONTACT INFO & DETAILS</h3><hr />
                    <h5>You are most welcome to MMCL for you health services !
                    </h5>
                    <h5>Working hours [ For Patients ]: 24 Hours, 365 days

                    </h5>
                    <h5>Working hours [ General ]:  09 to 17 Hours, Except Holidays

                    </h5>
                    <h5>Phone : +88-02-8824155/ +88-02-9830482

                    </h5>
                    <h5>Email : mmcl.nc78@gmail.com

                    </h5>
                    <h5>46, Shaheed Taj Uddin Ahmed Sarani, Mohakhali, Dhaka.
                        [ Near Tangail Bus Stand]

                    </h5>
                    <hr />
                    <h3>APPOINTMENT REQUEST
                    </h3>
                    <h5>If you wish to book an appointment with a doctor, it is best that you visit the Appointment Booking Page directly.

                    </h5>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contacts;