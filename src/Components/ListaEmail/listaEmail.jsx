import './listaEmail.css';

export default function ListaEmail(){
    return(
        <section className="email">
           <h1 className="eTitle">Receba novidades exclusivas antes de todo mundo!</h1>
           <span className="eDescricao">Inscreva-se, enviaremos as melhores ofertas.</span>
           <div>
                <input className='eInput' type="text" placeholder='Seu email'/>
                <button className="eBtn">Enviar</button>
           </div> 
        </section>
    )
}