import './suites.css';

export default function Destaque(){
    return(
        <section className='suites'>
            <a href='detalhes'>
                <div className="suitesItem">
                    <img 
                        src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-3649-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=780px:*" 
                        alt="" 
                        className="suitesImg" 
                    />
                    <div className="suitesTitles">
                        <h1>Suíte Premium</h1>
                        <h2>5 Quartos</h2>
                    </div>
                </div>
            </a>
            
            <div className="suitesItem">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-3650-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=580px:*" 
                    alt="" 
                    className="suitesImg" 
                />
                <div className="suitesTitles">
                    <h1>Suíte Deluxe</h1>
                    <h2>3 quartos</h2>
                </div>

            </div>
            
            <div className="suitesItem">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-suite-3655-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=580px:*" 
                    alt="" 
                    className="suitesImg" 
                />
                <div className="suitesTitles">
                    <h1>Suíte Presidencial</h1>
                    <h2>2 quartos</h2>
                </div>

            </div>
        </section>
    )
}