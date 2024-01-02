"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const MarketPlace = () => {
  const [cars, setCars] = useState([]);
  const fetchCars = async () => {
    try {
      const response = await fetch("/api/cars/");
      const data = await response.json();
      const newCars = data.slice(0, 3);
      setCars(newCars);
      console.log(data);
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
      <section className="market-place" id="market-place">
        <h3>market place</h3>
        <div className="flex-3">
          {cars.map((car) => (
            <figure className="flex-item">
              <div className="item-container" key={car.id}>
                <div className="item-header">
                  <div className="img-container">
                    <img src={car.imageViews[0].leftSideView} alt={car.name} />
                  </div>
                </div>
                <div className="item-body">
                  <div className="information-details">
                    <h4>{car.make}</h4>
                    <h2>
                      <span>{car.name.split(" ").splice(1).join(" ")}</span>{" "}
                      <span className="label">{car.name.split(" ")[0]}</span>
                    </h2>
                  </div>
                  <div className="flex-containr">
                    <div className="place-left">
                      <div className="top inner-flex">
                        <div className="img-container">
                          <Image
                            src="/speed-details.svg"
                            alt="odometer"
                            width={20}
                            height={20}
                          />
                        </div>
                        <p>{car.odometer}</p>
                      </div>
                      <div className="bottom inner-flex">
                        <div className="img-container">
                          <Image
                            src="/car-engine-details.svg"
                            alt="litres"
                            width={20}
                            height={20}
                          />
                        </div>
                        <p>{car.litre}</p>
                      </div>
                    </div>
                    <div className="place-right">
                      <div className="top inner-flex">
                        <div className="img-container">
                          <Image
                            src="/piston-details.svg"
                            alt="piston"
                            width={20}
                            height={20}
                          />
                        </div>
                        <p>{car.cylinders}</p>
                      </div>
                      <div className="bottom inner-flex">
                        <div className="img-container">
                          <Image
                            src="/gear-details.svg"
                            alt="gear"
                            width={20}
                            height={20}
                          />
                        </div>
                        <p>{car.transmission}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-footer">
                  <div className="price-details">
                    <div className="inner-flex">
                      <div className="place-left">
                        <p>{car.discountPrice}</p>
                      </div>
                      <div className="place-right">
                        <button className="cta-btn" name={car.name}>
                          <Link href="/checkout.html">buy now</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
};

export default MarketPlace;
