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

            <div className="1024:mx-40 xl:mx-52 1535:mx-[350px] border">
                <WishlistBooks />
                {/* <div className="grid 768:grid-cols-3 1024:grid-cols-6 justify-center 2560:mt-6">
                    {fantasyReadData.map((book, index) => (
                        <div key={index} className="m-4 p-3 text-center 768:m-0 1440:m-1">
                            <img className="320:h-[420px] 1024:h-[140px] 1024:w-[160px] 1440:h-[210px] 2560:w-[240px] 2560:h-[380px]" src={book.imageSrc} alt={`Book Image ${index + 1}`} />
                            <div className='w-full text-start my-2'>
                                <h3 className="1024:text-[8px] 1440:text-[11px] 2560:text-[19px] font-medium font-fairplay">{book.title}</h3>
                                <p className="1024:text-[6px] 1440:text-[9px] 2560:text-[17px] text-[#B79248] font-roboto">{book.author}</p>

                                <p className="1024:text-[6px] 1440:text-[9px] 2560:text-[17px] text-[#B79248] font-roboto">Select format</p>

                            </div>
                        </div>
                    ))}
                </div> */}
            </div>

            <Footer />
        </>
    );
};

export default Wishlist;
