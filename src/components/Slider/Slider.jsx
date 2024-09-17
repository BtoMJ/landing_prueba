import casa from '../../assets/casa-slider.png';
import { ImLocation } from "react-icons/im";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import './Slider.css';

function Slider(){
    return(
        <div className='slider-container'>

            <div className='text-container'>
                <div className='info'>
                    <h3>
                        Find the perfect<br/>
                        house in <span>your area</span>
                    </h3>
                    <p>
                        Finding your ideal home is easy and exciting. At our real
                        estate agency, we strive to help you find the perfect home. 
                    </p>
                </div>
                <div className='house-location'>
                    <div className='item-info'>
                        <div className='info'>
                        <ImLocation className='item-icon-1' />
                            <p className='title-info'>Adress</p>
                        </div>
                        <div className='subtitle-info'>  245 Bridgeton Road</div>
                    </div>
                    <div className='item-info'>
                        <div  className='info'>
                            <PiBuildingApartmentFill className='item-icon-2' />
                            <p className='title-info'> City</p>
                        </div>
                        <div className='subtitle-info'> El paso, Texas</div>
                    </div>
                    <div className='item-info'>
                        <button className='button-search'>
                            <GoSearch className='icon-search' />Buscar
                        </button>
                    </div>
                </div>

            </div>

            <div className='image centered'>
                <img src={casa} alt='casa slider' />
            </div>

        </div>
    )
}

export default Slider;