import detail from '../../assets/details.png';
import './Details.css';

function Details(){
    return(
        <div className='details-container'>

            <div className="title-details">
                <h3>Discover the model house that is adapt to your lifestyle</h3>
                <p>
                    We present our model house, designed with the comfort
                    and lifestyle of our clients in mind.
                </p>
                <button className='btn-gral-1'>see house</button>
            </div>

            <div className='img-details'>
                <img src={detail} alt='detalle de la casa imagen' />
            </div>

        </div>
    )
}

export default Details;