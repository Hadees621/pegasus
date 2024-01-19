import React from "react";
import Faq from "../components/Faq";

const FaqDemo = () => {
    const faqs = [
        {
            q: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh?",
            a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi ",
            expanded: true,
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh?",
            a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi ",
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh?",
            a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi ",
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh?",
            a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi ",
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh?",
            a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi ",
        },
        {
            q: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh?",
            a: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim consequat.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio ignissim qui blandit praesent luptatum zzrildelenit augue duis dolore te feugait nulla facilisi ",
        },
    ];

    return (
        <>
            <div className=" bg-[#F8F5EF] py-28 1024:py-10 1440:py-24">
                <div className="flex flex-col 1024:flex-row w-full justify-center 768:px-12 1024:px-56 1440:px-[400px] 1535:px-[430px] 2000:px-[580px] 2560:px-[700px] gap-8 1024:gap-0 1440:gap-4 2000:gap-8">
                    <div className="w-full 1024:w-[20%]">
                        <p className="text-[25px] text-center 1024:text-start 1024:text-[18px] 1440:text-[24px] 2000:text-[39px] 2560:text-[50px] font-fairplay mt-3"> Frequently Asked Questions </p>
                    </div>

                    <div className="w-full 1024:w-[80%] px-2 1024:px-1">
                        <Faq faqs={faqs} defaultAllExpanded={false} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default FaqDemo;