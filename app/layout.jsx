import '@/styles/auth.css'
import '@/styles/boilerplate.css'
import '@/styles/checkout.css'
import '@/styles/dashboard.css'
import '@/styles/footer.css'
import '@/styles/header.css'
import '@/styles/index.css'
import '@/styles/owl-carousel.css'
import '@/styles/payment.css'
import '@/styles/scrolltop.css'
import '@/styles/swiper.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
//import Provider from '@/components/Provider'

export const metadata = {
    title: "express-in-next",
    description: "Online car sell"
}

const Rootlayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
               
                    <div className='main'>
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Nav />
                        
                        {children}
                        
                        <Footer/>
                    </main>
                

            </body>

        </html >
    )
}

export default Rootlayout