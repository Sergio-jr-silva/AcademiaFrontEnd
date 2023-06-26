import './treino.css'
import image from '../../images/Gym-rafiki.png'
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
function Treino (){
    const { state } = useLocation();

	const [idTreino, setIdTreino] = useState();
	const [nome, setNome] = useState();
	const [frequencia, setFrequencia] =  useState();
	const [dataInicio, setDataInicio] =  useState();
	const [exercicio, setExercicio] =  useState();


	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get("http://localhost:8082/exercicio" + state.id)
			.then((response) => {
				setIdTreino(response.data.id)
				setNome(response.data.nome)
				setFrequencia(response.data.frequencia)
				setDataInicio(response.data.dataInicio)
				setExercicio(response.data.exercicio)
				
			})
		}
		
	}, [state])

	function salvar() {

		let treino = {
			nome: nome,
			frequencia: frequencia,
			dataInicio: dataInicio,
			exercicio: exercicio
			
		}
    
        axios.post("http://localhost:8082/exercicio", treino)
			.then((response) => { console.log('Treino cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o treino.') })  
  
    }     
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
                    <input type="text" id="nome" placeholder="Digite o nome do treino" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required/>
                </div>

                <div class="input-treino">
                    <label for="frequencia"> Frequência </label>
                    <input type="text" id="frequencia" placeholder="Digite a frequência do treino" 
                    value={frequencia}
                    onChange={e => setFrequencia(e.target.value)}
                    required/>
                </div>

                <div class="input-treino">
                    <label for="data"> Data de Início </label>
                    <input type="date" name="data" id="data" 
                    value={dataInicio}
                    onChange={e => setDataInicio(e.target.value)}
                    />
                </div>

    
                    <div class="input-treino">
                    <label for="exercicio" style={{color: '#3D3D3D', fontWeight: 'bold', display: 'block', marginBottom: '10px'}}>Selecione os exercicios</label>
                        <select name="exercicio" id="plano" style={{backgroundColor: 'transparent', padding: '3px', borderRadius: '10px'}} 
                        value={exercicio}
                        onChange={(e,{value}) => {
                            exercicio(value)}}
                        >
                            <option value="#">Selecione</option>
                            <option value="voador">voador</option>
                            <option value="supino">supino</option>
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