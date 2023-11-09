import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request,{params}){
    //Criando uma chamada para acessar o arquivo JSON que foi criado!!!
    const file =  await fs.readFile(process.cwd() + "/src/app/api/base/db.json","utf8");

    //Recuperando a lista de usuários do arquivo JSON, realizando um
    //parse de arquivo para JSON.
    const lista = await JSON.parse(file);
    
    //Retornando a lista de usuários para quem chamou o end-point.
    return NextResponse.json(lista);

}


const handleLogin = async (email,senha)=>{
    //Criando uma chamada para acessar e ler o arquivo JSON que foi criado!!!
    const file =  await fs.readFile(process.cwd() + "/src/app/api/base/db.json","utf8");

    //Recuperando a lista de usuários do arquivo JSON, realizando um
    //parse de arquivo para JSON para tornar o arquivo um objeto manipulável.
    const dados = await JSON.parse(file);
 
    //Realizando a validação do usuário através dos parâmetros recebidos:{email,senha}, onde vamos percorrer a lista de  e verificar se o usuário existe.

    try {
        // for (let x = 0; x < lista.usuarios.length; x++) {
        //     const userLista = lista.usuarios[x];
        //     //Realizando a validação do usuário:
        //     if(userLista.email == email && userLista.senha == senha){
        //         //Retornando o status do request!
        //         return true;
        //     }
        // }
        const user = dados.usuarios.find((user)=>user.email == email && user.senha == senha);
        
        //Retornando o objeto do usuário encontrado, mesmo que seja null.
        return user;
    } catch (error) {
        console.error(error);
    }
}

//Criando a função POST para realizar o cadastramento de usuários:
const handleCadastro = async (nome,email,senha)=>{
    //Criando uma chamada para acessar e ler o arquivo JSON que foi criado!!!
    const file =  await fs.readFile(process.cwd() + "/src/app/api/base/db.json","utf8");

    //Recuperando a lista de usuários do arquivo JSON, realizando um
    //parse de arquivo para JSON para tornar o arquivo um objeto manipulável.
    const lista = await JSON.parse(file);
 
    //Gerar um id para o novo usuário:
    const id = lista.usuarios[lista.usuarios.length-1].id + 1;

    //Criando o objeto do novo usuário:
    const novoUsuario = {id,nome,email,senha};

    //Adicionando o novo usuário na lista de usuários:
    lista.usuarios.push(novoUsuario);

    //Salvando a lista de usuários no arquivo JSON:
    await fs.writeFile(process.cwd() + "/src/app/api/base/db.json",JSON.stringify(lista));

    //Retornando o status do request!
    return novoUsuario;

}

export async function POST(request, response){
        
        //Recuperando os dados da requisição:
        //Realizando a desestruturação do objeto request.json() para recuperar os dados do request.
        const {info,nome,email,senha} = await request.json();

        //Determinando o status da operação:
        switch (info) {
            case "login":
                //Realizando a chamada da função de login:
                const user = await handleLogin(email,senha);
                if(user){
                    //Retornando o status do request!
                    return NextResponse.json({"status":true,"user":user});
                }
            case "cadastro":
                //Realizando a chamada da função de cadastro:
                const novoUsuario = await handleCadastro(nome,email,senha);
                if(novoUsuario){
                    //Retornando o status do request!
                    return NextResponse.json({"status":true,"user":novoUsuario});
                }
            default:
                return NextResponse.json({status:false});
        }

}