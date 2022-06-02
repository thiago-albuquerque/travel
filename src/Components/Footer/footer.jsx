import './footer.css';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { CgCoffee } from 'react-icons/cg';
import { RiInstagramFill } from 'react-icons/ri';
import { IoMdRocket } from 'react-icons/io';

export default function Footer(){

    function scrollTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return(
        <section className="footer">

            <span className="fListaCopy">Copyright © 2022 Travel.com™. All rights reserved.</span>

            <div className="socialContainer">
                <a target={'_blank'} href={'https://www.linkedin.com/in/progthiago/'}>
                    <FaLinkedin/> 
                </a>
                <a target={'_blank'} href={'https://github.com/thiago-albuquerque'}>
                    <FaGithub/> 
                </a>
                <a target={'_blank'} href={'https://www.instagram.com/garotoqprograma/?hl=pt-br'}>
                    <RiInstagramFill/> 
                </a>
                <a target={'_blank'} href={'https://blog-meuportfolio.vercel.app/'}>
                    <CgCoffee/> 
                </a>
            </div>

            <button className='scrollTop' onClick={scrollTop}>
                <IoMdRocket className='scrollTopIcon'/>
            </button>

        </section>
    )
}