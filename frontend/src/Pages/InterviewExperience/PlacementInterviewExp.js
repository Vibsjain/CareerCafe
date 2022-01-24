import React from 'react'
import {exp} from '../../Assets/Data/Experience'
import Footer from '../../Components/Footer';
import InterviewCard from '../../Components/InterviewCard';
import NavComponent from '../../Components/Navbar';

function PlacementInterviewExp() {

    const data = exp.filter(experience => experience.role === "placement");

    return (
        <div>
            <div>
                <NavComponent />
            </div>
            <p className="text-[50px] font-bold text-center underline pt-28">Placement Interview Experiences</p>
            {data.map((value) => (
                <InterviewCard
                title = {value.title}
                name = {value.name}
                role = {value.role}
                place = {value.place}
                company = {value.company}
                content = {value.content}
                image = {value.image}
             />
            ))}
            <Footer />
        </div>
    )
}

export default PlacementInterviewExp;