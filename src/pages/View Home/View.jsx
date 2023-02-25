import React from "react";
import ImageSlider from "../../components/carousel/ImageSlider";
import Photo from "../../assets/images/kitchen.jpg";
import Photo1 from "../../assets/images/living room.jpg";

function View() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <header className="flex justify-between my-16">
            <div>
              <h1>Luxury Villa House</h1>
              <p className="text-muted">77 - Central Park South, NYC</p>
            </div>
            <div>
              <h2 className="font-bold" style={{ color: "#ff385c" }}>
                ₦ 150,000
              </h2>
            </div>
          </header>
          <div className="p-4 bg-white mb-16">
            <h3 className="header">Gallery</h3>
            <ImageSlider />
          </div>
          <div className="bg-white p-4 mb-16">
            <h3 className="header">Description</h3>
            <p className="my-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              rerum beatae consequatur, totam fugit, alias fuga aliquam quod
              tempora a nisi esse magnam nulla quas! Error praesentium, vero
              dolorum laborum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cum rerum beatae consequatur, totam fugit.
            </p>
            <p className="my-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              rerum beatae consequatur, totam fugit, alias fuga aliquam quod
              tempora a nisi esse magnam nulla quas! Error praesentium, vero
              dolorum laborum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cum rerum beatae consequatur, totam fugit.
            </p>
            <p className="my-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              rerum beatae consequatur, totam fugit, alias fuga aliquam quod
              tempora a nisi esse magnam nulla quas! Error praesentium, vero
              dolorum laborum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Cum rerum beatae consequatur, totam fugit.
            </p>
          </div>
          <div className="bg-white p-4 mb-16">
            <h3 className="header">Property Details</h3>
            <div className="row">
              <div className="col-lg-4 mb-2 flex">
                <p className="text-stone-600 ml-3">
                  Property Type: <span className="text-muted">House</span>
                </p>
              </div>
              <div className="col-lg-4 mb-2 flex">
                <p className="text-stone-600 ml-3">
                  Property status: <span className="text-muted">For Sale</span>
                </p>
              </div>
              <div className="col-lg-4 mb-2 flex">
                <p className="text-stone-600 ml-3">
                  Property Price: <span className="text-muted">₦ 150,000</span>
                </p>
              </div>
              <div className="col-lg-4 mb-2 flex">
                <p className="text-stone-600 ml-3">
                  Rooms: <span className="text-muted">6</span>
                </p>
              </div>
              <div className="col-lg-4 mb-2 flex">
                <p className="text-stone-600 ml-3">
                  Bath: <span className="text-muted">4</span>
                </p>
              </div>
              <div className="col-lg-4 mb-2 flex">
                <p className="text-stone-600 ml-3">
                  Car Space: <span className="text-muted">6</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 mb-16">
            <h3 className="header">Property Video</h3>
            <div className="row"></div>
          </div>
          <div className="bg-white p-4 mb-16">
            <h3 className="header">Location</h3>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="p-4 bg-white mt-16">
            <h3 className="header">Recent Properties</h3>
            <div className="flex mt-6">
                <img src={Photo} alt="Family Home" className="w-24 h-24 object-cover" />
                <div className="ml-3">
                    <h6>Family Home</h6>
                    <p>₦ 150,000</p>
                </div>
            </div>
             <div className="flex mt-6">
                <img src={Photo1} alt="Family Home" className="w-24 h-24 object-cover" />
                <div className="ml-3">
                    <h6>Family Home</h6>
                    <p>₦ 150,000</p>
                </div>
            </div>
             <div className="flex mt-6">
                <img src={Photo} alt="Family Home" className="w-24 h-24 object-cover" />
                <div className="ml-3">
                    <h6>Family Home</h6>
                    <p>₦ 150,000</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
