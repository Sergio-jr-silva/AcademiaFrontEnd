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
        <strong> R$ 39.99</strong>
        <p> <AiOutlineCheck/> Treinamento personalizado </p>
        <p> <AiOutlineCheck/> Avaliações físicas </p>
        <p> <AiOutlineCheck/> Acesso ao suporte </p>
        <div class="radio"><input type='radio' name='escolha' id='escolhaId' /> <label for='escolhaId'> Assinar </label></div>
      </div>
      <div class="info-box">
        <h3 class="info-box__title">Plano Trimestral</h3>
        <strong> R$ 158.99 </strong>
        <p> <AiOutlineCheck/> Receitas saudáveis </p>
        <p> <AiOutlineCheck/> Programas de desafios </p>
        <p> <AiOutlineCheck/> Aulas de alongamento e flexibilidade </p>
        <div class="radio"><input type='radio' name='escolha' id='escolhaId1' /> <label for='escolhaId1'> Assinar </label></div>
      </div>
      <div class="info-box">
        <h3 class="info-box__title">Plano Anual</h3>
        <strong> R$ 478.99 </strong>
        <p> <AiOutlineCheck/> Descontos em serviços complementares </p>
        <p> <AiOutlineCheck/> Acompanhamento nutricional </p>
        <p> <AiOutlineCheck/> Aulas de Fisioterapia </p>
        <div class="radio"><input type='radio' name='escolha' id='escolhaId2' /> <label for='escolhaId2'> Assinar </label></div>
      </div>
    </section>
  </main>
  <div class='pagamento'>
  
    <p class="select">
      <label for="pagamento">Selecione o opção de pagamento</label>
          <select name="pagamento" id="pagamento">
            <option value="1">Cartão de Crédito</option>
            <option value="2">Pix</option>
            <option value="3">Boleto</option>
          </select>
          <button> Comprar </button>
    </p>
  </div>
        </>
    )
}

export default Plano;