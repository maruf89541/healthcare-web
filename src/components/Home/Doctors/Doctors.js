import React from 'react';

const Doctors = () => {
    return (
        <div className="container mt-5">
            <h3 className="text-center mb-5">Meet our doctors</h3>
            <div className="row">
                <div class="card col-lg-4 me-auto" style={{ width: "18rem" }}>
                    <img src="https://i.ibb.co/rHnPVJ8/Portrait-of-smiling-doctor-looking-at-camera-on-background-of-his-working-colleagues.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Dr.Nadim Ahmed</h5>
                        <p class="card-text">Dr.Nadim Ahmed MBBS, MCPS, DGO, MS (America), PhD (America), Gynaecology & Obstetrics, American International Hospital</p>
                    </div>
                </div>
                <div class="card col-lg-4 me-auto" style={{ width: "18rem" }}>
                    <img src="https://i.ibb.co/7NWtsCC/female-doctor-hospital-with-stethoscope.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Dr Aysha aqtar</h5>
                        <p class="card-text"> Dr Aysha aqtarMBBS, FCPS (Gynaecology & Obstetrics), MCPS, BCPS, Gynaecology & Obstetrics, Ibn Sina Diagnostic & Imaging Center</p>
                    </div>
                </div>
                <div class="card col-lg-4 ms-aotu" style={{ width: "18rem" }}>
                    <img src="https://i.ibb.co/1bZ69Yv/Portrait-of-a-smiling-handsome-male-doctor-dressed-in-uniform-with-stethoscope-showing-thumbs-up-ges.jpg" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Dr. Hossain sarkar</h5>
                        <p class="card-text">Dr. Hossain sarkar MBBS, DGO, MCPS (Gynae), MS (Gynae), FCPS (Gynae), Gynaecology & Obstetrics</p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Doctors;