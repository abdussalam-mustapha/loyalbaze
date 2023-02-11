import React from 'react'

import { Link } from "react-router-dom"
import img1 from "../img/love.svg"
import img2 from "../img/Ellipse 39.svg"
import img3 from "../img/Ellipse 37.png"
import img4 from "../img/Star 2.svg"
import img5 from "../img/Star 2.svg"
import img6 from "../img/spiral.svg"
import img7 from "../img/Star 2.svg"
import img8 from "../img/Star 2.svg"

import { BsPersonCircle } from 'react-icons/bs'
import { BiEnvelope } from "react-icons/bi"

const Home = () => {
    return (
        <div>
            <section class="hero_section">
                <nav class="nav_section">
                    <h1 class="text_logo">L<img src={img1} alt="" className='logo_img' />yalbaze</h1>
                    <Link class="r_btn" to="/About">Request a call</Link>
                </nav>
                <section className="main_content">
                    <div className="text_main">
                        <img src={img2} alt="" className="main_circle" />
                        <img src={img3} alt="" className="circle_2" />
                        <img src={img4} alt="" className="star_4" />
                        <p class="text_intro">Turn your best customers into
                            <b class="p_text">loyal fans</b>
                        </p>
                        <img src={img5} alt="" className="star_5" />
                    </div>
                    <div className="p_desc">
                        <p className="text_desc">
                            Get ready to revolutionize the way you interact with your customers and drive sales with loyalbaze,
                            Join the waiting list now to be among the among the first to experience the future of customer
                            loyalty
                        </p>
                    </div>
                    <section className="input_sect">
                        <div className="input_cont_1">
                            <BsPersonCircle className='icon_1'/>
                            <input type="text" placeholder="Tell us your name" />
                        </div>
                        <div class="input_cont_2">
                            <BiEnvelope className='icon_2'/>
                            <input type="email" name="" id="" placeholder="Enter your email address" />
                        </div>
                        <img src={img6} alt="" className="spiral" />
                        <button type="submit" class="btn">Get early access</button>
                        <section className="id_p">
                            <div className="id_c" id="i_1">M</div>
                            <div className="id_c" id="i_2">O</div>
                            <div className="id_c" id="i_3">L</div>
                            <div className="id_c" id="i_4">G</div>
                            <span><small>+57 joined</small></span>
                        </section>
                        <img src={img7} alt="" className="star_6" />
                        <img src={img8} alt="" className="star_7" />
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Home