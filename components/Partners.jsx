import React from 'react'
import Image from 'next/image'

const Partners = () => {
  return (
     <>
     
<section className="our-partners" id="partners">
  <h3>our partners</h3>
<div className="flex-container">
  <figure>
    <div className="img-container">
        <Image
         src={'/partners-icon-1.svg'}
         height={60}
         width={60}
        />
     
    </div>
  </figure>
  <figure>
    <div className="img-container">
    <Image
         src={'/partners-icon-2.svg'}
         height={60}
         width={60}
        />
    </div>
  </figure>
  <figure>
    <div className="img-container">
    <Image
         src={'/partners-image.png'}
         height={60}
         width={60}
        />
    </div>
  </figure>
  <figure>
    <div className="img-container">
    <Image
         src={'/partners-image-2.png'}
         height={60}
         width={60}
        />
    </div>
  </figure>
  <figure>
    <div className="img-container">
    <Image
         src={'/partners-image-3.png'}
         height={60}
         width={60}
        />
    </div>
  </figure>
  <figure>
    <div className="img-container">
    <Image
         src={'/partners-image-4.png'}
         height={60}
         width={60}
        />
      
    </div>
  </figure>
</div>
</section>     

     </>
  )
}

export default Partners