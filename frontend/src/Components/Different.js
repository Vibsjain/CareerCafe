import React from 'react'
import HomeImage from "../Assets/Images/homeTop.png";

export default function Different() {
    return (
        <div classname="w-full flex flex-row justify-center items-center">
            <div classname="sm:w-1/2 md:w-1/2 lg:w-1/2">
                <p className="text-5xl font-bold text-center text-[#07075F] mb-10">Why are we different?</p>
            </div>
            <div className='flex justify-end w-[100vw]'>
                <img className='w-1/2' src={HomeImage} />
            </div>
        </div>
    )
}
