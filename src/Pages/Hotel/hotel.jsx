import './hotel.css';

export default function Hotel(){
    return(
        <section className="hotel">
            <div className="sobre">
                <img 
                    src="https://cache.marriott.com/marriottassets/marriott/RIOSI/riosi-exteror-9176-hor-clsc.jpg?downsize=1440px:*" 
                    alt="" 
                />

                <div>
                    <h1 className="hotelTitle">Fique no coração da cidade</h1>
                    <p className="hotelDescricao">
                        Situado entre a badalada Barra da Tijuca e a famosa praia de Ipanema, o nosso resort extravagante e de serviço completo oferece amplas instalações de negócios em um ambiente tropical. Deixe que o nosso serviço de transporte cortesia leve você às praias do Leblon, Ipanema e Copacabana, até as lojas do Shopping Rio Sul.
                        <br/><br/>
                        O Travel é o único resort à beira-mar e com acesso direto à praia. Nosso resort conta com uma extensa área de lazer, spa e comodidades. Seus jardins exuberantes e paisagísticos estão situados acima de uma praia de areias brancas, de frente para o mar e ladeados por montanhas imponentes. Os quartos e suítes oferecem as confortáveis​ camas Travel Signature Sleep Experience, bem como varandas privativas com vista para o mar. 
                        <br/><br/>
                        As acomodações do Club incluem acesso ao Travel Club Lounge e uma área exclusiva para o café da manhã.
                    </p>
                </div>
            </div>
                
            <div className='hotelInfo'>
                <p>
                    Enquanto você relaxa em uma de nossas piscinas localizadas na luxuosa área de lazer ou aproveita o melhor do sol na praia, banhada pelas águas azuis do oceano em frente ao hotel, nossa equipe oferece um serviço particular de praia excepcional. Oferecemos acesso privado à praia com atendente, cadeiras, espreguiçadeiras, ombrelones e toalhas, e os melhores cocktails e lanches. Além disso, o nosso serviço de Concierge na Piscina facilitará atividades recreativas e esportivas como caminhadas, aulas de ginástica, vôlei, futebol, frescobol, peteca, etc.
                </p>
            </div>
        </section>
    )
}