import React from "react";
import HighlightsCard from "./HighlightsCard";

const MatchHighlights = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] ">
      {/* Heading */}
      <h1 className="heading">Match Highlights</h1>
      <div className="mt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]">
        {/* Cards */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <HighlightsCard
            image="/images/h1.jpg"
            title="ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY"
            date="21 March 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <HighlightsCard
            image="/images/h2.jpg"
            title="ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY"
            date="22 March 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <HighlightsCard
            image="/images/h3.jpg"
            title="ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY"
            date="23 March 2024"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <HighlightsCard
            image="/images/h4.jpg"
            title="ARSENAL STAY TOP, TEN HAG AT MAN UTD DISPLAY"
            date="24 March 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default MatchHighlights;
