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
      _id: "621ba85e926d1bf7f94a7770",
      name: "Anjali Bhardwaj",
      company: "Mediatek",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1647022348/anjali_vknseo.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MediaTek_logo.svg/1280px-MediaTek_logo.svg.png",
      testimonial:
        "I am very thankful to Amit Sir and career café team for their continuous support and motivation which gave me the confidence to achieve my dream job. DSA classes,  Regular tests and mock interviews  played a major role, as they enhanced my knowledge, strengthened my concepts, boosted up my confidence as well as made me realize my mistakes .",
      __v: 0,
    },
    {
      _id: "621ba85e926d1bf7f94a7770",
      name: "Sourav",
      company: "Mediatek",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1647022648/soruav_rdafrs.png",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MediaTek_logo.svg/1280px-MediaTek_logo.svg.png",
      testimonial:
        "Career café team was  always up to clear my doubts and gradually I started becoming technically sound. They guided us how to how to handle face to face interviews. They give me life time confidence and ability to achieve more in my life.",
      __v: 0,
    },
    {
      _id: "621ba85e926d1bf7f94a7770",
      name: "Aditya Garg",
      company: "Josh Technology",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645979706/adg_d8qd1q.jpg",
      logo: "https://media-exp1.licdn.com/dms/image/C510BAQG3WmeuIgcgxg/company-logo_200_200/0/1554095047041?e=2159024400&v=beta&t=mYNZz-TEVqOIScEpk07cyJklwm6-tLzLuFhwtgKseyQ",
      testimonial:
        "Best thing of joining career café  is that they will  make your data structure strong which will help u to get placed in good product based  companies, they also conducted regular mock interviews and guided how to tackle those interviewer’s questions and because  of that only i got placed in Josh technology. Also they provided me company specific technical mocks which was really helpful in the end.",
      __v: 0,
    },
    {
      _id: "621ba85e926d1bf7f94a7770",
      name: "Somesh Khatri",
      company: "Nagarro",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1647022959/somesh_rodz5o.jpg",
      logo: "https://surveys.nagarro.com/CustomerSatisfactionSurvey/Images/Nagarro%20Horizontal%20Dark.png",
      testimonial:
        "Before CareerCafé, I wasn't sure whether I would be able to crack a job interview. But after joining CareerCafé a direction was given to my preparation by Amit Sir and team. Constant guidance about topics like DSA, Quant, Puzzles, concept of OOPs as well periodic interviews provided exposure needed to not be nervous at the moment that would count. In the end I was able to crack many interviews.",
      __v: 0,
    },
    {
      _id: "621ba85e926d1bf7f94a7770",
      name: "Yashika Dhingra",
      company: "Deloitte",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1647023068/yahsika_twzapg.jpg",
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Logo.png",
      testimonial:
        "Career Cafe has helped me to land into the job that matches  my skills. I learnt from Career Cafe that no matter where others are going, you need to understand your own strengths and work accordingly. This really helped me a lot.",
      __v: 0,
    },
    {
      _id: "621ba85e926d1bf7f94a7770",
      name: "Sonali Justa",
      company: "Mediatek",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1647023683/sonali_cvmcte.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MediaTek_logo.svg/1280px-MediaTek_logo.svg.png",
      testimonial:
        "I would like to thank whole Career Cafe team and especially Amit Sir for allowing me the opportunity to expand my career and skills through their classes. DS and Aptitude class was surely a great help. But most importantly the mock interviews were the best part about the whole course. It provided me a guidance, confidence and helped me a lot in my interviews. Another important factor, the positive attitude that many students loose while preparing for companies, is something I received from Career Cafe. With all the support and guidance I managed to crack the first company(Mediatek) that I was sitting for. Career Cafe classes definitely helped me to start my career with one of the best companies worldwide.",
      __v: 0,
    },
    {
      _id: "621ba85e926d1bf7f94a7770",
      name: "Ishita Jindal",
      company: "Indus Valley",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1647023852/ishita_ms4slb.jpg",
      logo: "https://m.media-amazon.com/images/S/aplus-media/sc/60c3f180-2fa6-47bf-9b26-80d49b884a50.__CR0,0,600,180_PT0_SX600_V1___.jpg",
      testimonial:
        "My coding skills improved a lot at career café.   Regular tests and mock interviews also helped me a lot.Their teaching methods are unique in their own way , plus the syllabus is also designed in a pattern that it covers all major companies ",
      __v: 0,
    },
    {
      _id: "621ba7a2926d1bf7f94a776c",
      name: "Sizman Kaur",
      company: "Vitusa",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645971145/szk_izcojx.jpg",
      logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/px8dkptpqet9hrjqupqc",
      testimonial:
        "The best thing about mentors here is their words of guidance  ,motivation and pushing students that really help a lot.",
      __v: 0,
    },
    {
      _id: "621ba808926d1bf7f94a776e",
      name: "Mridula",
      company: "Edifecs",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645979604/mrd_po08mo.jpg",
      logo: "https://www.laurel-group.com/wp-content/uploads/Edifecs-logo.jpg",
      testimonial:
        "I am very thankful to the career cafe team for helping me get placed through campus placement. I really appreciate the way they made things easy to understand and organize personal interviews as and when required. I highly recommend everyone to join them for placement preparations, as they will help you polish your skills so that you can represent yourself better in your interviews.",
      __v: 0,
    },
    {
      _id: "621b7a7e926d1bf7f94a7754",
      name: "Manpreet Singh",
      company: "Quark",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645967602/mns_dh2nok.jpg",
      logo: "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645967441/quark_f9tngz.png",
      testimonial:
        "The guidance and support career cafe provided me is unmatchable. The knowledge which I have gained reflects in my result. Getting a job in a top most product based company like Quark was a dream for me. ",
      __v: 0,
    },
    {
      _id: "621ba8b9926d1bf7f94a7772",
      name: "Abhishek Attri",
      company: "Cognizant",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645979817/abt_mw4n1e.jpg",
      logo: "https://www.cognizant.com/content/dam/cognizant_foundation/Dotcomimage/CognizantLogo400.jpg",
      testimonial:
        "From having coding fear to successfully to successfully clearing coding rounds of various companies, all credit goes to career café. I got constant support from them throughout my placement journey.",
      __v: 0,
    },
    {
      _id: "621ba8b9926d1bf7f94a7772",
      name: "Samiksha Kansal",
      company: "Deloitte",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1647023949/samiksha_dufv7p.jpg",
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Logo.png",
      testimonial:
        "The company specific practice modules and notes which were provided to us were concise and very informative and helped me in cracking deloitte.",
      __v: 0,
    },
    {
      _id: "621b8635926d1bf7f94a7762",
      name: "Bhumika Saluja",
      company: "Vitusa",
      image:
        "https://res.cloudinary.com/dumgn8uvd/image/upload/v1645968157/bhs_lbnj9s.jpg",
      logo: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/px8dkptpqet9hrjqupqc",
      testimonial:
        "I was very confused how to start preparing for placements. Did not know from where to start. The pattern that career cafe   is following is very much appreciated. Covered every subject whatever related to placements and best thing is they started Data structure from the scratch.  ",
      __v: 0,
    },
  ];
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
