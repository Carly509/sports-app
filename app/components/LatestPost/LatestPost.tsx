import React from "react";
import PostCard from "./PostCard";

const LatestPost = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] ">
      {/* Heading */}
      <h1 className="heading">Latest Post</h1>
      <div className="w-[80%] mx-auto mt-[3rem]">
        {/* PostCard1 */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION"
            image="/images/n1.jpg"
            date="21 March 2024"
          />
        </div>
        {/* PostCard2 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION"
            image="/images/n2.jpg"
            date="22 March 2024"
          />
        </div>
        {/* PostCard3 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION"
            image="/images/n3.jpg"
            date="23 March 2024"
          />
        </div>
        {/* Postcard4 */}
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="600"
        >
          <PostCard
            title="THE WORLD CUP WHAT TO EXPECT FROM ENGLAND FOOTBALL CLUB BETWEEN POLICY SOLUTION"
            image="/images/n4.jpg"
            date="24 March 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
