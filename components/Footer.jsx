
import Image from "next/image"
const Footer = () => {
    return (
        <>
            <section class="hr-line"></section>
            <footer class="footer-container">
                <div class="flex-container">
                    <figure class="flex-item">
                        <div class="img-container">
                            <Image
                            src={'/logo.svg'}
                            alt="express-auto-logo"
                            width={100}
                            height={100}
                            />
                            
                        </div>
                    </figure>
                </div>

            </footer>
        </>
    )
}

export default Footer