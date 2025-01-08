import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';
import { assets } from '@/assets/assets';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
  return (
<div className='flex justify-between items-center gap-10 mx-20'>
        
        <div className=' flex flex-col gap-5 my-10 w-1/2'>
            
            <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#0206f8] font-medium'>The Career Catalyst - Redefining the Way You Job Hunt!</span>
            
            <h1 className='text-5xl font-bold'>"Opportunity Awaits -<br /> Find It, Seize It,<span className='text-[#386dc2]'> Own It!"</span></h1>
            
            <p><b>"Unlock endless possibilities with <b>HIRECLOUD </b>- a job portal that's all about you! <br></br>
               Find jobs that fit your passion, apply effortlessly, and track your progress in real time.</b></p>
            </div> 
            <div className="flex flex-col place-items-end gap-5 w-1/2">
        <img src={assets.qwe} alt="Illustration of a boy" className="w-43 h-auto" />
    </div>
    </div>

)
}

export default HeroSection