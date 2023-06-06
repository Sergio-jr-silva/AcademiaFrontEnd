import './cadastro.css';
import image from './Dumbbell exercise-rafiki.png'

function Exercicio(){
    return (
        <>
            <div class="box">
        <div class="img-box">
            <img src={image}/>
        </div>
        <div class="form-box">
            <h2>Criar Conta</h2>
            <p> Já é um membro? <a href="#"> Login </a> </p>
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