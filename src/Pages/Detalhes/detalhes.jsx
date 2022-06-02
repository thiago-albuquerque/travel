import './detalhes.css';

import { useState } from 'react';

import { MdPool, MdPets } from 'react-icons/md';
import { RiArrowLeftCircleFill, RiArrowRightCircleFill, RiCloseCircleFill, RiTempColdLine, RiParkingBoxLine } from 'react-icons/ri';
import { BiWifi, BiDrink } from 'react-icons/bi';

export default function Detalhes(){

    const [slider, setSlider] = useState(0);
    const [slideOpen, setSlideOpen] = useState(false);

    const photos = [
        {
          src: "https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-3649-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=*:253px",
        },
        {
          src: "https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-8427-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=*:253px",
        },
        {
          src: "https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-9188-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=*:253px",
        },
        {
          src: "https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-8425-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=*:253px",
        },
        {
          src: "https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-guest-room-6190-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=*:253px",
        },
        {
          src: "https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-pool-9178-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=*:253px",
        },
      ];

      const handleOpenSlider = (index) => {
        setSlider(index);
        setSlideOpen(true);
      }

      const handleMove = (direction) => {
          let newSliderNumber;

          if( direction === 'left' ){
            newSliderNumber = slider === 0 ? 5 : slider -1
          }else{
            newSliderNumber = slider === 5 ? 0 : slider +1
          }

          setSlider(newSliderNumber);
      }

    return(
            <section className="detalhesContainer">

                {slideOpen && 
                    <div className="slider">
                        <RiCloseCircleFill 
                            className='slideFechar'
                            onClick={ () => setSlideOpen(false) }    
                        />
                        <RiArrowLeftCircleFill 
                            className='arrow'
                            onClick={ () => handleMove('left') }
                        />

                        <div className="sliderWrapper">
                            <img src={photos[slider].src} alt="" className="sliderImg" />
                        </div>

                        <RiArrowRightCircleFill 
                            className='arrow'
                            onClick={ () => handleMove('right') }
                        />
                    </div>
                }

                <div className="dtWrapper">

                    <button className="dtBtn">Reserve Agora!</button>

                    <h1 className="dtTitle">Suíte Premium</h1>

                    <span className="dtDistance">
                        Excelente localização - 500m do Shopping
                    </span>
                    <span className="dtChamadaReserva">
                    Reserve uma estadia superior a R$200 e ganhe um tranfer gratuito para o aeroporto
                    </span>

                    <div className="dtComodidades">
                        <span>Comodidades:</span>

                        <div className="comodidadesContainer">
                            <div className='comodidadesItens'>
                                <RiTempColdLine className='dtIcon'/>
                                <h6>Ar condicionado</h6>
                            </div>
                            <div className='comodidadesItens'>
                                <MdPool className='dtIcon'/>
                                <h6>Piscina</h6>
                            </div>
                            <div className='comodidadesItens'>
                                <RiParkingBoxLine className='dtIcon'/>
                                <h6>Estacionamento</h6>
                            </div>
                            <div className='comodidadesItens'>
                                <BiWifi className='dtIcon'/>
                                <h6>Wi-fi</h6>
                            </div>
                            <div className='comodidadesItens'>
                                <MdPets className='dtIcon'/>
                                <h6>Aceita animais</h6>
                            </div>
                            <div className='comodidadesItens'>
                                <BiDrink className='dtIcon'/>
                                <h6>Frigobar</h6>
                            </div>
                            
                        </div>
                    </div>

                    <div className="dtImagens">
                        {photos.map( (photo, index) => (
                            <div className="dtImgWrapper">
                                <img 
                                    src={photo.src} 
                                    alt="" 
                                    className="dtImg"
                                    onClick={ () => handleOpenSlider(index)}
                                />
                            </div>
                        ) )}
                    </div>

                    <div className="dtInfo">
                        <h1>Perfeito para uma estadia de 5 noites!</h1>
                        <span>
                            Esta propriedade tem uma excelente <b>pontuação de 9.4 na localização!</b>
                        </span>
                        <h2>R$ 1.000 (5 noites)</h2>
                        <button>Reserve agora!</button>
                    </div>
                    </div>
            </section>
    )
}