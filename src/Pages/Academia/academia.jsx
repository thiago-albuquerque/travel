import './academia.css';

export default function Academia(){
    return(
        <section className="academia">
            <div className='aContainer'>

                <div className="aItens">
                    <img src={'https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-fitness-4005-hor-feat.jpg'} alt="" />
                    <div className='aDescricao'>
                        <h6>Em Forma</h6>
                        <h3>
                            Nossa academia de ginástica é equipada com aparelhos cardiovasculares e pesos para que você mantenha sua rotina de exercícios.
                        </h3>
                    </div>
                </div>

                <div className="aItens">
                    <img src={'https://greenlifeacademias.com.br/wp/wp-content/uploads/2020/03/treinamento-funcional-greenlife.jpg'} 
                    alt="" />
                    <div className='aDescricao'>
                        <h6>Acompanhamento</h6>
                        <h3>
                            Profissionais qualificados para oferecer suporte com treinos personalizados de acordo com seu objetivo. 
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    )
}