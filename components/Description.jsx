import React from 'react'
import Image from 'next/image'

const Description = () => {
    return (
        <>
            <p id="aboutus">&nbsp;</p>
            <section class="about-us">
                <div class="aboutus-container">
                    <div class="rectangular-box">
                        <h3>about us</h3>
                        <p>
                            Buying your car doesn't have to be a hassle. At Express Autos, we're here to simplify the process and help
                            you get the best value for your vehicle. With years of experience in the automotive industry and a
                            commitment to customer satisfaction, we've become a trusted destination for individuals looking to buy their
                            cars
                        </p>
                    </div>
                    <div class="cars-packed">
                        <div class="img-container">
                        <Image
                                        src={'/aboutus-cars.svg'}
                                        alt='more about us'
                                        width={200}
                                        height={200}
                                    />
                         </div>
                    </div>
                </div>
            </section>
            <section className="why-choose-us" id="whychooseus">

                <div className="reasons-to-chooseus">
                    <div className="grid-3">
                        <figure>
                            <div className="flex-2">
                                <div className="img-container">
                                    <Image
                                        src={'/car-sold.svg'}
                                        alt='Relaible'
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div><p>Reliable</p></div>
                            </div>
                        </figure>
                        <figure>
                            <div className="flex-2">
                                <div className="img-container">
                                    <Image
                                        src={'/affordable-icon.svg'}
                                        alt='Afforable'
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div><p>Afforable</p></div>
                            </div>
                        </figure>
                        <figure>
                            <div className="flex-2">
                                <div className="img-container">
                                    <Image
                                        src={'/trendy-icon.svg'}
                                        alt='Trendy'
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div><p>Trendy</p></div>
                            </div>
                        </figure>
                    </div>
                </div>
                <div className="steps-to-own-car" id="steps">
                    <div className="grid-2">
                        <div className="place-left">
                            <div className="img-container">
                                <Image
                                    src={'/own-your-car.svg'}
                                    alt='Trendy'
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </div>
                        <div className="place-right">

                            <h4>buying method</h4>
                            <ul>
                                <li>create account</li>
                                <li>select your car</li>
                                <li>click buy now</li>
                                <li>choose payment method</li>
                                <li>make payment done</li>
                            </ul>
                            <span><em>Official email will be sent to you for your successful transaction, shipping information will be indicated.</em></span>
                        </div>
                    </div>
                </div>


                <div className="customer-count">
                    <div className="grid-3">
                        <figure>
                            <div className="flex-2">
                                <div className="img-container">
                                    <Image
                                        src={'/car-sold.svg'}
                                        alt='cars sold'
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div>
                                    <p>500&plus;</p>
                                    <span>Cars Sold</span>
                                </div>
                            </div>
                        </figure>
                        <figure>
                            <div className="flex-2">
                                <div className="img-container">
                                    <Image
                                        src={'/happy-clients.svg'}
                                        alt='our clients'
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div>
                                    <p>500&plus;</p>
                                    <span>Happy Client</span>
                                </div>
                            </div>
                        </figure>
                        <figure>
                            <div className="flex-2">
                                <div className="img-container">
                                    <Image
                                        src={'/years-of-experience.svg'}
                                        alt='years of expertise'
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div>
                                    <p>50&plus;</p>
                                    <span>Years of Expertise</span>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Description