import { ImLocation } from "react-icons/im";
import image from '../../assets/casa-property.png';
import './Property.css';

function  Property(){
    return(
        <div className='location-container'>

            <div className='image-location'>
                <img src={image} alt='image' />
            </div>
            <div className='info-location'>
                <div className="item-property">
                    <div className='title-property'>
                        <div className='icon-title'>
                            <ImLocation />
                        </div>
                        <div className='text-title'>
                            <h2>Best location</h2>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
                        tempor incididunt ut labore et dolore magna aliqua 
                    </p>
                </div>
                <div className="item-property">
                    <div className='title-property'>
                        <div className='icon-title'>
                            <ImLocation />
                        </div>
                        <div className='text-title'>
                            <h2>Kind of property</h2>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
                        tempor incididunt ut labore et dolore magna aliqua 
                    </p>
                </div>
                <div className="item-property">
                    <div className='title-property'>
                        <div className='icon-title'>
                            <ImLocation />
                        </div>
                        <div className='text-title'>
                            <h2>Different prices</h2>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
                        tempor incididunt ut labore et dolore magna aliqua 
                    </p>
                </div>
                

            </div>

          

        </div>
    )
}

export default Property;