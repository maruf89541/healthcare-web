import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detailes = () => {
    const { serviceId } = useParams()
    const [alServiceDetails, setEmployeesDetails] = useState([]);

    const [singleServiceDetailes, setSingleEmployee] = useState({});
    //  data load howa
    useEffect(() => {
        fetch("/service.json")
            .then((res) => res.json())
            .then((data) => setEmployeesDetails(data));
    }, []);

    // call hbe jokon amar shob data load hye state e set hbe
    useEffect(() => {
        const foundEmployee = alServiceDetails.find(
            (employee) => employee.id === serviceId
        );
        setSingleEmployee(foundEmployee);
    }, [alServiceDetails]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 p-5"><img className="img-fluid" src={singleServiceDetailes?.img} alt=""></img></div>
                <div className="col-lg-6 p-5  mt-5">
                    <h1 className="mb-3">{singleServiceDetailes?.name}</h1>
                    <p className="mt-5">{singleServiceDetailes?.descripiton}
                    </p>
                    <h1>${singleServiceDetailes?.price}</h1>
                    <button className="btn btn-dark px-3 me-3">Get service   <i class="fas fa-angle-right"></i></button>
                </div>

            </div>
        </div>
    );
};

export default Detailes;