import React from "react";
import "./Home.css";
import Slider1 from "../../Asset/Image/slider-1.jpg";
import Slider2 from "../../Asset/Image/slider-2.jpg";
import Slider3 from "../../Asset/Image/slider-3.jpg";

const Banner = () => {
  return (
    <div>
      <div class="carousel h-[92vh] w-full">
        <div id="slide1" class="carousel-item h-full relative w-full">
          <img alt="" src={Slider1} className="w-full relative object-cover" />
          {/* Slider Text Start */}
          <div className="slider-text">
            <div>
              {/* Part 1 */}
              <div className="flex items-center">
                <div className="banner-first-line"></div>
                <p className="first-div">
                  Dafici Furniture <br /> 2021
                </p>
              </div>
              {/* Part 2 */}
              <div className="flex flex-col my-10">
                <p className="second-div">New Arrival</p>
                <div className="banner-second-line"></div>
              </div>
              {/* Part 3 */}
              <div className="third-div mb-10">Chair <br /> Collection</div>
              {/* Part 4 */}
              <div>
                <button className="btn banner-btn rounded-sm px-8">Shop Now</button>
              </div>
            </div>
          </div>
          {/* Slider Text End */}
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item h-full relative w-full">
          <img alt="" src={Slider2} className="w-full object-cover" />
          {/* Slider Text Start */}
          <div className="slider-text">
            <div>
              {/* Part 1 */}
              <div className="flex items-center">
                <div className="banner-first-line"></div>
                <p className="first-div">
                  Dafici Furniture <br /> 2021
                </p>
              </div>
              {/* Part 2 */}
              <div className="flex flex-col my-10">
                <p className="second-div">New Arrival</p>
                <div className="banner-second-line"></div>
              </div>
              {/* Part 3 */}
              <div className="third-div mb-10">New <br /> Collection</div>
              {/* Part 4 */}
              <div>
                <button className="btn banner-btn rounded-sm px-8 text-inherit">Shop Now</button>
              </div>
            </div>
          </div>
          {/* Slider Text End */}                
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item h-full relative w-full">
          <img alt="" src={Slider3} className="w-full object-cover" />
          {/* Slider Text Start */}
          <div className="slider-text">
            <div>
              {/* Part 1 */}
              <div className="flex items-center">
                <div className="banner-first-line"></div>
                <p className="first-div">
                  Dafici Furniture <br /> 2021
                </p>
              </div>
              {/* Part 2 */}
              <div className="flex flex-col my-10">
                <p className="second-div">New Arrival</p>
                <div className="banner-second-line"></div>
              </div>
              {/* Part 3 */}
              <div className="third-div mb-10">Spring <br /> Collection</div>
              {/* Part 4 */}
              <div>
                <button className="btn banner-btn rounded-sm px-8">Shop Now</button>
              </div>
            </div>
          </div>
          {/* Slider Text End */}                  
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
