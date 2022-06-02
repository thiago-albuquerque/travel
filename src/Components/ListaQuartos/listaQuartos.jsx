import './listaQuartos.css';

export default function ListaQuartos(){
    return(
        <section className="lQ">
            <div className="lQItem">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-room-8075-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=378px:*" 
                    alt="" 
                    className="lQImg" 
                />
                <div className="lQTitles">
                    <h1>Quarto Duplo</h1>
                    <h2>4 quartos</h2>
                </div>
            </div>
            
            <div className="lQItem">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-8072-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=378px:*" 
                    alt="" 
                    className="lQImg" 
                />
                <div className="lQTitles">
                    <h1>Quarto King</h1>
                    <h2>4 quartos</h2>
                </div>
            </div>
            
            <div className="lQItem">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-9187-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=378px:*" 
                    alt="" 
                    className="lQImg" 
                />
                <div className="lQTitles">
                    <h1>Quarto Simples</h1>
                    <h2>6 quartos</h2>
                </div>
            </div>
            
            <div className="lQItem">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-room-8073-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=378px:*" 
                    alt="" 
                    className="lQImg" 
                />
                <div className="lQTitles">
                    <h1>Quarto Master</h1>
                    <h2>2 quartos</h2>
                </div>
            </div>
        </section>
    )
}