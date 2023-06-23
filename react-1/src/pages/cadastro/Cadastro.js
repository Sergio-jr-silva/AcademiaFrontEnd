import './cadastro.css';
import image from '../../images/Dumbbell exercise-rafiki.png'

    function Cadastro (){
        return (
            <>
        <div class="box-aluno">
        <div class="img-box">
            <img src={image}/>
        </div>
        <div class="form-cadastro">
            
            <form action="#">
            <h2>Criar Conta</h2>
                <div class="input-cadastro">
                    <label for="nome">Nome completo </label>
                    <input type="text" id="nome" placeholder="Digite o seu nome Completo" required/>
                </div>

                <div class="input-cadastro">
                    <label for="data"> Data de Nascimento </label>
                    <input type="date" name="data" id="data"/>
                </div>

                <div class="input-cadastro">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" placeholder="Digite o seu email" required/>
                    </div>
    
                    <div class="input-cadastro">
                        <label for="celular">Celular</label>
                        <input type="cel" id="celular" placeholder="(00) 0000-0000" required/>
                    </div>

                    <div class="input-cadastro w50">
                    <label for="senha">peso</label>
                    <input type="text" id="senha" placeholder="Digite seu peso" required/>
                </div>

                <div class="input-cadastro w50">
                    <label for="Confirmarsenha">altura</label>
                    <input type="text" id="Confirmarsenha" placeholder="digite sua altura em cm" required/>
                </div>


                <div class="input-option" id="select">
                        <label for="plano" style={{color: '#3D3D3D', fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Selecione seu plano</label>
                        <select name="plano" id="plano" style={{backgroundColor: 'transparent', padding: '3px', marginLeft: '10px', borderRadius: '10px'}}>
                            <option value="1">Basic</option>
                            <option value="2"> Medium</option>
                            <option value="3"> Premium</option>  
                        </select>

                        <label for="plano" style={{color: '#3D3D3D', fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Forma de Pagamento</label>
                        <select name="plano" id="plano" style={{backgroundColor: 'transparent', padding: '3px', marginLeft: '10px', borderRadius: '10px'}}>
                            <option value="1">Boleto</option>
                            <option value="2"> pix</option>
                        </select>
                    </div>

                <div class="input-cadastro w50">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite sua senha" required/>
                </div>

                <div class="input-cadastro w50">
                    <label for="Confirmarsenha">Confirmar Senha</label>
                    <input type="password" id="Confirmarsenha" placeholder="Confirme a senha" required/>
                </div>
                <p> Já tem uma conta? <a href="/login"> Login </a> </p>
                <div class="input-cadastro">
                    <button id='btn'>Matricular-se</button>
                </div>

            </form>
        </div>
    </div>
            </>
  );
}

export default Cadastro;