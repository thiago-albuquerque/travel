import './spa.css';

export default function Spa(){
    return(
        <section className="spa">
            <div className='sContainer'>

                <div className="sItens">
                    <div className='sDescricao'>
                        <h6>Bem-Estar Pleno</h6>
                        <h3>
                            Com um ambiente convidativo para relaxar, o spa localizado no Travel, é o primeiro spa nas Américas e oferece uma variedade de opções de massagens e tratamentos para uma experiência incrível e harmonizada, realinhando o prazer e o equilíbrio entre corpo e alma.
                        </h3>
                    </div>
                    <img src={'https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-spa-1630-hor-clsc.jpg?downsize=1440px:*'} alt="" />
                </div>

                <div className="sItens">
                    <div className='sDescricao'>
                        <h6>Vista Oceânica</h6>
                        <h3>
                            A vista para o mar torna este espaço ainda mais tranquilizante. 
                            <br/><br/>
                            O spa oferece uma grande variedade de serviços, entre massagens e tratamentos corporais e faciais, para que seu relaxamento seja total e seu retorno para casa seja ainda mais energizado. 
                        </h3>
                    </div>
                    <img src={'https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-spa-4006-hor-feat.jpg?downsize=1440px:*'} 
                    alt="" />
                </div>

                <div className="sItens">
                    <div className='sDescricao'>
                        <h6>Salão de Beleza</h6>
                        <h3>
                        O spa também tem um salão de beleza que oferece uma variedade de serviços para tornar a vida diária ainda mais bonita ou para você se preparar para o dia mais especial de sua vida.
                        </h3>
                    </div>
                    <img src={'https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-parlor-9191-hor-clsc.jpg?downsize=1440px:*'} alt="" />
                </div>

            </div>
        </section>
    )
}