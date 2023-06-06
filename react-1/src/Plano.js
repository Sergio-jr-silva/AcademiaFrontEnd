import './plano.css';
import { AiOutlineCheck } from 'react-icons/ai';

function Plano (){
    return (
        <>
            <header>
        <h2>Escolha o seu Plano </h2>
    </header>
    <main class="cards">
        <section class="card contact">
        
            <h3>Plano Mensal</h3>
            <span> <AiOutlineCheck/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <button>Learn More</button>
        </section>
        <section class="card shop">
            
            <h3>Plano Trimestral</h3>
            <span> <AiOutlineCheck/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <button>Learn More</button>
        </section>
        <section class="card about">
            
            <h3>Plano Anual</h3>
            <span> <AiOutlineCheck/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <button>Learn More</button>
        </section>
    </main>
        </>
    )
}

export default Plano;