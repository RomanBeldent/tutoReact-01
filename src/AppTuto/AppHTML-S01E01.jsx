const title = "BONGOUUUR les gens"
const style = { color: 'red', backgroundColor: 'blue' }
const showTitle = false
const todos = [
  'Présenter react',
  'Présenter le JSX',
  'Créer des composants'
]

function App() {

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   alert("J'ai cliqué sur le titre")
  // }

  return <>
    <Title color="green" id="monid" className="demo" data-demo="demo">Mon composant</Title>
    {/* {showTitle ?
      <h1 id="title" className="title" style={style}> {title} </h1> :
      <p>demo</p>} */}
    <input type="text" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      quibusdam nulla rem laudantium architecto facere quaerat dignissimos
      porro, repellendus aliquam soluta eligendi aperiam unde nisi ea quas
      voluptates perferendis qui? Suscipit libero ducimus molestias facilis
      architecto, est laudantium labore ullam ipsam ex autem, officia
      reprehenderit rem illo fugiat. Exercitationem, doloremque.
    </p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </>
}

function Title({ color, hidden, ...props }) {
  if (hidden) {
    return null
  }

  return <h1 style={{ color: color }} {...props} />
}

export default App;
