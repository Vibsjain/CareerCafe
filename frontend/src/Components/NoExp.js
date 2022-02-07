import React from 'react'
import noData from "../Assets/Images/noData.png";

export default function NoExp(props) {
    return (
        <div className="flex flex-col w-[70vw] md:h-[65vh] bg-[#eb924e] m-auto mb-10 mt-10 rounded-3xl">
            <div className='hidden sm:block mx-auto'><img src={noData} className='w-[300px] h-[300px]' /></div>
            <p className='text-center text-3xl sm:text-4xl p-4 font-bold text-[#07075f]'>{props.first}</p>
            <p className='text-center text-2xl sm:text-3xl text-[#07075f] mb-4'>{props.second}</p>
        </div>
    )
}
