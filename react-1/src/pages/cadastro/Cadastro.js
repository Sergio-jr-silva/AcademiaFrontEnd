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
                    <label for="nome"> Primeiro Nome </label>
                    <input type="text" id="nome" placeholder="Digite o seu primeiro nome" required/>
                </div>

                <div class="input-cadastro">
                    <label for="sobrenome"> Sobrenome </label>
                    <input type="text" id="sobrenome" placeholder="Digite o seu Sobrenome" required/>
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

                    <div class="input-cadastro">
                        <label for="altura"> Altura </label>
                        <input type="text" id="altura" placeholder="Digite sua altura" required/>
                    </div>

                    <div class="input-cadastro">
                        <label for="peso"> Peso </label>
                        <input type="text" id="peso" placeholder="Digite o seu peso" required/>
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