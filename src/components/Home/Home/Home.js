import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Emargency from '../Emargency/Emargency';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Emargency></Emargency>
            <Services></Services>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;