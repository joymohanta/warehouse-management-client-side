import React from "react";
import "./Home.css";
import pic01 from "../../images/pic01.jpg";
import pic02 from "../../images/pic02.jpg";
import pic03 from "../../images/pic03.jpg";
import Carousel from "react-bootstrap/Carousel";
import useItemDetail from "../../Hooks/useItemDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import CountUp from "react-countup";
import {
  AdjustmentsIcon,
  BriefcaseIcon,
  ChipIcon,
  ColorSwatchIcon,
  PresentationChartBarIcon,
  ShieldCheckIcon,
  ThumbUpIcon,
  UserGroupIcon,
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
        <div>
          <h2 id="special-title" className="title">
            INVENTORIES
            <div className="style-bar"></div>
          </h2>
        </div>
        <div className="item-row">
          {items.slice(0, 6).map((item) => (
            <ItemDetail key={item._id} item={item}></ItemDetail>
          ))}
        </div>
      </section>
      <section className="analitics-part">
        <h2 className="title">
          ANALITICS <div className="style-bar"></div>
        </h2>
        <div className="short-detail ">
          <div className="each-detail">
            <PresentationChartBarIcon className="hero_icon" />
            <h4 className="title">TEST RESULT</h4>
            <p className="text">
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus placeat enim consequuntur sequi, beatae unde culpa
                illum inventore iusto itaque.
              </small>
            </p>
          </div>
          <div className="each-detail">
            <ChipIcon className="hero_icon" />
            <h4 className="title">CHIP SET</h4>
            <p className="text">
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus placeat enim consequuntur sequi, beatae unde culpa
                illum inventore iusto itaque.
              </small>
            </p>
          </div>
          <div className="each-detail">
            <ColorSwatchIcon className="hero_icon" />
            <h4 className="title">TECHNOLOGY</h4>
            <p className="text">
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus placeat enim consequuntur sequi, beatae unde culpa
                illum inventore iusto itaque.
              </small>
            </p>
          </div>
          <div className="each-detail">
            <AdjustmentsIcon className="hero_icon" />
            <h4 className="title">PERFORMANCE</h4>
            <p className="text">
              <small>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus placeat enim consequuntur sequi, beatae unde culpa
                illum inventore iusto itaque.
              </small>
            </p>
          </div>
        </div>
      </section>
      <section className="counter-container">
        <h2 className="title">
          USER RATINGS <div className="style-bar"></div>
        </h2>
        <div className="counter_num">
          <div className="per_counter">
            <ThumbUpIcon className="hero_icon"></ThumbUpIcon>
            <h1>
              <CountUp end={21500} duration={16} delay={5}></CountUp>
            </h1>
            <p>Laptop Sold</p>
          </div>
          <div className="per_counter">
            <BriefcaseIcon className="hero_icon"></BriefcaseIcon>
            <h1>
              $
              <span>
                <CountUp end={70750} duration={20} delay={5}></CountUp>
              </span>
            </h1>
            <p>Amount Sold</p>
          </div>
          <div className="per_counter">
            <UserGroupIcon className="hero_icon"></UserGroupIcon>
            <h1>
              <span>
                <CountUp end={100} duration={10} delay={5}></CountUp>
              </span>
              %
            </h1>
            <p>Users Satisfaction</p>
          </div>
          <div className="per_counter">
            <ShieldCheckIcon className="hero_icon"></ShieldCheckIcon>
            <h1>
              <span>
                <CountUp end={17000} duration={13} delay={5}></CountUp>
              </span>
              +
            </h1>
            <p>Maintenance Service</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
