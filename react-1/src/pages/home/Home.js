import './home.css';
import SidebarButton from '../Sidebar/SidebarButton';
function Home(){

    return (
        <>
        <div class="Home"> 
        <nav style={{marginTop: '-0px'}}>
        <ul class="menu">
        <li class="logo">Next Level</li>

            <li class="item"><a href="/">Home</a></li>
            <li class="item"><a href="/planos">planos</a></li>
            <li class="item"><a href="/cadastro-instrutor">instrutor</a></li>
            <li class="item"><a href="/">Contatos</a></li>

            <li class="item button"><a href="/login">Login</a></li>
            <li class="item button secondary"><a href="/cadastro-aluno">Cadastrar-se</a></li>
            <li class="toggle" onClick={SidebarButton}><span></span></li>
        </ul>
    </nav>
    <main>
        <div class="main-content">
            <h1 class="primary-text">Se inscreva e comece agora o seu treino</h1>
            <div class="btns">
                <button class="btn-exp">Agendar aula experimental</button>
                <button class="btn-personal">contactar personal Trainer</button>
            </div>
        </div>
    </main>
        </div>
        </>

    )
}
export default Home;