import Image from "next/image";

export default async function GitUsers() {

    let users;
    try{
        const response = await fetch("http://localhost:3000/api/git-users");
        users = await response.json();
    }catch(error){
        console.log(error);
    }

  return (
    <div>
        <h1>Usuários do GITHUB</h1>
        <div>
            <ul>
                {
                    users.map((user)=>(
                        <li key={user.id}>
                            <figure>
                                <Image
                                src={user.avatar_url}
                                alt={user.login}
                                width={100}
                                height={100}
                                />
                                <figcaption>{user.login}</figcaption>
                            </figure>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}
