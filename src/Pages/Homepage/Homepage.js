import React from "react";
import BrowseByCategory from "../../Components/Homepage/BrowseByCategory/BrowseByCategory";
import WhyChooseUs from "../../Components/Homepage/WhyChooseUs/WhyChooseUs";
import Destination from "../../Components/Homepage/Destination/Destination";

const Homepage = () => {
  return (
    <div>
      <BrowseByCategory />
      <WhyChooseUs />
      <Destination />
    </div>
  );
};

export default Homepage;
