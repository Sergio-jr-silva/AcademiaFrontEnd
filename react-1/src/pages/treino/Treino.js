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
                    <label for="exercicio" style={{color: '#3D3D3D', fontWeight: 'bold', display: 'block', marginBottom: '10px'}}>Selecione os exercicios</label>
                        <select name="exercicio" id="plano" style={{backgroundColor: 'transparent', padding: '3px', borderRadius: '10px'}}>
                            <option value="#">Selecione</option>
                            <option value="1">voador</option>
                            <option value="2">supino</option>
                       </select>
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