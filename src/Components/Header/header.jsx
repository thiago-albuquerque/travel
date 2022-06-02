import './header.css';

import { MdTravelExplore, MdEmojiPeople } from 'react-icons/md';
import { BsCalendarWeek } from 'react-icons/bs';

export default function Header(){

    return(
        <section className="header">
            <div className='hTexto'>
                <h1>Buscando uma experiência diferente?</h1>
                <p>Aqui no Travel você encontra! Toda qualidade e excelência dos melhores serviços premium.</p>
            </div>

            <div className="hPesquisa">
                <div className="hPItem">
                    <MdTravelExplore className='hIcon'/>
                    <input 
                        type='text' 
                        placeholder='O que procura?' 
                        className='hPInput'
                    />
                </div>
                        
                <div className="hPItem">
                    <BsCalendarWeek className='hIcon'/>
                    <span className="hPTexto">30/05/2022 - 05/06/2022</span>
                </div>

                <div className="hPItem">
                    <MdEmojiPeople className='hIcon'/>
                    <span className="hPTexto">Adultos: 2 - Crianças: 0 - Quartos: 1</span>
                </div>

                <a className="hBtn">Search</a>
            </div>
        </section>
    );
};