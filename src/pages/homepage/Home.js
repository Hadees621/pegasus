import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from "../../components/header/Header";
import Section from './components/Section';

const Home = () => {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [applyBlur, setApplyBlur] = useState(false);

    return (
        <>
            <Header setIsMegaMenuOpen={setIsMegaMenuOpen} isMegaMenuOpen={isMegaMenuOpen} setApplyBlur={setApplyBlur} applyBlur={applyBlur} />
            <Section isMegaMenuOpen={isMegaMenuOpen} applyBlur={applyBlur} />
            <Footer />
        </>
    );
};

export default Home;
