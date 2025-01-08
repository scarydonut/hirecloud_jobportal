import { setSingleCompany } from '@/redux/companySlice';
import { COMPANY_API_END_POINT} from '@/utils/constant';
import axios from 'axios';
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`https://hirecloud.onrender.com/api/v1/company/get${companyId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSingleCompany(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleCompany();
    },[companyId, dispatch])

}

export default useGetCompanyById