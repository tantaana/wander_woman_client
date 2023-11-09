import React from "react";
import BrowseByCategory from "../../Components/Homepage/BrowseByCategory/BrowseByCategory";
import WhyChooseUs from "../../Components/Homepage/WhyChooseUs/WhyChooseUs";
import Destination from "../../Components/Homepage/Destination/Destination";
import FeaturedTours from "../../Components/Homepage/FeaturedTours/FeaturedTours";
import WhyWeAreBest from "../../Components/Homepage/WhyWeAreBest/WhyWeAreBest";
import Testimonial from "../../Components/Homepage/Testimonial/Testimonial";
import ReadyToTravel from "../../Components/Homepage/ReadyToTravel/ReadyToTravel";

const Homepage = () => {
  return (
    <div>
      <BrowseByCategory />
      <WhyChooseUs />
      <Destination />
      <FeaturedTours />
      <WhyWeAreBest />
      <Testimonial />
      <ReadyToTravel />
    </div>
  );
};

export default Homepage;
