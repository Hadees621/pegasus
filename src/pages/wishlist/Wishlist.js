import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import Banner from "../../components/Banner";
import WishlistBooks from "./components/wishlistBooks";

const Wishlist = () => {

    return (
        <>
            <Header />
            <Banner title="Wishlist" subtitle="Home — Wishlist" />
            <div className="1024:mx-40 xl:mx-52 1535:mx-[350px]">
                <WishlistBooks />
            </div>
            <Footer />
        </>
    );
};

export default Wishlist;
