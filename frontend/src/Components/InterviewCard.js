import React from 'react'
import { useHistory } from "react-router-dom";

export default function InterviewCard(props) {

    const history = useHistory();
    const buttonClass = "bg-[#0c0c8d] hover:bg-[#07075f] text-white font-bold py-2 px-4 rounded mx-4";
    const readMoreButtonClass = "bg-[#0c0c8d] hover:bg-[#07075f] text-white font-bold py-2 px-4 rounded w-[150px]";
    const companyButton = "bg-transparent hover:bg-[#07075f] text-[#07075f] font-semibold hover:text-white py-2 px-4 border border-[#07075f] hover:border-transparent rounded mx-4";
    var review = "";

    if(props.content !== "" && props.content.length > 200) {
        review = props.content.substring(0, 200);
    } else {
        review = props.content;
    }

    const selectInterview = (title) => {
        title = title.toLowerCase();
        title = title.replace(/\s+/g, '-');
        history.push(`experience/${title}`);
    }

    return (
        <div className='my-4 border-b-2 w-2/3 mx-auto py-4 pb-8 border-gray-500 border-double'>
            <p onClick={() => selectInterview(props.title)} className="text-[40px] text-[#eb924e] hover:underline hover:text-[#d68140] text-center cursor-pointer font-bold">{props.title}</p>
            <p className="text-xl text-[#07075f] text-center">By <span>{props.name}</span></p>
            <div className="flex flex-row justify-center items-center mt-4">
                {props.role === "placement" && <button onClick={() => history.push("/interview/experience/category/placement")} className={buttonClass}>Placement Interview Experience</button>}
                {props.role === "internship" && <button onClick={() => history.push("/interview/experience/category/internship")} className={buttonClass}>Internship Interview Experience</button>}
                {props.place === "oncampus" && <button onClick={() => history.push("/interview/experience/category/oncampus")} className={buttonClass}>Oncampus</button>}
                {props.place === "offcampus" && <button onClick={() => history.push("/interview/experience/category/offcampus")} className={buttonClass}>Offcampus</button>}
                <button className={companyButton}>{props.company}</button>
            </div>
            <div className="flex flex-row justify-center items-center mt-2">
                {props.image !== "" && <img src={props.image} className="w-[200px] h-[150px]"/>}
                <div className="flex flex-col w-3/4">
                    <p className="text-[20px] mb-4">{review}{review.length >= 200 && (<span>...</span>)}</p>
                    <button onClick={() => selectInterview(props.title)} className={readMoreButtonClass}>Read More</button>
                </div>
            </div>
        </div>
    )
}
