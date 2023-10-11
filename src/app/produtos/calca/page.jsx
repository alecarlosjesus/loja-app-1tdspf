import Image from "next/image";
import Link from "next/link";

export default function Calca() {
  return (
    <div>
        <h1>CALÇA</h1>
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dignissimos perspiciatis, quaerat eveniet id sequi voluptatum odio rem? Laboriosam, labore officiis itaque suscipit cum soluta exercitationem architecto provident. Reiciendis, neque?</p>
            <p><Link href="/">Voltar...</Link></p>
            <figure>
          <Image src="/img/pants-335×640_1280.png" alt="Placa escura" width={335} height={640}/>
        </figure>
        </div>
    </div>
  )
}
