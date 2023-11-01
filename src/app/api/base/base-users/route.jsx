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

export async function POST(request, response){
        //Criando uma chamada para acessar o arquivo JSON que foi criado!!!
        const file =  await fs.readFile(process.cwd() + "/src/app/api/base/db.json","utf8");

        //Recuperando a lista de usuários do arquivo JSON, realizando um
        //parse de arquivo para JSON.
        const lista = await JSON.parse(file);
    
        //Recebendo o request enviado como POST:
        const userReq = await request.json();

        try {
            for (let x = 0; x < lista.usuarios.length; x++) {
                const userLista = lista.usuarios[x];
                //Realizando a validação do usuário:
                if(userLista.email == userReq.email && userLista.senha == userReq.senha){
                    //Retornando o status do request!
                    return NextResponse.json({"status":true});
                }
            }
        } catch (error) {
            console.error(error);
        }

        return NextResponse.json({"status":false});
}