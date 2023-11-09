import React from "react";
import BrowseByCategory from "../../Components/Homepage/BrowseByCategory/BrowseByCategory";
import WhyChooseUs from "../../Components/Homepage/WhyChooseUs/WhyChooseUs";
import Destination from "../../Components/Homepage/Destination/Destination";
import FeaturedTours from "../../Components/Homepage/FeaturedTours/FeaturedTours";

const Homepage = () => {
  return (
    <div>
      <BrowseByCategory />
      <WhyChooseUs />
      <Destination />
      <FeaturedTours />
    </div>
  );
};

export default Homepage;
