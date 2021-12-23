import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Carousel from "react-multi-carousel";
import User from "../Assets/Images/user.png";
import "../Assets/CSS/Mentors.css";
import "../Assets/CSS/Common.css";

export default function Mentors() {
  //   const [selected, setSelected] = useState("item1");

  //   const Menu = (list, selected) =>
  //     list.map((el) => {
  //       const { name } = el;

  //       return <MenuItem text={name} key={name} selected={selected} />;
  //     });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const list = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" },
    { name: "item7" },
    { name: "item8" },
    { name: "item9" },
  ];

  //   const MenuItem = ({ text }) => {
  //     return (
  //       <div className="menu-item">{text}</div>
  //     );
  //   };

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

  //   const menu = Menu(list, selected);

  //   const onSelect = (key) => {
  //     setSelected(key);
  //   }

  return (
    <div className="mentorOuterDiv">
      <p className="mentorMainHeading">Our Mentors</p>
      <Carousel responsive={responsive} centerMode={true}>
        <div>
            <div>Item 1</div>
            <div>Item 4</div>
        </div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </div>
  );
}
