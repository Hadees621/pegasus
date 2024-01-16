import React, { useEffect, useState } from 'react';
import OnImage from './OnImage';

const Believe = () => {
    const [menuData, setMenuData] = useState("");
    const [activeMenuItem, setActiveMenuItem] = useState(0);

    const menuItems = [
        {
            heading: 'Our Authors and Readers',
            text: `Every author and every reader is equally important in our eyes. We go out of our way on a daily basis to ensure our
            audience and readers are fulfilled. This includes showcasing our latest releases, creating innovative book trailers, regular
            editorial Q&As and booking in as many author signings and launches as we can. We make sure to answer every
            message sent to us and listen to every review we receive. Without readers there would be no books… but that being said,
            without authors the books wouldn’t even be written. Our authors, to put it simply, are the life and soul of our company. No
            two authors are the same. And we are so incredibly proud of our published writers – not just for their wonderful talents
            but for the joy they have brought so many. We have regular daily communication with our authors, we make sure we are
            always there for every single person and we continue to put all our attention into creating, publishing and promoting
            each author.`,
            img: "assests/about/reading.jpg",
            div: true
        },
        {
            heading: 'Sustainable way of working',
            text: `In our opinion, it is just as important to look after our planet as our people. We have made many positive changes,
            especially in recent years to become more environmentally friendly – in as many areas as possible. The paper we use to
            print our books is carbon-captured paper, meaning it is sustainably sourced. Our aim is to use this for all our books in the
            next two years. We also advise having all manuscripts sent to us electronically, which goes the same for our
            proofreading and amending routine; we have tried to cut down on unnecessary use of paper as much as possible. Many
            of us carpool and cycle or use public transport to get to work to cut down on car fumes. We bring attention to
            environmental awareness days with blog posts and specially created videos. Quite a few of our published works shine a
            light on what can.`,
            img: "assests/about/4.2.png",
        },
        {
            heading: 'A diverse workforce',
            text: `Here at Pegasus, we firmly believe in equality in every area. Our team members all range in religious beliefs, race,
            sexuality, social mobility, disability, and gender. Publishing, in general, has always been a diverse industry and still
            remains as one of the few areas that hires an equal or higher amount of females to males. We are very proud of that.`,
            text2: `However, the industry is in no way perfect. And we have taken it upon ourselves since our creation to lead the way in
            equality in the workforce. We have removed the need for a university degree for all of our jobs, provide our employees
            with exciting benefits, introduced paid work experience and placements, and for our authors, we now accept unsolicited
            manuscripts. We are well aware that not everyone can afford to get an agent, so we felt it was only fair to give everyone
            who can write a chance. We have also published authors from all around the world, and our background of published
            authors ranges in sexuality, gender, color, religion, and disability. There is much more that can be done in the world of
            publishing when it comes to diversity, but we like to think we are paving the way for the future with our forward thinking
            and equal mindedness. And we’re not finished! Every year we make new positive changes and continuously think about
            what we can do. Here’s to now and the future.`,
            img: "assests/about/4.3.png",
        },
        {
            heading: 'Rewardable and memorable publishing journey',
            text: `Every team member at Pegasus is completely dedicated to helping every one of our authors. Success is always the goal
            for both author and publisher. And we are committed to putting our all into the selection of manuscripts, production of
            the books and eventual promotion of the published books. Each author will be assigned an experienced and enthusiastic
            publicity to guide them through the world of publishing – helping to book in book signings/launches, interviews, articles
            and sending the book out to be reviewed. We make sure to be available to our authors at all times. Publishing can be a
            difficult and confusing journey alone, that is why we’re here, to make the ride all the more comfortable and exciting!`,
            img: "assests/about/4.4.png",
        },

    ];

    const handleMenuItemClick = (index) => {
        setMenuData(menuItems[index]);
        setActiveMenuItem(index);
    };

    useEffect(() => {
        setMenuData(menuItems[activeMenuItem]);
    }, []);

    return (
        <div className="w-full justify-center 320:px-6 768:px-12 1024:px-52 1440:px-[340px] 1535:px-[381px] 2000:px-[700px]">
            <div className="flex items-center 1024:mt-6 320:py-8 1024:py-4 2000:py-12">
                <div className="flex-grow border-t border-[#757C97]"></div>
                <div className="text-[#757C97] 320:text-lg 1024:text-[11px] 1440:text-[15px] 2000:text-[20px] font-fairplay px-2">
                    What we believe
                </div>
                <div className="flex-grow border-t border-[#757C97]"></div>
            </div>

            <div className="flex flex-col 1024:flex-row">
                <div className="w-full 1024:w-[27%] space-y-6 1024:space-y-3 2000:space-y-6 1024:pr-10">
                    {menuItems.map((item, index) => (
                        <h1
                            key={index}
                            className={`text-center 1024:text-start text-[20px] 1024:text-[12px] 1440:text-[15px] 2000:text-[24px] ${activeMenuItem === index ? 'text-[#B79248]' : 'text-black'
                                } font-fairplay cursor-pointer`}
                            onClick={() => handleMenuItemClick(index)}
                        >
                            {item.heading}
                        </h1>
                    ))}
                </div>

                <div className="w-full 1024:w-[73%] mt-10 1024:mt-0">
                    {menuData && (
                        <>
                            <h1 className="text-center 1024:text-start text-[24px] 1024:text-[14px] 1440:text-[16px] 2000:text-[28px] text-[#B79248] font-fairplay">
                                {menuData.heading}
                            </h1>
                            <p className="text-center 1024:text-start text-[14px] 1024:text-[8px] 1024:leading-4 1440:text-[12px] 1440:leading-6 2000:text-[18px] 2000:leading-8 1024:mt-2  mt-6 leading-6 font-roboto">
                                {menuData.text}
                            </p>
                            <div
                                className="relative bg-cover bg-center hidden 1024:flex 1024:h-[149px] 1440:h-[200px] 2000:h-[270px] my-10 w-full"
                                style={{ backgroundImage: `url('${menuData.img}')` }}
                            >
                                {menuData.div && <OnImage />}

                            </div>
                            {menuData.text2}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Believe;
