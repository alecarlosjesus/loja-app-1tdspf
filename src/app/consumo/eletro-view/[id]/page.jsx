import Image from "next/image";
import { redirect } from "next/navigation";

export default async function EletroViewID({params}) {

        let item;

        try {
            const response = await fetch(`http://localhost:3000/api/eletronicos/${params.id}`);
            item = await response.json();
            console.log(item);
        } catch (error) {
            console.log(error);
            redirect('/error');
        }

  return (
    <div className="eletro-view">
        <h1>Consumo de Eletrodomésticos</h1>
        <div>
            <ul>
                {
                        <li key={item.id}>
                            <h2>{item.nome}</h2>
                            <figure>
                                <Image src={item.img} alt={item.desc} width={300} height={300} />
                                <figcaption>{item.desc} - <span>R$ {item.preco}</span></figcaption>
                            </figure>
                        </li>
                 }
            </ul>
        </div>
    </div>
  )
}
