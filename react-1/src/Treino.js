import './cadastro.css';
import image from './Dumbbell exercise-rafiki.png'

function Treino (){
    return(
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
                    <label for="nome"> Nome do Treino </label>
                    <input type="text" id="nome" placeholder="Digite o nome do treino" required/>
                </div>

                <div class="input-group">
                    <label for="frequencia"> Frequência </label>
                    <input type="text" id="frequencia" placeholder="Digite a frequência do treino" required/>
                </div>

                <div class="input-group">
                    <label for="data"> Data de Início </label>
                    <input type="date" name="data" id="data"/>
                </div>

                <div class="input-group">
                        <label for="carga"> Carga </label>
                        <input type="text" id="carga" placeholder="Ex: 20kg" required/>
                    </div>

                <div class="input-group">
                        <label for="repeticoes"> Repetições </label>
                        <input type="text" id="repeticoes" placeholder="Ex: 4x15" required/>
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

export default Treino;