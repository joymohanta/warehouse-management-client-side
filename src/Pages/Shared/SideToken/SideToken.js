import React from "react";
import "./SideToken.css";
import {
  GiftIcon,
  PhotographIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";

const SideToken = () => {
  return (
    <div className="token">
      <div></div>
      <div>
        <div className="part">
          <a href="www.google.com">
            <ShoppingCartIcon className="icon"></ShoppingCartIcon>
          </a>
        </div>
        <div id="part2" className="part">
          <a href="www.google.com">
            <PhotographIcon className="icon"></PhotographIcon>
          </a>
        </div>
        <div id="part3" className="part">
          <a href="www.google.com">
            <GiftIcon className="icon"></GiftIcon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideToken;
