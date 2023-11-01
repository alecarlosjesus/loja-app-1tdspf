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