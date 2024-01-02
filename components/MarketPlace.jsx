"use client";

import { useState, useEffect } from "react";

const MarketPlace = () => {
  const [cars, setCars] = useState([]);
  const fetchCars = async () => {
    try {
      const response = await fetch("/api/cars/");
      const data = await response.json();
      const newCars = data.slice(0, 3);
      setCars(newCars);
      console.log(newCars);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);
  return (
    <>
      <p id="market">&nbsp;</p>
      <section class="market-place" id="market-place">
        <h3>market place</h3>
        <div class="flex-3"></div>
        {cars.map((car) => {
          const { name } = car(<h1>name</h1>);
        })}
      </section>
    </>
  );
};

export default MarketPlace;
