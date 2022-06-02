import './navBar.css';

import { RiHotelLine } from 'react-icons/ri';
import { MdRestaurantMenu } from 'react-icons/md';
import { FaBed, FaSpa, FaDog } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';

export default function NavBar(){
    return(
        <section className='navBar'>
            <div className='navContainer'>

                <div className='navLogin'>
                    <div className='logoContainer'>
                        <a href='/' className="logo">Travel</a>
                        <img src={require('../../Assets/logoIcon.png')} alt="" />
                    </div>

                    <div>
                        <a href='login' className="navButton">Login</a>
                    </div>
                </div>

                <div className="navOptions">
                    <div className="option">
                        <RiHotelLine className='optionIcon'/>
                        <a href='hotel'>Hotel</a>
                    </div>
                    <div className="option">
                        <FaBed className='optionIcon'/>
                        <a href='quartos'>Quartos</a>
                    </div>
                    <div className="option">
                        <MdRestaurantMenu className='optionIcon'/>
                        <a href='restaurante'>Restaurante</a>
                    </div>
                    <div className="option">
                        <FaSpa className='optionIcon'/>
                        <a href='spa'>Spa</a>
                    </div>
                    <div className="option">
                        <CgGym className='optionIcon'/>
                        <a href='academia'>Academia</a>
                    </div>
                    <div className="option">
                        <FaDog className='optionIcon'/>
                        <a href='pet'>Espaço Pet</a>
                    </div>
                </div>
            </div>
        </section>
    )
}