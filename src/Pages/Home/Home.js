import React from "react";
import "./Home.css";
import pic01 from "../../images/pic01.jpg";
import pic02 from "../../images/pic02.jpg";
import pic03 from "../../images/pic03.jpg";
import Carousel from "react-bootstrap/Carousel";
import useItemDetail from "../../Hooks/useItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import {
  AdjustmentsIcon,
  BeakerIcon,
  ChipIcon,
  ColorSwatchIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/solid";

const Home = () => {
  const [items] = useItemDetail();
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="size-image" src={pic01} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="size-image" src={pic02} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="size-image" src={pic03} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="main-container">
        <h2 className="title">INVENTORIES</h2>
        <div className="item-row">
          {items.slice(0, 6).map((item) => (
            <ItemDetail key={item._id} item={item}></ItemDetail>
          ))}
        </div>
      </section>
      <section>
        <h2 className="title">ANALITICS</h2>
        <div className="short-detail">
          <div className="each-detail">
            <PresentationChartBarIcon className="hero_icon" />
            <h4>TEST RESULT</h4>
            <p>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus placeat enim consequuntur sequi, beatae unde culpa
                illum inventore iusto itaque.
              </small>
            </p>
          </div>
          <div className="each-detail">
            <ChipIcon className="hero_icon" />
            <h4>CHIP SET</h4>
            <p>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus placeat enim consequuntur sequi, beatae unde culpa
                illum inventore iusto itaque.
              </small>
            </p>
          </div>
          <div className="each-detail">
            <ColorSwatchIcon className="hero_icon" />
            <h4>TECHNOLOGY</h4>
            <p>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus placeat enim consequuntur sequi, beatae unde culpa
                illum inventore iusto itaque.
              </small>
            </p>
          </div>
          <div className="each-detail">
            <AdjustmentsIcon className="hero_icon" />
            <h4>PERFORMANCE</h4>
            <p>
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus placeat enim consequuntur sequi, beatae unde culpa
                illum inventore iusto itaque.
              </small>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
