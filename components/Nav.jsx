'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const Nav = () => {
    const [isNavBarOpen, setisNavBarOpen] = useState(false)
    const [navClass, setNavClass] = useState("")

    const openNavbar = (e) => {
        let currentClass = e.target.className
        //e.add("className", "open")
        console.log(currentClass)
        currentClass = "bar-btn open"
    }
    const closeNavbar = (e) => {
        let currentClass = e.target.className
        //e.add("className", "open")

        currentClass = "bar-btn open"
        console.log(currentClass)
    }
    useEffect(() => {
        setNavClass("nav-menu")
    } ,[])
    console.log(navClass)
    return (
        <>
            <header className="header-container">
                <section className="nav-wrapper">
                    <div className="mobile-nav-header">
                        <div className="logo-wrapper">

                            <Link href={'/'} className="logo-container">
                                <Image
                                    src={'/header-logo.svg'}
                                    alt="express autos logo"
                                    width={20}
                                    height={20}
                                />
                            </Link>

                        </div>
                        <div className="btn-container" onClick={() =>
                           setNavClass('nav-menu open')
                          }
                    >
                        <div className="bar-btn">&#9776;</div>
                    </div>
                </div>
                <nav className="main-nav">
                    <ul className={navClass}>
                        <li><span className="close-nav-menu" onClick={()=>{
                            setNavClass("nav-menu")
                        }}>&#10005;</span></li>
                        <Link href={'/'}>
                            <span className="fa fa-home">home</span>
                        </Link>
                        <Link href={'/market-place'}>
                            <span className="fa fa-home">market place</span>
                        </Link>
                        <Link href={'/about-us'}>
                            <span className="fa fa-home">about us</span>
                        </Link>
                        <Link href={'/login'}>
                            <span className="fa fa-home">login</span>
                        </Link>
                        <Link href={'/signup'} target="_self" class="cta-btn">
                            get started
                        </Link>

                    </ul>
                </nav>
            </section>
        </header >
      </> 
  )
}

export default Nav