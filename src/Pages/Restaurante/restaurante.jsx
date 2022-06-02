import './restaurante.css';

export default function Restaurante(){
    return(
        <section className="restaurante">
            <div className='rContainer'>

                <div className="rItens">
                    <div className='rDescricao'>
                        <h6>Comida Carioca</h6>
                        <h3>
                            O autêntico churrasco do Rio de Janeiro. 
                            <br/><br/>
                            Saboreie um delicioso almoço, além de cortes prime de carne no jantar. 
                        </h3>
                    </div>
                    <img src={'https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-restaurant-9194-hor-clsc.jpg?downsize=580px:*'} alt="" />
                </div>

                <div className="rItens">
                    <img src={'https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-restaurant-1949-hor-clsc.jpg?downsize=580px:*'} alt="" />
                    <div className='rDescricao'>
                        <h6>Modernidade</h6>
                        <h3>
                            Moderno, divertido, leve e animado. 
                            <br/><br/>
                            Faça uma refeição observando as maravilhosas vistas que só existem no Rio. Descubra os sabores do nosso autêntico brunch de domingo. 
                        </h3>
                    </div>
                </div>

                <div className="rItens">
                    <div className='rDescricao'>
                        <h6>Do mundo para o Rio</h6>
                        <h3>
                            A diversidade mora aqui. 
                            <br/><br/>
                            A combinação de deliciosas receitas do mundo todo e vistas deslumbrantes faz do Travel um lugar único no Rio de Janeiro. 
                        </h3>
                    </div>
                    <img src={'https://i2.wp.com/paulogreca.com.br/wp-content/uploads/2019/03/sheraton_028.jpg?fit=1400%2C900&ssl=1'} alt="" />
                </div>

            </div>
        </section>
    )
}