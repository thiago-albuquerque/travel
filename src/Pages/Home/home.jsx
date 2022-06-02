import './home.css';

import Header from '../../Components/Header/header';
import Suites from '../../Components/Suites/suites';
import ListaQuartos from '../../Components/ListaQuartos/listaQuartos';
import Destaques from '../../Components/Destaques/destaques';

import { MdRestaurantMenu } from 'react-icons/md';
import { FaSpa, FaDog } from 'react-icons/fa';
import { GiSailboat} from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';
import { CgGym } from 'react-icons/cg';

export default function Home(){
    return(
        <section>
            <Header/>
            <div className="homeContainer">
                <h1 className="homeTitle">Suítes especiais</h1>
                <Suites/>
                <h1 className="homeTitle">Opções de quarto</h1>
                <ListaQuartos/>

                <span className='clientes'>
                    <h1>+ 5000</h1>
                    <h2>Clientes Satisfeitos</h2>
                </span> 

                <h1 className="homeTitle">Mais bem avaliados</h1>
                <Destaques/>

                <span className="servicos">
                    <h1>Outros serviços</h1>
                    <h3>Desfrute dos melhores serviços personalizados</h3>

                    <div className='servicosContainer'>
                        <details>
                            <summary>
                                <div className='servicosItens'>
                                    <MdRestaurantMenu className='servicosIcon'/>
                                    <h6>Comidas Deliciosas</h6>
                                </div>
                            </summary>

                            <div className="itens">
                                <h3>
                                Desfrute de uma cozinha feita especialmente para você pelos chefs mais renomados do mundo. 
                                </h3>
                                <img src={require('../../Assets/foodImg.jpg')} alt="" />
                            </div>
                        </details>

                        <details>
                            <summary>
                                <div className='servicosItens'>
                                    <FaSpa className='servicosIcon'/>
                                    <h6>Spa & Meditação</h6>
                                </div>
                            </summary>

                            <div className="itens">
                                <img src={require('../../Assets/spaImg.jpg')} alt="" />
                                <h3 className="servicosDescription">
                                Cuide do seu bem-estar físico e mental com o nosso spa e área de meditação. 
                                </h3>
                            </div>
                        </details>

                        <details>
                            <summary>
                                <div className='servicosItens'>
                                    <FaDog className='servicosIcon'/>
                                    <h6>Espaço Pet</h6>
                                </div>
                            </summary>

                            <div className="itens">
                                <h3 className="servicosDescription">
                                Não se preocupe com o seu animal de estimação. Aqui receberá um tratamento de 5 estrelas, tal como você. 
                                </h3>
                                <img src={require('../../Assets/petImg.jpg')} alt="" />
                            </div>
                        </details>

                        <details>
                            <summary>
                                <div className='servicosItens'>
                                    <CgGym className='servicosIcon'/>
                                    <h6>Espaço Fitness 24h</h6>
                                </div>
                            </summary>

                            <div className="itens">
                                <img src={require('../../Assets/gymImg.jpg')} alt="" />
                                <h3 className="servicosDescription">
                                Precisa cuidar do seu corpo mesmo durante suas viagens? Encontre academias modernas para o seu treino.
                                </h3>
                            </div>
                        </details>

                        <details>
                            <summary>
                                <div className='servicosItens'>
                                    <GiSailboat className='servicosIcon'/>
                                    <h6>Passeios de Barco</h6>
                                </div>
                            </summary>

                            <div className="itens">
                                <h3 className="servicosDescription">
                                Passeios de barco exclusivo para você e sua familia. 
                                </h3>
                                <img src={require('../../Assets/boatImg.jpg')} alt="" />
                            </div>
                        </details>

                        <details>
                            <summary>
                                <div className='servicosItens'>
                                    <IoDiamond className='servicosIcon'/>
                                    <h6>Presentes Premium</h6>
                                </div>
                            </summary>

                            <div className='itens'>
                                <img src={require('../../Assets/premiumImg.jpg')} alt="" />
                                <h3 className="servicosDescription">
                                Receba mimos surpresa de primeira qualidade para recordar a sua experiência conosco. 
                                </h3>
                            </div>
                        </details>
                    </div>
                </span>
            </div>
        </section>
    )
}