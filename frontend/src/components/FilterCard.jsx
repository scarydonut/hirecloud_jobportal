import React, { useEffect, useState } from 'react'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi", "Bangalore", "Hyderabad", "Pune", "Mumbai", "Chennai","Noida","Gurugaram","Kolkata","gujarat","Lucknow"]
    },
    {
        fitlerType: "Job",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer","Software Engineer","Data Analyst","ML Engineer","DevOps Engineer"]
    },
    {
        fitlerType: "Salary",
        array: ["5-10LPA", "10-20LPA", "20-30LPA","30-50LPA","50-90LPA"]
    },
]



const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
    },[selectedValue]);
  return (
    <div className='w-full bg-white p-3 rounded-md'>
    <h1 className='font-bold text-lg'>Filter Jobs</h1>
    <hr className='mt-3' />
    <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {
            fitlerData.map((data, index) => (
                <div>
                    <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
                    {
                        data.array.map((item, idx) => {
                             const itemId = `id${index}-${idx}`
                            return (
                                <div className='flex items-center space-x-2 my-2'>
                                    <RadioGroupItem value={item} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            )
                        })
                    }
                </div>
            ))
        }
    </RadioGroup>

    </div>
  )
}

export default FilterCard