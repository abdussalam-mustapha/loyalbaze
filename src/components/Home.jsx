import React from 'react'
import { useState } from 'react';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { Link } from "react-router-dom"
import img1 from "../img/love.svg"
import img2 from "../img/Ellipse 39.svg"
import img3 from "../img/Ellipse 37.png"
import img4 from "../img/Star 2.svg"
import img5 from "../img/Star 2.svg"
import img6 from "../img/spiral.svg"
import img7 from "../img/Star 2.svg"
import img8 from "../img/Star 2.svg"
import tick from "../img/tick.svg"

import { BsPersonCircle } from 'react-icons/bs'
import { BiEnvelope } from "react-icons/bi"

const Home = () => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "300px",
            height: "300px",
            borderRadius: "10px",
            background: "#121b27",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        },
    };

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#fff';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <section className="hero_section">
                <nav className="nav_section">
                    <h1 className="text_logo">L<img src={img1} alt="" className='logo_img' />yalbaze</h1>
                    <Link className="r_btn" to="/About">Request a call</Link>
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
                            <BsPersonCircle className='icon_1' />
                            <input type="text" placeholder="Tell us your name" className='input_1' />
                        </div>
                        <div class="input_cont_2">
                            <BiEnvelope className='icon_2' />
                            <input type="email" name="" id="" placeholder="Enter your email address" className='input_2' />
                        </div>
                        <img src={img6} alt="" className="spiral" />
                        <button type="submit" class="btn" onClick={openModal}>Get early access</button>

                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"

                        >

                            {/* <button onClick={closeModal}>close</button> */}
                            <div className='m_modal'>
                                <img src={tick} alt="" />
                            </div>
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Congratulations</h2>
                            <p className="p_modal">
                                Great move! You're one step closer to getting your hands on the product. 
                                Please check your mail for more information.
                            </p>
                        </Modal>


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