import axios from "axios"
import { base_url } from "../../utils/base_url"
import toast from "react-hot-toast";
const getCustomizeTour = async () =>{
    try{
        const response = await axios.get(`${base_url}customize/all-customize-tour`)
        return response.data

    }catch(error)
    {
       toast.error("Something Went Wrong")
    }
}

const createCustomizeTour = async(tour)=>{
    try{
        const response = axios.post(`${base_url}customize/create-customize-tour`,tour)
        if (response.status === 200) {
          toast.success("Customize Tour Added");
        }
    }catch(error)
    {
        toast.error("Something Went Wrong")
    }
}

const customizeService = {
    getCustomizeTour,
    createCustomizeTour
}

export default customizeService
