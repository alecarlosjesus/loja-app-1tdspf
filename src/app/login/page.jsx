
export default function Login() {

    
  return (
    <div>
        <h1>Identificação de Usuários</h1>
        <h2>-</h2>
        <div className="form-login">
            <form>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idEmail">Email</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu Email." value="" onChange=""/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua Senha." value="" onChange=""/>
                    </div>
                    <div>LOGIN</div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}
