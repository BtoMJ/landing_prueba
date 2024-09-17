import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsFillHouseCheckFill } from "react-icons/bs";

import './Options.css';

function Options(){
    return(
        <div className='options-container'>

            <h1>We have 4 purchase modalities for you</h1>
            <div className='options-group'>
                <div className="option">
                    <div className='icon-card'>
                        <MdOutlineShoppingBag />
                    </div>
                    <div className='title-card'><h2>Buy</h2></div>
                    <div className='text-card'>
                        It consists of the transfer of
                        property from one person to
                        another in exchange for a price.
                    </div>
                </div>
                <div className="option">
                    <div className='icon-card'>
                        <IoIosTimer />
                    </div>
                    <div className='title-card'><h2>Rent</h2></div>
                    <div className='text-card'>
                        Agreement between an owner of
                        real property and a tenant, in
                        which the owner rents the real
                        property to the tenant, in
                        exchange for a payment.         
                    </div>
                </div>
                <div className="option">
                    <div className='icon-card'>
                        <FaHandHoldingDollar />
                    </div>
                    <div className='title-card'><h2>Auction</h2></div>
                    <div className='text-card'>
                        Process in which real estate is
                        offered for sale to a group of
                        interested people, with the aim
                        of obtaining the best price.
                    </div>
                </div>
                <div className="option">
                    <div className='icon-card'>
                        <BsFillHouseCheckFill />
                    </div>
                    <div className='title-card'><h2>Mortgage</h2></div>
                    <div className='text-card'>
                        A long term loan used to
                        purchase real estate.
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Options;