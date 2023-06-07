import './plano.css';
/*import { AiOutlineCheck } from 'react-icons/ai';*/

function Plano (){
    return (
        <>
            <main class="main">
    <section class="person-container">
      
      <h1 class="person-container__name">Escolha seu plano</h1>
      {/*<h2 class="person-container__subtitle">Vocalista na banda Iron Maiden</h2>*/}
    </section>

    <section class="info-container">
      <div class="info-box">
        <h3 class="info-box__title">Plano Mensal</h3>
        <p>Proin iaculis finibus ornare. Nunc rutrum ac magna vel aliquam. Phasellus dapibus metus nisi, sit amet maximus risus dapibus eget.</p>
      </div>
      <div class="info-box">
        <h3 class="info-box__title">Plano Trimestral</h3>
        <p>Proin iaculis finibus ornare. Nunc rutrum ac magna vel aliquam. Phasellus dapibus metus nisi, sit amet maximus risus dapibus eget.</p>
      </div>
      <div class="info-box">
        <h3 class="info-box__title">Plano Anual</h3>
        <p>Proin iaculis finibus ornare. Nunc rutrum ac magna vel aliquam. Phasellus dapibus metus nisi, sit amet maximus risus dapibus eget.</p>
      </div>
    </section>
  </main>
        </>
    )
}

export default Plano;