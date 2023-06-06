/*import image from './homem-fazendo-exercicios-com-halteres-treinando-em-casa-com-equipamentos-esportivos-esporte-e-construcao-muscular-pessoa-esportiva-fazendo-treino-de-braco-no-ginasio-treinador-realiza-.avif';*/
import './cadastro.css';
import image from './Dumbbell exercise-rafiki.png'

    function Cadastro (){
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
                    <label for="nome"> Primeiro Nome </label>
                    <input type="text" id="nome" placeholder="Digite o seu primeiro nome" required/>
                </div>

                <div class="input-group">
                    <label for="sobrenome"> Sobrenome </label>
                    <input type="text" id="sobrenome" placeholder="Digite o seu Sobrenome" required/>
                </div>

                <div class="input-group">
                    <label for="data"> Data de Nascimento </label>
                    <input type="date" name="data" id="data"/>
                </div>

                <div class="input-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" placeholder="Digite o seu email" required/>
                    </div>
    
                    <div class="input-group">
                        <label for="celular">Celular</label>
                        <input type="cel" id="celular" placeholder="(00) 0000-0000" required/>
                    </div>

                    <div class="input-group">
                        <label for="altura"> Altura </label>
                        <input type="text" id="altura" placeholder="Digite sua altura" required/>
                    </div>

                    <div class="input-group">
                        <label for="peso"> Peso </label>
                        <input type="text" id="peso" placeholder="Digite o seu peso" required/>
                    </div>

                <div class="input-group w50">
                    <label for="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite sua senha" required/>
                </div>

                <div class="input-group w50">
                    <label for="Confirmarsenha">Confirmar Senha</label>
                    <input type="password" id="Confirmarsenha" placeholder="Confirme a senha" required/>
                </div>

                <div class="input-group">
                    <button>Cadastrar</button>
                </div>

            </form>
        </div>
    </div>
            </>
  );
}

export default Cadastro;