import Car from '@/models/car' 

import { connectToDB } from "@/utils/database";

export const GET = async(request) =>{
    try {
        await connectToDB()

        const cars = await Car.find({})
        
        return new Response (JSON.stringify(cars),{status:200})
    } catch (error) {
        console.log(error)
        return new Response ("Failed to fetch Prompts",{status:500})
    }
}