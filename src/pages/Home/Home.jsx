import React from "react";
import { FaHandshake, FaHome, } from "react-icons/fa";
import HouseCard from "../../components/card/HouseCard";
import ChooseUsCard from "../../components/choose us/ChooseUsCard";

function Home() {
  return (
    <div className="mb-16">
      <div className="imageConatiner mb-24">
        <h3 className={`titleHeading`}>
          Find your dream{" "}
          <span className="text-6xl" style={{ color: "#ff385c" }}>
            Home
          </span>{" "}
        </h3>
      </div>
      <div className="container mb-16">
        <div className="text-center mb-16">
          <h4 className="text-4xl font-bold">Properties</h4>
          <p className="text-muted m-0">These are our featured properties</p>
        </div>
        <div className="row">
          <div className="col-lg-6 px-4 mb-8">
            <div className="row bg-white">
              <HouseCard />
            </div>
          </div>
          <div className="col-lg-6 px-4 mb-8">
            <div className="row bg-white">
              <HouseCard />
            </div>
          </div>
          <div className="col-lg-6 px-4 mb-8">
            <div className="row bg-white">
              <HouseCard />
            </div>
          </div>
          <div className="col-lg-6 px-4 mb-8">
            <div className="row bg-white">
              <HouseCard />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="text-center mb-16">
          <h4 className="text-4xl font-bold">Why Choose Us</h4>
          <p className="text-muted m-0">
            We provide full service at every step.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <ChooseUsCard
              heading="Wide Range Of Properties"
              icon={<FaHome size={70} color={"#ff385c"} />}
              text={`We are proud to offer a wide range of properties that cater to various needs and preferences of our clients. Whether you're looking for a cozy apartment in the heart of the city, a luxurious villa by the beach, or a spacious family home in the suburbs, we have something that will suit your taste and budget.`}
            />
          </div>
          <div className="col-lg-6">
            <ChooseUsCard
              heading={"Trusted by thousands"}
              icon={<FaHandshake size={70} color={"#ff385c"} />}
              text={` We are proud to say that we have earned the trust of thousands of satisfied clients over the years.
Our commitment to excellence, integrity, and professionalism has made us one of the most reliable and reputable real estate companies in the industry.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
