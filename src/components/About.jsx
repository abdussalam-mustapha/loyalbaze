import React from 'react'
import img1 from "../img/Ellipse 37.png"
import img2 from "../img/Star 2.svg"
import img3 from "../img/Line 6.svg"
import img4 from "../img/Star 3.png"
import img5 from "../img/Star 3.png"

import { MdHouse } from "react-icons/md"
import { MdPhoneInTalk } from "react-icons/md"

const About = () => {
    return (
        <div>
            <section class="abt_section">
                <section className="col_1">
                    <img src={img1} alt="" className="circle" />
                    <img src={img2} alt="" id="star_1" />
                    <p className="abt_text">Priority Access</p>
                    <div className="line">
                        <img src={img3} alt="" class="line_img" />
                    </div>
                    <p className="abt_desc">
                        Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With
                        our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track
                        customer engagement, and gain valuable insights to improve your business.
                    </p>
                    <img src={img4} alt="" id="star_2" />
                </section>
                <section className="col_2">
                    <section className="form_section">
                        <p className="f_text">Book a consultation with us</p>
                        <form>
                            <input type="text" placeholder="Enter your full name" />
                            <input type="email" name="" id="" placeholder="Enter your work mail" />
                            <input type="number" name="" id="" placeholder="Mobile number" />
                            <input type="text" placeholder="Company name" />
                            <select name="Select country" id="">Select country
                                <option value="Nigeria">Select country</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Nigeria">Nigeria</option>
                            </select>
                            <textarea name="" id="" cols="20" rows="6" placeholder="Drop a message..."></textarea>
                            <button type="submit" class="btn">Send Request</button>
                        </form>
                        <img src={img5} alt="" id="star_3" />
                    </section>
                </section>
            </section>
            <hr />
            <section className="footer_sect">
                <div className="p_1">
                    <MdHouse className='footer_icon' />
                    <div className="para_foot">
                        <p className="p_add">2nd Floor, The Garnet Building, KM14</p>
                        <p>Lekki Epe Expressway, Lagos, Nigeria</p>
                    </div>
                </div>
                <p className='ft_text'>Loyalbaze is almost here</p>
                <div className="mb">
                    <MdPhoneInTalk />
                    <p>+234 903 618 9485</p>
                </div>
            </section>
        </div>
    )
}

export default About