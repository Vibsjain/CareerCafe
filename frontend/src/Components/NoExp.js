import React from 'react'
import noData from "../Assets/Images/noData.png";

export default function NoExp() {
    return (
        <div className="flex flex-col w-[70vw] h-[65vh] bg-[#eb924e] m-auto mb-10 mt-10 rounded-3xl">
            <div className='mx-auto'><img src={noData} className='w-[300px] h-[300px]' /></div>
            <p className='text-center text-4xl p-4 font-bold text-[#07075f]'>No experience to show!!!</p>
            <p className='text-center text-3xl text-[#07075f]'>We will add them soon.</p>
        </div>
    )
}
