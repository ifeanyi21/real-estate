import React from "react";
import {
  FaBath,
  FaBed,
  FaCar,
  FaMapPin,
  FaRulerCombined,
  FaShareAlt,
} from "react-icons/fa";
import Photo from "../../assets/images/kitchen.jpg";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

function HouseCard() {
  return (
    <>
      <div className="col-lg-6 px-0">
        <img src={Photo} className="h-60 w-full object-cover" alt="house" />
      </div>
      <div className="col-lg-6">
        <div className="bg-white">
          <div className="p-1">
            <Link to={"/Real Luxury Family House Villa/1"} className="no-underline text-red-600">
              <h3 className="text-lg">Real Luxury Family House Villa</h3>
            </Link>

            <div className="flex items-center mb-4">
              <span>
                <FaMapPin color="grey" />
              </span>
              <span className="text-muted text-sm ml-2">
                Est St, 77 - Central Park South, NYC
              </span>
            </div>
            <div className="row mb-3">
              <div className="col-lg-6 mb-3">
                <div className="flex items-center">
                  <span>
                    <FaBed color="grey" />
                  </span>
                  <span className="text-muted text-sm ml-2">6 Bedrooms</span>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="flex items-center">
                  <span>
                    <FaBath color="grey" />
                  </span>
                  <span className="text-muted text-sm ml-2">3 Bathrooms</span>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="flex items-center">
                  <span>
                    <FaRulerCombined color="grey" />
                  </span>
                  <span className="text-muted text-sm ml-2">720 sq fr</span>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="flex items-center">
                  <span>
                    <FaCar color="grey" />
                  </span>
                  <span className="text-muted text-sm ml-2">Fit 3 Cars</span>
                </div>
              </div>
            </div>
            <Divider />
            <div className="flex justify-between mt-3">
              <span className="font-semibold text-xl">₦ 150,000</span>
              <Button variant="text">
                <span>
                  <FaShareAlt color="grey" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HouseCard;
