import './exercicio.css'
import image from '../../images/Personalized workouts-bro.png'
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Exercicio(){
    const { state } = useLocation();

	const [idExercicio, setIdExercicio] = useState();
	const [nome, setNome] = useState();
	const [repeticoes, setRepeticoes] =  useState();
	const [serie, setSerie] =  useState();
	const [carga, setCarga] =  useState();


	useEffect(() => {

		if (state != null && state.id != null) {
			
			axios.get("http://localhost:8082/exercicio" + state.id)
			.then((response) => {
				setIdExercicio(response.data.id)
				setNome(response.data.nome)
				setRepeticoes(response.data.repeticoes)
				setSerie(response.data.serie)
				setCarga(response.data.carga)
				
			})
		}
		
	}, [state])

	function salvar() {

		let exercicio = {
			nome: nome,
			repeticoes: repeticoes,
			serie: serie,
			carga: carga
			
		}
    
        axios.post("http://localhost:8082/exercicio", exercicio)
			.then((response) => { console.log('exercicio cadastrado com sucesso.') })
			.catch((error) => { console.log('Erro ao incluir o exercicio.') })  
  
    }     
    return (
        <>
            <div class="box">
        <div class="img-box">
            <img src={image}/>
        </div>
        <div class="form-box">
            <h2>Criar Exercício</h2>

            <form action="#">
            <div class="input-exercicio">
                        <label for="nome"> Nome do Exercicio </label>
                        <input type="text" id="nome" placeholder="Ex: Supino" 
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required/>
                    </div>

                <div class="input-exercicio">
                        <label for="repeticoes"> Repetições </label>
                        <input type="text" id="repeticoes" placeholder="Ex: 15" 
                        value={repeticoes}
                        onChange={e => setRepeticoes(e.target.value)}
                        required/>
                    </div>

                <div class="input-exercicio">
                    <label for="serie"> Número de Série </label>
                    <input type="text" id="serie" placeholder="Ex: 3x" 
                    value={serie}
                    onChange={e => setSerie(e.target.value)}
                    required/>
                </div>

                <div class="input-exercicio">
                    <label for="carga">Carga</label>
                    <input id="carga" type="text" name="carga" placeholder="Ex: 5kg" 
                    value={carga}
                    onChange={e => setCarga(e.target.value)}
                    required/>
                </div>

                <div class="input-exercicio">
                    <button onClick={() => salvar()}>Cadastrar</button>
                </div>

            </form>
        </div>
    </div>
        </>
    )
}

export default Exercicio