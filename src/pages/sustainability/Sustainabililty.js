import React from "react";
import Banner from "../../components/Banner";
import { susComponentsData } from "./utils"; // Ensure the correct import name
import Middle from "./components/Middle";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";

const Sustainability = () => {
    return (
        <>
            <Header />
            <Banner title="Sustainability" subtitle="Home - Sustainability" />
            {/* <Middle data={susComponentsData} /> */}

            <Footer />
        </>
    );
};

export default Sustainability;
