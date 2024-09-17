import './NavBar.css';

function NavBar(){
    return(
        <div className='navBar-container'>

            <div className='logo'>

            </div>
            <div className='menu'>
                <ul className='menu-items'>
                    <li className='active'>Home</li>
                    <li>Modality</li>
                    <li>Options</li>
                    <li>Model</li>
                    <li>Interest</li>
                </ul>
            </div>
            <div className='button-contact-container'>
                <button className='button-contact'>Contact</button>
            </div>

        </div>
    )
}

export default NavBar;