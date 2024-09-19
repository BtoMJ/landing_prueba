import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { MdOutlineBathtub } from "react-icons/md";
import { MdOutlineKitchen } from "react-icons/md";
import { TbBed } from "react-icons/tb";
import { ImLocation } from "react-icons/im";

import house1 from '../../assets/house1.png';
import house2 from '../../assets/house2.png';
import house3 from '../../assets/house3.png';
import house4 from '../../assets/house4.png';

import './Examples.css';


function Examples(){
    
    // const [toggle, setToggle] = useState(false);
    
    // const like = () => {
    //     setToggle((toggle) => !toggle);
    //     console.log("ESTADO",toggle)
    //   };

    return(
        <div className='examples-container'>

            <div className='examples-title'>

                <div className='title'>
                    <h2>Trends in properties for sale.</h2>
                </div>
                <div className='title-btn'>
                    <select className="select-gral">
                        <option>Property type</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Big</option> 
                    </select>
                    <button className='btn-gral-2'>See all property</button>
                </div>

            </div>

            <div className='examples-info'>

                <div className="example">
                    <div className="example-img">
                        <img src={house1} alt="casa 1" />
                    </div>
                    <div className="info">
                        <div className='info-title'>
                            <h3>Chateau Mar.</h3>
                            <FaRegHeart className="icon-example" />
                            {/* { 
                                like === true ? 
                                <button  onClick={like}><FaHeart /></button>
                                :
                                <button onClick={like}><FaRegHeart /></button>
                            } */}
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua.
                        </p>
                        <div className='options-examples'>
                            <div className="option-info">
                                <LuBedDouble className="icon-option"/>
                                <h5>5 Rooms</h5>
                            </div>
                            <div className="option-info">
                                <MdOutlineBathtub className="icon-option"/>
                                <h5>3 Bathrooms</h5>
                            </div>
                            <div className="option-info">
                                <MdOutlineKitchen className="icon-option"/>
                                <h5>2 Kitchens</h5>
                            </div>
                            <div className="option-info">
                                <TbBed className="icon-option"/>
                                <h5>8 Beds</h5>
                            </div>

                        </div>
                        <div className="location-option">
                            <ImLocation className="icon-location"/>
                            <p>
                                Lorem ipsum dolor sit amet, loremp
                                consectetur adipiscing elit, ipsum.
                            </p>

                        </div>
                        <div className="options-btn">
                            <button className='btn-gral-1'>View details</button>
                            <p>$325,000</p>

                        </div>
                    </div>
                </div>
                <div className="example">
                    <div className="example-img">
                        <img src={house2} alt="casa 1" />
                    </div>
                    <div className="info">
                        <div className='info-title'>
                            <h3>Moritz Lodge</h3>
                            <FaHeart className="icon-example" />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua.
                        </p>
                        <div className='options-examples'>
                            <div className="option-info">
                                <LuBedDouble />
                                <h5>5 Rooms</h5>
                            </div>
                            <div className="option-info">
                                <MdOutlineBathtub />
                                <h5>3 Bathrooms</h5>
                            </div>
                            <div className="option-info">
                                <MdOutlineKitchen />
                                <h5>2 Kitchens</h5>
                            </div>
                            <div className="option-info">
                                <TbBed />
                                <h5>8 Beds</h5>
                            </div>

                        </div>
                        <div className="location-option">
                            <ImLocation className="icon-location"/>
                            <p>
                                Lorem ipsum dolor sit amet, loremp
                                consectetur adipiscing elit, ipsum.
                            </p>

                        </div>
                        <div className="options-btn">
                            <button className='btn-gral-1'>View details</button>
                            <p>$458,000</p>

                        </div>
                    </div>
                </div>
                <div className="example">
                    <div className="example-img">
                        <img src={house3} alt="casa 1" />
                    </div>
                    <div className="info">
                        <div className='info-title'>
                            <h3>Central Park</h3>
                            <FaHeart className="icon-example"/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua.
                        </p>
                        <div className='options-examples'>
                            <div className="option-info">
                                <LuBedDouble />
                                <h5>5 Rooms</h5>
                            </div>
                            <div className="option-info">
                                <MdOutlineBathtub />
                                <h5>3 Bathrooms</h5>
                            </div>
                            <div className="option-info">
                                <MdOutlineKitchen />
                                <h5>2 Kitchens</h5>
                            </div>
                            <div className="option-info">
                                <TbBed />
                                <h5>8 Beds</h5>
                            </div>

                        </div>
                        <div className="location-option">
                            <ImLocation className="icon-location"/>
                            <p>
                                Lorem ipsum dolor sit amet, loremp
                                consectetur adipiscing elit, ipsum.
                            </p>

                        </div>
                        <div className="options-btn">
                            <button className='btn-gral-1'>View details</button>
                            <p>$124,000</p>

                        </div>
                    </div>
                </div>
                <div className="example">
                    <div className="example-img">
                        <img src={house4} alt="casa 1" />
                    </div>
                    <div className="info">
                        <div className='info-title'>
                            <h3>Palazzo di S.C.</h3>
                            <FaHeart className="icon-example"/>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua.
                        </p>
                        <div className='options-examples'>
                            <div className="option-info">
                                <LuBedDouble />
                                <h5>5 Rooms</h5>
                            </div>
                            <div className="option-info">
                                <MdOutlineBathtub />
                                <h5>3 Bathrooms</h5>
                            </div>
                            <div className="option-info">
                                <MdOutlineKitchen />
                                <h5>2 Kitchens</h5>
                            </div>
                            <div className="option-info">
                                <TbBed />
                                <h5>8 Beds</h5>
                            </div>

                        </div>
                        <div className="location-option">
                            <ImLocation className="icon-location"/>
                            <p>
                                Lorem ipsum dolor sit amet, loremp
                                consectetur adipiscing elit, ipsum.
                            </p>

                        </div>
                        <div className="options-btn">
                            <button className='btn-gral-1'>View details</button>
                            <p>$157,000</p>

                        </div>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default Examples;