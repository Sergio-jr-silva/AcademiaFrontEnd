import './treino.css'
import image from '../../images/Gym-rafiki.png'

function Treino (){
    return(
        <>
            <div class="box">
        <div class="img-box">
            <img src={image}/>
        </div>
        <div class="form-box">
            <h2>Criar Treino</h2>
            
            <form action="#">
                <div class="input-treino">
                    <label for="nome"> Nome do Treino </label>
                    <input type="text" id="nome" placeholder="Digite o nome do treino" required/>
                </div>

                <div class="input-treino">
                    <label for="frequencia"> Frequência </label>
                    <input type="text" id="frequencia" placeholder="Digite a frequência do treino" required/>
                </div>

                <div class="input-treino">
                    <label for="data"> Data de Início </label>
                    <input type="date" name="data" id="data"/>
                </div>

                <div class="input-treino">
                        <label for="carga"> Carga </label>
                        <input type="text" id="carga" placeholder="Ex: 20kg" required/>
                    </div>

                    <div class="input-treino">
                    <select className='input-treino'>
                        <options>Voador</options>
                        <options>Supino</options>
                        <options>Halteres</options>
                    </select>
                       
                    </div>

                <div class="input-treino">
                        <label for="repeticoes"> Repetições </label>
                        <input type="text" id="repeticoes" placeholder="Ex: 4x15" required/>
                    </div>

                <div class="input-treino">
                    <button>Cadastrar</button>
                </div>

            </form>
        </div>
    </div>
        </>
    )
}

export default Treino;