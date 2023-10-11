import Image from "next/image";
import Link from "next/link";

export default function Tenis() {
  return (
    <div>
        <h1>TÊNIS</h1>
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dignissimos perspiciatis, quaerat eveniet id sequi voluptatum odio rem? Laboriosam, labore officiis itaque suscipit cum soluta exercitationem architecto provident. Reiciendis, neque?</p>
            <p><Link href="/">Voltar...</Link></p>
            <figure>
          <Image src="/img/shoes-153310_640.png" alt="Tênis" width={640} height={360}/>
        </figure>
        </div>
    </div>
  )
}
