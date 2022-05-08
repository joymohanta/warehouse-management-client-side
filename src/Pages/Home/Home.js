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
            <div className="animation-title">
              <h2>WELCOME TO LAPTOP HOUSE</h2>
              <h5>
                What's up guys! welcome to my new laptop store house with some
                new experience device
              </h5>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="size-image" src={pic02} alt="Second slide" />

          <Carousel.Caption>
            <div className="animation-title">
              <h2>WELCOME TO LAPTOP HOUSE</h2>
              <h5>
                This world will get you to the real feelings of expert user of
                laptop checkout
              </h5>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="size-image" src={pic03} alt="Third slide" />

          <Carousel.Caption>
            <div className="animation-title">
              <h2>WELCOME TO LAPTOP HOUSE</h2>
              <h5>
                Let's get some new experience in the laptop world with some new
                unbeatable device
              </h5>
            </div>
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
                The real test result of these laptops are very strong. Our many
                client make this to happen to this test. But still anyone can
                take a look of it.
              </small>
            </p>
          </div>
          <div className="each-detail">
            <ChipIcon className="hero_icon" />
            <h4 className="title">CHIP SET</h4>
            <p className="text">
              <small>
                These laptops chip sets are unique. If any problem face user can
                take here in our support system. And also can take a repeat of
                chip set as needed.
              </small>
            </p>
          </div>
          <div className="each-detail">
            <ColorSwatchIcon className="hero_icon" />
            <h4 className="title">TECHNOLOGY</h4>
            <p className="text">
              <small>
                Intel, MSI and ASUS technology bring here a revolution on these
                devices. But this is not for this year rather every year we
                change our genaration.
              </small>
            </p>
          </div>
          <div className="each-detail">
            <AdjustmentsIcon className="hero_icon" />
            <h4 className="title">PERFORMANCE</h4>
            <p className="text">
              <small>
                According to our client feedback, the performance is awesome. It
                any problem occur user can take it to our engineer and check it
                out for free.
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
