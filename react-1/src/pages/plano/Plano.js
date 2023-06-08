import './plano.css';
import { AiOutlineCheck } from 'react-icons/ai';

function Plano (){
    return (
        <>
      <main class="main">
    <section class="person-container">
      
      <h1 class="person-container__name">Escolha seu plano</h1>
      {/*<h2 class="person-container__subtitle"></h2>*/}
    </section>

    <section class="info-container">
      <div class="info-box">
        <h3 class="info-box__title">Plano Mensal</h3>
        
        <p> <AiOutlineCheck/> Treinamento personalizado </p>
        <p> <AiOutlineCheck/> Avaliações físicas </p>
        <p> <AiOutlineCheck/> Acesso ao suporte </p>
        <button> Comprar </button>
      </div>
      <div class="info-box">
        <h3 class="info-box__title">Plano Trimestral</h3>

        <p> <AiOutlineCheck/> Receitas saudáveis </p>
        <p> <AiOutlineCheck/> Programas de desafios </p>
        <p> <AiOutlineCheck/> Aulas de alongamento e flexibilidade </p>
        <button> Comprar </button>
      </div>
      <div class="info-box">
        <h3 class="info-box__title">Plano Anual</h3>

        <p> <AiOutlineCheck/> Descontos em serviços complementares </p>
        <p> <AiOutlineCheck/> Acompanhamento nutricional </p>
        <p> <AiOutlineCheck/>  </p>
        <button> Comprar </button>
      </div>
    </section>
  </main>
        </>
    )
}

export default Plano;