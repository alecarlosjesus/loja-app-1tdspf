import { NextResponse } from "next/server";

const eletros = [
    {"id":1,"nome":"Phone de Ouvido","desc":"Phone de Ouvido","preco":100.00,"img":"https://img.freepik.com/fotos-gratis/fone-de-ouvido-preto-dispositivo-digital_53876-97302.jpg"},
    {"id":2,"nome":"Teclado","desc":"Teclado","preco":200.00,"img":"https://img.freepik.com/fotos-gratis/teclado-de-computador_53876-97303.jpg"},
    {"id":3,"nome":"Mouse","desc":"Mouse","preco":50.00,"img":"https://img.freepik.com/fotos-gratis/mouse-de-computador_53876-97304.jpg"},
    {"id":4,"nome":"Monitor","desc":"Monitor","preco":500.00,"img":"https://img.freepik.com/fotos-gratis/monitor-de-computador_53876-97305.jpg"},
    {"id":5,"nome":"Notebook","desc":"Notebook","preco":2000.00,"img":"https://img.freepik.com/fotos-gratis/notebook-de-computador_53876-97306.jpg"},
    {"id":6,"nome":"Impressora","desc":"Impressora","preco":1000.00,"img":"https://img.freepik.com/fotos-gratis/impressora-de-computador_53876-97307.jpg"},
    {"id":7,"nome":"Câmera","desc":"Câmera","preco":1500.00,"img":"https://img.freepik.com/fotos-gratis/camera-de-computador_53876-97308.jpg"},
    {"id":8,"nome":"Caixa de Som","desc":"Caixa de Som","preco":300.00,"img":"https://img.freepik.com/fotos-gratis/caixa-de-som-de-computador_53876-97309.jpg"},
    {"id":9,"nome":"Roteador","desc":"Roteador","preco":200.00,"img":"https://img.freepik.com/fotos-gratis/roteador-de-computador_53876-97310.jpg"},
    {"id":10,"nome":"Pen Drive","desc":"Pen Drive","preco":50.00,"img":"https://img.freepik.com/fotos-gratis/pen-drive-de-computador_53876-97311.jpg"},
    {"id":11,"nome":"HD Externo","desc":"HD Externo","preco":500.00,"img":"https://img.freepik.com/fotos-gratis/hd-externo-de-computador_53876-97312.jpg"},
    {"id":12,"nome":"Webcam","desc":"Webcam","preco":100.00,"img":"https://img.freepik.com/fotos-gratis/webcam-de-computador_53876-97313.jpg"},
    {"id":13,"nome":"Tablet","desc":"Tablet","preco":1000.00,"img":"https://img.freepik.com/fotos-gratis/tablet-de-computador_53876-97314.jpg"}
];

export async function GET(request,{params}) {
    //GET BY ID
    const id = params.id;
    if (id > 0 && id <= eletros.length) {
        const eletro = eletros.find((item) => item.id == id);
        return NextResponse.json(eletro);
    }else{
        return (id == 0 ? NextResponse.json(eletros) : NextResponse.redirect('http://localhost:3000/error'));
    }

    
}
