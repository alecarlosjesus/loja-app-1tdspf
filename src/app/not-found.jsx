import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-red-500 font-extrabold fixed w-full h-full">
        <h1 className="text-center">OOPS! 404!</h1>
        <div>
          <figure>
            <Image  className="block m-auto w-80" src="https://http.cat/images/404.jpg" alt="Gato no jornal" width={750} height={600} />
          </figure>
        </div>
        <p className="text-center">Página não encontrada!</p>

    </div>
  )
}
