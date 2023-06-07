import image from "./Personal Trainer-amico.png"
import './cadastro.css';

function Instrutor (){
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
                        <label for="salario"> Salário </label>
                        <input type="text" id="salario" placeholder="Digite o seu salário" required/>
                    </div>

                <div class="input-group">
                    <label for="data">Data de Admissão</label>
                    <input id="dataAdmissao" type="date" name="data" required/>
                </div>

                <div class="input-group">
                    <label for="email">E-mail</label>
                    <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                    </div>
    
                    <div class="input-group">
                        <label for="celular">Celular</label>
                        <input type="cel" id="celular" placeholder="(00) 0000-0000" required/>
                    </div>

                    <div class="input-option">
                        <label for="formacao" style={{color: '#3D3D3D', fontWeight: 'bold', display: 'block', marginBottom: '5px'}}>Selecione a Formação Academia</label>
                        <select name="formacao" id="formacao" style={{backgroundColor: 'transparent', padding: '3px', marginLeft: '10px', borderRadius: '10px'}}>
                            <option value="1">Ensino médio</option>
                            <option value="2">Ensino Técnico</option>
                            <option value="3">Ensino Superior</option>  
                        </select>
                    </div>

                <div class="input-chek" style={{margin: '15px'}}>
                    <legend> Possui Certificado? </legend>
                    <input type="radio" name='radio' id='sim' value={'Sim'}/><label for="sim" style={{paddingRight: '25px'}}>Sim</label>
                    <input type="radio" name='radio' id='nao' value={'Não'}/><label for="nao">Não</label>
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
    )
}

export default Instrutor;