import './destaques.css';

import { AiFillStar } from 'react-icons/ai';

export default function Destaques(){
    return(
        <section className="d">
            <div className="dItem">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-3649-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=780px:*" 
                    alt="" 
                    className="dImg" 
                />
                <span className="dNome">Suíte Premium</span>
                <span className="dPreco">A partir de R$200</span>
                <div className="votosContainer">
                    <div className='estrelaContainer'>
                        <AiFillStar className='estrela'/>
                        <h5>9.4</h5>
                    </div>
                    <h6>Excelente</h6>
                </div>
            </div>
            
            <div className="dItem">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-8072-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=378px:*" 
                    alt="" 
                    className="dImg" 
                />
                <span className="dNome">Quarto King</span>
                <span className="dPreco">A partir de R$120</span>
                <div className="votosContainer">
                    <div className='estrelaContainer'>
                        <AiFillStar className='estrela'/>
                        <h5>9.3</h5>
                    </div>
                    <h6>Excelente</h6>
                </div>
            </div>
            
            <div className="dItem">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-9187-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=378px:*" 
                    alt="" 
                    className="dImg" 
                />
                <span className="dNome">Quarto Simples</span>
                <span className="dPreco">A partir de R$91</span>
                <div className="votosContainer">
                    <div className='estrelaContainer'>
                        <AiFillStar className='estrela'/>
                        <h5>9.2</h5>
                    </div>
                    <h6>Excelente</h6>
                </div>
            </div>
            
            <div className="dItem">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-3655-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=580px:*" 
                    alt="" 
                    className="dImg" 
                />
                <span className="dNome">Suíte Presidencial</span>
                <span className="dPreco">A partir de R$280</span>
                <div className="votosContainer">
                    <div className='estrelaContainer'>
                        <AiFillStar className='estrela'/>
                        <h5>9.9</h5>
                    </div>
                    <h6>Excelente</h6>
                </div>
            </div>
        </section>

    )
}
