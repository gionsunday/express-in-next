import React from 'react'
import '@/styles/owl-carousel.css'

const Testimonias = () => {
  return (
    <>
   
    <section className="testimonials" id="feedback">
      <h4>what our customers are saying</h4>
      <div className="carousel-container">
        <div className="carousel owl-carousel">
          <figure className="carousel-item first-item">
            <div className="img-container">
              <img src="/profile-img.svg" alt="feedback"/>
            </div>
          </figure>
          <figure className="carousel-item second-item">
            <div className="img-container">
              <img src="/profile-img.svg" alt="feedback"/>
            </div>
          </figure>
          <figure className="carousel-item third-item">
            <div className="img-container">
              <img src="/profile-img.svg" alt="feedback"/>
            </div>
          </figure>
          <figure className="carousel-item fourth-item">
            <div className="img-container">
              <img src="/profile-img.svg" alt="feedback"/>
            </div>
          </figure>
          <figure className="carousel-item fifth-item">
            <div className="img-container">
              <img src="/profile-img.svg" alt="feedback"/>
            </div>
          </figure>
          <figure className="carousel-item sixth-item">
            <div className="img-container">
              <img src="/profile-img.svg" alt="feedback"/>
            </div>
          </figure>
          <figure className="carousel-item seventh-item">
            <div className="img-container">
              <img src="/profile-img.svg" alt="feedback" />
            </div>
          </figure>
        </div>
        <div className="place-holder-text">
          <h5>Queen Kiinny</h5>
          <span>LONDON</span>
          <p className="message">
            I had a great experience with Express Autos. Their service was top-notch, and I was very satisfied. Highly
            recommend.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonias