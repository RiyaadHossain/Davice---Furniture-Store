import React from "react";
import { MdOutlineChair } from "react-icons/md";
import { AiFillCaretRight } from "react-icons/ai";
import Chair1 from "../../Asset/Image/Chair1.jpg";
import Table1 from "../../Asset/Image/Table1.jpg";
import Sofa1 from "../../Asset/Image/Sofa1.jpg";
import Shopby1 from "../../Asset/Image/Shop-by-1.jpg";
import Shopby2 from "../../Asset/Image/Shop-by-2.jpg";
import "./Home.css";

const ShopBy = () => {
  return (
    <div className="py-20">
      {/* First Section */}
      <div className=" flex justify-between">
        <div>
          <p className="shop-by-text">
            Shop <br /> by categories
          </p>
          <div className="shopBy-underline1 my-8"></div>
          <div className="mb-8 flex items-center">
            <MdOutlineChair className="text-6xl text-slate-500" />
            <p className="shop-by-gray-text ml-4">
              200 + <br />
              Unique products
            </p>
          </div>
          <div className="hover:text-[#ff6f00] shop-by-hover inline-block transition-colors">
            <p className="flex items-center">
              <span className="shop-by-colored"> All Categoreies</span>{" "}
              <AiFillCaretRight />
            </p>
            <div className="shopBy-underline2"></div>
          </div>
        </div>
        {/* ---------------------------------- */}
        <div className="flex gap-x-6">
          <div className=" relative">
            <img src={Chair1} alt="" />
            <h3 className="photo-text-shop-by">Dining Chair</h3>
          </div>
          <div className=" relative">
            <img src={Sofa1} alt="" />{" "}
            <h3 className="photo-text-shop-by">Sofas</h3>
          </div>
          <div className=" relative">
            <img src={Table1} alt="" />{" "}
            <h3 className="photo-text-shop-by">Table</h3>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex justify-center gap-x-8 mt-24">
        <div className="relative image-box-shop-by">
          <img className="img-section-shop-by" src={Shopby1} alt="" />
          <div className="inside-box-shop-by-1">
            <div>
              <p className=" mb-5 font-bold">30% OFF ALL ORDER</p>
              <h3 className="text-4xl mb-5 font-bold">Living Room</h3>
              <button className="inside-btn-shop-by">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="relative image-box-shop-by">
          <img className="img-section-shop-by" src={Shopby2} alt="" />
          <div className="inside-box-shop-by-2">
            <div>
              <p className=" mb-5 font-bold text-white">30% OFF ALL ORDER</p>
              <h3 className="text-4xl mb-5 font-bold text-white">Dining Room</h3>
              <button className="inside-btn-shop-by text-white">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBy;
