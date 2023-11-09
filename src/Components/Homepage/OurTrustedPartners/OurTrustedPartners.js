import React from "react";
import styles from "./OurTrustedPartner.module.css";

import bd from "../../../Assets/OurTrustedPartners/bd.png";
import british from "../../../Assets/OurTrustedPartners/british.png";
import emirates from "../../../Assets/OurTrustedPartners/emirates.png";
import etihad from "../../../Assets/OurTrustedPartners/etihad.png";
import qatar from "../../../Assets/OurTrustedPartners/qatar.png";

const OurTrustedPartners = () => {
  return (
    <div className="bg-blue-900 py-16 mb-[200px]">
      <h2
        className={`${styles.trustedPartner} text-center text-2xl text-yellow-400 mb-32`}
      >
        Our Trusted Partners
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-16">
        <img src={bd} className="w-[180px] lg:w-[250px]" alt="" />
        <img src={etihad} className="w-[180px] lg:w-[250px]" alt="" />
        <img src={emirates} className="w-[180px] lg:w-[250px]" alt="" />
        <img src={qatar} className="w-[180px] lg:w-[250px]" alt="" />
        <img src={british} className="w-[180px] lg:w-[250px]" alt="" />
      </div>
    </div>
  );
};

export default OurTrustedPartners;
