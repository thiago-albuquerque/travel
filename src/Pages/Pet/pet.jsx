import './pet.css';

export default function Pet(){
    return(
        <section className="pet">
            <div className='pContainer'>

                <div className="pItens">
                    <img src={'https://www.mascottecia.com.br/images/gallery/27.jpg'} alt="" />
                    <div className='pDescricao'>
                        <h6>Seu Pet</h6>
                        <h3>
                            Quer aproveitar sua estadia sem se preocupar com seu PET? 
                            <br/><br/>
                            Aqui no Travel ele fica seguro e você aproveita tranquilo!
                        </h3>
                    </div>
                </div>

                <div className="pItens">
                    <div className='pDescricao'>
                        <h6>Ambiente Seguro</h6>
                        <h3>
                            Contamos com o mais moderno ambiente para cuidar do seu bichinho. 
                        </h3>
                    </div>
                    <img src={'https://scontent.fqnv1-1.fna.fbcdn.net/v/t1.6435-9/150129527_859131254647633_2554526313407560472_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=973b4a&_nc_ohc=SScDaMn52kIAX_Ho1U9&_nc_ht=scontent.fqnv1-1.fna&oh=00_AT_xd3bLHl1uTV9qvX2GnP25EIOTawvy3MobT7uAFs-tyQ&oe=62BB6FCA'} alt="" />
                </div>

                <div className="pItens">
                    <img src={'https://cmsapi.sistema.cim.br/storage/C-307MMTG2XWCYRO/e4L1Vc3Sh9dJ06g1kWiGKjdW/html_content.jpeg?v=20210527171621'} alt="" />
                    <div className='pDescricao'>
                        <h6>Atividades</h6>
                        <h3>
                            Cuidamos do seu pet com muito carinho enquanto você estiver desfrutando do seu dia.
                            <br/><br/>
                            Com rotina de atividades, passeios, alimentação supervisionada, água fresca, enter outros mimos. 
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    )
}