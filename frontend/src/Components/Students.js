import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import User from "../Assets/Images/user.png";
import Google from "../Assets/Images/google.png";
import "../Assets/CSS/Mentors.css";
import "../Assets/CSS/Common.css";
import api from "../api/index";

const StudentCard = (props) => {
  return (
    <div className="flex flex-col w-[22rem] min-h-[22rem] justify-center items-center mt-[20%] border-4 border-[#63B3ED] bg-[#1A202C] shadow-2xl">
      <img
        src={props.image}
        alt="student"
        className="absolute w-32 h-32 top-0 rounded-full border-4 border-[#63B3ED]"
      />
      <div className="flex flex-col justify-between items-center pt-[6rem] pb-8 h-full gap-y-2">
        <h1 className="text-3xl font-semibold text-[#7F9CF5]">{props.name}</h1>
        <h1 className="text-sm font-normal text-white">
          Placed at {props.company}
        </h1>
        <h1 className="text-sm font-normal text-white px-4 text-justify">
          {props.testimonial}
        </h1>
        {/* <img src={props.cImage} alt="company" className="w-16 py-2"></img> */}
      </div>
    </div>
  );
};

export default function Students() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // const [studentData, setStudentData] = useState([]);
  const studentData = [
    {
        "_id": "621b7a7e926d1bf7f94a7754",
        "name": "Manpreet Singh",
        "company": "Quark",
        "image": "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645967602/mns_dh2nok.jpg",
        "logo": "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645967441/quark_f9tngz.png",
        "testimonial": "The guidance and support career cafe provided me is unmatchable. The knowledge which I have gained reflects in my result. Getting a job in a top most product based company like Quark was a dream for me. ",
        "__v": 0
    },
    {
        "_id": "621b8635926d1bf7f94a7762",
        "name": "Bhumika Saluja",
        "company": "Vitusa",
        "image": "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645968157/bhs_lbnj9s.jpg",
        "logo": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/px8dkptpqet9hrjqupqc",
        "testimonial": "I was very confused how to start preparing for placements. Did not know from where to start. The pattern that career cafe   is following is very much appreciated. Covered every subject whatever related to placements and best thing is they started Data structure from the scratch.  ",
        "__v": 0
    },
    {
        "_id": "621ba7a2926d1bf7f94a776c",
        "name": "Sizman Kaur",
        "company": "Vitusa",
        "image": "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645971145/szk_izcojx.jpg",
        "logo": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/px8dkptpqet9hrjqupqc",
        "testimonial": "The best thing about mentors here is their words of guidance  ,motivation and pushing students that really help a lot.",
        "__v": 0
    },
    {
        "_id": "621ba808926d1bf7f94a776e",
        "name": "Mridula",
        "company": "Edifecs",
        "image": "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645979604/mrd_po08mo.jpg",
        "logo": "https://www.laurel-group.com/wp-content/uploads/Edifecs-logo.jpg",
        "testimonial": "I am very thankful to the career cafe team for helping me get placed through campus placement. I really appreciate the way they made things easy to understand and organize personal interviews as and when required. I highly recommend everyone to join them for placement preparations, as they will help you polish your skills so that you can represent yourself better in your interviews.",
        "__v": 0
    },
    {
        "_id": "621ba85e926d1bf7f94a7770",
        "name": "Aditya Garg",
        "company": "Josh Technology",
        "image": "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645979706/adg_d8qd1q.jpg",
        "logo": "https://media-exp1.licdn.com/dms/image/C510BAQG3WmeuIgcgxg/company-logo_200_200/0/1554095047041?e=2159024400&v=beta&t=mYNZz-TEVqOIScEpk07cyJklwm6-tLzLuFhwtgKseyQ",
        "testimonial": "Best thing of joining career café  is that they will  make your data structure strong which will help u to get placed in good product based  companies, they also conducted regular mock interviews and guided how to tackle those interviewer’s questions and because  of that only i got placed in Josh technology. Also they provided me company specific technical mocks which was really helpful in the end.",
        "__v": 0
    },
    {
        "_id": "621ba8b9926d1bf7f94a7772",
        "name": "Abhishek Attri",
        "company": "Cognizant",
        "image": "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645979817/abt_mw4n1e.jpg",
        "logo": "https://www.cognizant.com/content/dam/cognizant_foundation/Dotcomimage/CognizantLogo400.jpg",
        "testimonial": "From having coding fear to successfully to successfully clearing coding rounds of various companies, all credit goes to career café. I got constant support from them throughout my placement journey.",
        "__v": 0
    }
]
  // const getData = async () => {
  //   const response = await api.get("/students");
  //   setStudentData(response.data);
  //   console.log(studentData);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="w-full flex flex-col gap-y-10 justify-center font-bold mt-28 mb-24">
      <p className="text-5xl text-center text-[#07075F]">Our Students</p>
      <div className="flex w-full md:px-0 sm:px-24">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["mobile"]}
          containerClass="carousel-container"
        >
          {studentData &&
            studentData.map((item) => {
              return (
                <StudentCard
                  image={item.image}
                  name={item.name}
                  company={item.company}
                  testimonial={item.testimonial}
                  cImage={item.logo}
                />
              );
            })}
        </Carousel>
      </div>
    </div>
  );
}
