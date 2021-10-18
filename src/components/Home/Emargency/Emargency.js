import React from 'react';
import './Emargency.css'

const Emargency = () => {
    return (
        <div className="container">
            <div className="row text-white m-5 border rounded">
                <div className="col-lg-4 d-flex phone p-5">
                    <div><i class="fas fa-phone"></i></div>
                    <div className="ms-3">
                        <h3>Emergency Cases</h3>
                        <p>Please feel free to contact our friendly reception staff with any general or medical enquiry.</p>
                    </div>
                </div>
                <div className="col-lg-4 d-flex time p-5">
                    <div><i class="fas fa-clipboard-list size:7x"></i></div>
                    <div className="ms-3">
                        <h3>Doctors Timetable</h3>
                        <p>Qualified doctors available six days a week, view our timetable to make an appointment.</p>
                    </div>
                </div>
                <div className="col-lg-4 d-flex opening p-5">
                    <div><i class="fas fa-phone"></i></div>
                    <div className="ms-3">
                        <h3>Opening Hours</h3>
                        <p>Please feel free to contact our friendly reception staff with any general or medical enquiry.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emargency;