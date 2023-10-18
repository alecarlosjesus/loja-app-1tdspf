const data = await NextRequest.formData();
    // const data = await req.formData();
    const file = data.get("file");

    if(!file){
        return res.json();
    }

    const bytes = await  file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    //Gerando a resposta do upload e visualizando o resultado.
    const path = join("/", "tmp", file.name);
    await writeFile(path,buffer);
    console.log(`Open ${path} para ver o arquivo carregado!`);

    return res.json({success: true});
