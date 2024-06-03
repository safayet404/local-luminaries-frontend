import axios from "axios";
import { base_url } from "../../utils/base_url";
import {toast} from "react-hot-toast"


const getAllDestination = async()=>{
    try{
        const response = await axios.get(`${base_url}destination/all-destination`)
        return response.data
    }catch(error)
    {
        toast.error("Something Went Wrong !")
    }
}

const getSingleDestination = async(id)=>{
    try{
        const response = await axios.get(`${base_url}destination/single-destination/${id}`)
        return response.data
    }catch(error)
    {
        toast.error("Something Went Wrong !")
    }
}

const destinationService = {
    getAllDestination,
    getSingleDestination
}

export default destinationService