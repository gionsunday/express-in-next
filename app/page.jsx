import React from 'react'
import Image from 'next/image'
import About from '@/components/About'
import Partners from '@/components/Partners'
import Deal from '@/components/Deal'
import Description from '@/components/Description'
import MarketPlace from '@/components/MarketPlace'

const Home = () => {
  return (
    <>

      <main className="home-page">
        <section className="section-one">
          <div className="flex-container">
            <div className="place-left">
              <h3><strong>buy</strong> your <br />
                dream <strong>car</strong>
              </h3>
              <div className="form-container">
                <form className="search-car-form" onsubmit="handlSubmit()">
                  <div className="form-field">
                    <input type="search" placeholder="Search cars by name, make, year e.t.c" />
                    <span className="search-icon">
                      <svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6352 12.8516C22.6352 16.8527 19.0349 20.7031 13.8176 20.7031C8.60031 20.7031 5 16.8527 5 12.8516C5 8.85038 8.60031 5 13.8176 5C19.0349 5 22.6352 8.85038 22.6352 12.8516ZM22.5477 22.8136C20.1679 24.6199 17.1288 25.7031 13.8176 25.7031C6.18636 25.7031 0 19.9493 0 12.8516C0 5.75384 6.18636 0 13.8176 0C21.4489 0 27.6352 5.75384 27.6352 12.8516C27.6352 14.7635 27.1863 16.578 26.3812 18.2087L37.3385 26.479L33.3939 31L22.5477 22.8136Z" fill="white" />
                      </svg>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="place-right">

              <div className="img-container">
                <Image
                  src={'/section-one-car.svg'}
                  alt='car'
                  width={350}
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>

  
      <Deal />
      <Description />
      <MarketPlace />
      <Partners />
      <About />

      </main>    
    </>

  )
}

export default Home