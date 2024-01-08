import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Section from './components/Section';

const Home = () => {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    return (
        <>
            <Header setIsMegaMenuOpen={setIsMegaMenuOpen} isMegaMenuOpen={isMegaMenuOpen} />
            <Section isMegaMenuOpen={isMegaMenuOpen} />
            <Footer />
        </>
    );
};

export default Home;
