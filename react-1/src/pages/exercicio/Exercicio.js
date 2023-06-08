import '../cadastro/cadastro.css';
import image from '../../images/Personalized workouts-bro.png'

function Exercicio(){
    return (
        <>
            <div class="box">
        <div class="img-box">
            <img src={image}/>
        </div>
        <div class="form-box">
            <h2>Criar Exercício</h2>

            <form action="#">
                <div class="input-group">
                        <label for="repeticoes"> Repetições </label>
                        <input type="text" id="repeticoes" placeholder="Ex: 4x15" required/>
                    </div>

                <div class="input-group">
                    <label for="serie"> Número de Série </label>
                    <input type="text" id="serie" placeholder="Ex: 3x" required/>
                </div>

                <div class="input-group">
                    <label for="carga">Carga</label>
                    <input id="carga" type="text" name="carga" placeholder="Ex: 5kg" required/>
                </div>

                <div class="input-group">
                    <button>Cadastrar</button>
                </div>

            </form>
        </div>
    </div>
        </>
    )
}

export default Exercicio