import React from 'react'
import Image from 'next/image'

const Deal = () => {
  return (
    <>
    <section className="deal-of-the-day" id="dealoftheday">
<div className="flex-2">
  <div className="place-left">
    <div className="item-details">
      <h3><strong>deal</strong> of the <br/>
        <strong>day</strong>
      </h3>
      <div>
       <span className="car-name">TOYOTA</span>
       <h2><strong>SEQUOIA</strong><span className="label">2023</span></h2>
         <p className="price"><strike className="original">$77,800.00</strike> <span className="discount">$76,800.00</span></p>
       <div className="cta-btn">
        <a href="./payment.html">buy now</a>
       </div>
      </div>
    </div>
  </div>
  <div className="place-right">
    <div className="img-container">
    <Image
    src={'/deal-of-day-banner.png'} 
    alt='deal of the day'
    width={400}
    height={350}
    />
    </div>
  </div>
</div>
</section>

    </>
  )
}

export default Deal