'use client'

import { useState, useEffect } from "react"

const MarketPlace = () => {

    const fetchCars = async () =>{
         try {
            const response = await fetch('/api/cars/')
            const data = await response.json()
            console.log(data)
         } catch (error) {
            console.log(error)
         }
    }
    useEffect(() =>{

        fetchCars()
    }, [])
    return (
        <>
            <p id="market">&nbsp;</p>
            <section class="market-place" id="market-place">
                <h3>market place</h3>
                <div class="flex-3">

                </div>
            </section>
        </>
    )
}

export default MarketPlace