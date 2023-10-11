import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>
        <h2>MEUS PRODUTOS</h2>
        <ul>
          <li><Link href="/produtos/calca">CALÇA</Link></li>
          <li><Link href="/produtos/camisa">CAMISA</Link></li>
          <li><Link href="/produtos/meia">MEIA</Link></li>
          <li><Link href="/produtos/tenis">TÊNIS</Link></li>
        </ul>

        <figure>
          <Image src="/img/black-640×360_1280.png" alt="Placa escura" width={640} height={360}/>
        </figure>

      </div>

    </>
    )
}
