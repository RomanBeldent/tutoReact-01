import { useState } from "react";
import { useIncrement } from "./hooks/useIncrement";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { Input } from "./components/forms/Input";
import { useFetch } from "./hooks/useFetch";

function App() {

  // const { count, decrement, increment } = useIncrement({
  //   base: 0,
  //   max: 10,
  //   min: 0
  // })

  // const [name, setName] = useState('')

  // useDocumentTitle(name ? `Editer ${name}` : null)

  // return <div>
  //   <Input value={name} onChange={setName} label="Nom" />
  //   Compteur {count}
  //   <button onClick={increment}>Incrémenter</button>
  //   <button onClick={decrement}>Décrémenter</button>
  // </div>

  const { loading, data, errors } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')

  return <div>
    {loading && <div>Chargement...</div>}
    {errors && <div>{errors.toString()}</div>}
    {data && <div>
      <ul>
        {data.map(post => (<li key={post.id}>{post.title}</li>))}
      </ul>
    </div>}
  </div>
}

export default App;