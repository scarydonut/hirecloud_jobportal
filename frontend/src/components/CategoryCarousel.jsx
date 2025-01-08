import React, { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'
import { assets } from '@/assets/assets'
import { Search } from 'lucide-react'
const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Scientist",
    "Graphic Designer",
    "FullStack Developer",
    "Data Analyst",
    "Software Engineer",
    "Machine Learning Engineer",
    "Web Developer",
    "DevOps Engineer",
    "Cloud Architect",
    "Cybersecurity Analyst",
    "Mobile App Developer"
]
const CategoryCarousel = () => {
     const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandlerh = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
    const searchJobHandler = () => {
            dispatch(setSearchedQuery(query));
            navigate("/browse");
        }
    return (
        
        <div>
             <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                
                <input
                    type="text"
                    placeholder='Find your dream jobs'
                    onChange={(e) => setQuery(e.target.value)}
                    className='outline-none border-none w-full'
    
                />
                <Button onClick={searchJobHandler}  className="rounded-r-full bg-[#3854c2]">
                    <Search className='h-5 w-5' />
                </Button>
            </div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                <Button onClick={() => searchJobHandlerh(cat)} variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className='border border-gray-300 shadow-md  mt-5 p-6 rounded-md flex w-full max-w-5xl mx-auto my-20'>
                <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
                    <p className='font-medium'>Trusted By</p>
                    <img className='h-6' src={assets.google} alt="" />
                    <img className='h-6' src={assets.microsoft} alt="" />
                    <img className='h-6' src={assets.walmart} alt="" />
                    <img className='h-6' src={assets.accenture} alt="" />
                    <img className='h-6' src={assets.samsung} alt="" />
                    <img className='h-6' src={assets.adob} alt="" />
                </div>
            </div>
        </div>
    )
}


export default CategoryCarousel