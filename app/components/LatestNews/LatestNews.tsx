import React from "react";
import NewsCard from "../Helper/NewsCard";
import SmallNewsCard from "../Helper/SmallNewsCard";

const LatestNews = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] ">
      {/* Heading */}
      <h1 className="heading">Latest News</h1>
      <div className="w-[80%] mx-auto pt-[4rem] grid grid-cols-1 lg:grid-cols-5 gap-[2rem]">
        {/* Big card */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="col-span-3"
        >
          <NewsCard
            image="/images/n1.jpg"
            date="March 23 ,2024"
            title="Whats new in team England"
            height="h-[400px]"
          />
        </div>
        {/* small card */}
        <div className="col-span-2">
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <SmallNewsCard
              image="/images/n1.jpg"
              date="March 23 , 2024"
              title="Whats new in team England"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
            className="mt-[1.4rem] mb-[1.4rem]"
          >
            <SmallNewsCard
              image="/images/n2.jpg"
              date="March 24 , 2024"
              title="Whats new in team England"
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="600"
          >
            <SmallNewsCard
              image="/images/n3.jpg"
              date="March 25 , 2024"
              title="Whats new in team England"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
