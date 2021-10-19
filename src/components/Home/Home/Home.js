import React from 'react';
import Banner from '../Banner/Banner';
import Emargency from '../Emargency/Emargency';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Emargency></Emargency>
            <Services></Services>
        </div>
    );
};

export default Home;