"use client";
import { useState } from "react";

export default function Login() {
    
    const [usuario, setUsuario] = useState({
        "email" : "",
        "senha" : ""
    })
      
    const handleChange = async (e)=>{
        
        const {name, value} = e.target;

        setUsuario({...usuario,[name]:value});
    };


    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/base/base-users",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:  JSON.stringify(usuario)
            });

            if(response.ok){
                const status = await response.json();
                if(status.status){
                    alert("Login realizado com SUCESSO!!");
                }else{
                    alert("Email ou Senha incorretos!!!");
                    setUsuario({
                        "email":"",
                        "senha":""
                    });
                }
            }
            
        } catch (error) {
            console.log(error);
        }
        
    };
    

  return (
    <div>
        <h1>Identificação de Usuários</h1>
        <h2>-</h2>
        <div className="form-login">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idEmail">Email</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu Email." value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua Senha." value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>LOGIN</button> 
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}
