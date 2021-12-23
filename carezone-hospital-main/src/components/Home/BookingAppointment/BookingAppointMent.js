import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import './BookingAppointment.css'
const BookingAppointMent = () => {
    return (
        <div>
            <HeaderMain />
            <div className="d-lg-flex appointment">
                <div className="text-left p-5 w-50 ">
                    <h1 className="text-danger">
                        APPOINTMENT BOOKING
                    </h1>
                    <h5>You are most welcome to MMCL for you health services !</h5>

                    <h5> Working hours [ For Patients ]: <small>24 Hours, 365 days</small></h5>

                    <h5>
                        Working hours [ General ]: <small> 09 to 17 Hours, Except Holidays</small>
                    </h5>
                    <h5>  Phone : <small>88 02 9830706, 88 02 9830531</small></h5>

                    <h5>
                        Fax: <small>9830482</small>
                    </h5>
                    <h5> Mobile: <small> 88 0171 8237035</small></h5>

                    <h5>         <small>   Email : carezonehelp@gmail.com</small>
                    </h5>
                    <h5> 46, Shaheed Taj Uddin Ahmed Sarani, Mohakhali,
                        [ Near Tangail Bus Stand]
                        Dhaka- 1212, Bangladesh</h5>
                    <br />
                    <h3 className="text-danger">FEES & INSURANCE</h3>
                    <h5>For the convenience of our clients the Metropolitan Medical Center Limited  provides direct <br /> insurance billing with all the major international insurance providers and assistance companies.</h5>
                </div>
                <div class="container itemx-center p-4 w-50 m-5">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="text-center my-4">
                                Find Consultations
                            </h2>
                            <form>
                                <div class="form-group row">
                                    <label class="col-sm-4 col-lg-4">
                                        Name
                                    </label>
                                    <div class="col-sm-8 col-lg-8">
                                        <input type="text" id="patient-name" class="form-control"
                                            placeholder="Name" required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 col-lg-4">
                                        Contact
                                    </label>
                                    <div class="col-sm-8 col-lg-8">
                                        <input type="tel" id="patient-name" class="form-control"
                                            placeholder="123" required />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 col-lg-4">
                                        Date
                                    </label>
                                    <div class="col-sm-8 col-lg-8">
                                        <input type="date" id="date" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 col-lg-4">
                                        Time
                                    </label>
                                    <div class="col-sm-8 col-lg-8">
                                        <input type="time" id="time" class="form-control" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 col-lg-4">
                                        Symptoms
                                    </label>
                                    <div class="col-sm-8 col-lg-8">
                                        <textarea id="symptoms" class="form-control" ></textarea>
                                    </div>
                                </div>
                                <div class="form-group row justify-content-end">
                                    <div class="col-sm-5">
                                        <button type="submit" class="btn btn-form">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookingAppointMent;