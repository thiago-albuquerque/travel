import './login.css';

export default function Login(){
    return(
        <section className="login">

                <form action="" className='lForm'>
                    <img src={require('../../Assets/logoIcon.png')} alt="" />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Senha' />
                    <a href="/">Entrar</a>
                    <h6>Já possuo uma conta</h6>
                </form>

        </section>
    )
}