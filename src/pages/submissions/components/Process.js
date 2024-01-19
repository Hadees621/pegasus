import React from "react";

const Process = () => {
  return (
    <>
      <div className="flex flex-col 1024:flex-row w-full justify-center 1024:px-40 xl:px-52 2560:px-96 py-12 2560:py-32 2560:gap-10 1024:gap-4">
        <div className="flex flex-col items justify-center text-center group bg-white w-full 2560:pr-7 px-6 1024:px-2 2560:py-10 gap-10 1024:gap-2 768:w-[80%] 768:mx-20 1024:w-full 1024:mx-0 1024:py-4">
          <p className="text-start text-[26px] 768:text-[28px] 1024:text-[10px] 1440:text-[16px] 2000:text-[28px] text-[#B79248] font-fairplay">
            Publishing Process
          </p>
          <p className="text-start text-[15px] 1024:text-[6px] 768:text-[19px] 1024:leading-3 1440:text-[9px] 1440:leading-6 2000:text-[15px] 2000:leading-8 2000:my-9 leading-6 font-roboto">
            Once your submission is received it is considered for publication by
            an editor, who will assess content, subject matter and suitability
            under one of our imprints
          </p>

          <button className="bg-[#031428] text-lg text-white rounded-3xl w-[150px] h-12 font-fairplay 1024:w-[50px] 1024:h-[18px] 1440:w-[80px] 1440:h-[24px] 1440:text-[10px] 2560:w-[130px] 2560:h-[45px] 2560:text-[17px] 1024:text-[7px] items-center flex justify-center font-extralight 2560:mb-3">
            Read more
          </button>

          <div className="flex gap-6 1024:gap-2 items-center py-8 1024:py-3 ">
            <a
              href="#"
              className="flex items-center justify-center h-12 w-12 1024:h-5 1024:w-5 2560:h-12 2560:w-12 rounded-full bg-white border border-black 2560:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="1024:h-3 2560:h-20"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g transform="rotate(-90 16 16)">
                  <path
                    fill="currentColor"
                    d="m16 6.594l-.72.687l-12.5 12.5l1.44 1.44L16 9.437l11.78 11.78l1.44-1.437l-12.5-12.5z"
                  />
                </g>
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-center h-12 w-12 1024:h-5 1024:w-5 2560:h-12 2560:w-12 rounded-full bg-white border border-black 2560:p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="1024:h-3 2560:h-20"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g transform="rotate(90 16 16)">
                  <path
                    fill="currentColor"
                    d="m16 6.594l-.72.687l-12.5 12.5l1.44 1.44L16 9.437l11.78 11.78l1.44-1.437l-12.5-12.5z"
                  />
                </g>
              </svg>
            </a>
            <p className="1024:text-[9px] 2560:text-[20px] 2560:ml-8">
              {" "}
              01 / 02
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center group bg-white w-full border shadow-xl 2560:p-10 768:w-[80%] p-8 768:mx-20 1024:w-full 1024:mx-0 1024:px-3 1024:py-3 ">
          <img
            className="flex items-center justify-center w-full"
            src="assests/submissions/Asset1.png"
            alt="Section Image"
          />
          <p className="text-center mt-8 1024:mt-2 425:text-start text-[24px] 768:text-[26px] 1024:text-[9px] 1440:text-[16px] 2000:text-[28px] text-[#B79248] font-fairplay">
            Completing your manuscript
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center group bg-white w-full border shadow-xl 2560:p-10 768:w-[80%] p-8 768:mx-20 1024:w-full 1024:mx-0 1024:px-3 1024:py-3 ">
          <img
            className="flex items-center justify-center w-full"
            src="assests/submissions/Asset2.png"
            alt="Section Image"
          />
          <p className="text-center mt-8 1024:mt-2 425:text-start text-[24px] 768:text-[26px] 1024:text-[9px] 1440:text-[16px] 2000:text-[28px] text-[#B79248] font-fairplay">
            Submission and editorial
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center group bg-white w-full border shadow-xl 2560:p-10 768:w-[80%] p-8 768:mx-20 1024:w-full 1024:mx-0 1024:px-3 1024:py-3 ">
          <img
            className="flex items-center justify-center w-full pt-10"
            src="assests/submissions/Asset3.png"
            alt="Section Image"
          />
          <p className="text-center mt-8 1024:mt-2 425:text-start text-[24px] 768:text-[26px] 1024:text-[9px] 1440:text-[16px] 2000:text-[28px] text-[#B79248] font-fairplay">
            Offer of publication
          </p>
        </div>
      </div>
    </>
  );
};

export default Process;
