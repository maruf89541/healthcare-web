import React from 'react';

const Doctors = () => {
    return (
        <div className="container mt-5">
            <h3 className="text-center mb-5">Meet our doctors</h3>
            <div className="row">
                <div class="card col-lg-4 me-auto" style={{ width: "18rem" }}>
                    <img src="https://i.ibb.co/rHnPVJ8/Portrait-of-smiling-doctor-looking-at-camera-on-background-of-his-working-colleagues.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-lg-4 me-auto" style={{ width: "18rem" }}>
                    <img src="https://i.ibb.co/7NWtsCC/female-doctor-hospital-with-stethoscope.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card col-lg-4 ms-aotu" style={{ width: "18rem" }}>
                    <img src="https://i.ibb.co/1bZ69Yv/Portrait-of-a-smiling-handsome-male-doctor-dressed-in-uniform-with-stethoscope-showing-thumbs-up-ges.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Doctors;