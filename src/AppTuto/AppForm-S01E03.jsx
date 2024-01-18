import { useState } from "react"

function App() {

  const [value, setValue] = useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const [checked, setChecked] = useState(true)
  const toggleCheck = () => {
    setChecked(!checked)
  }

  return <form>
    <textarea value={value} onChange={handleChange}></textarea>
    <input type="checkbox" checked={checked} onChange={toggleCheck} />
    <button disabled={!checked}>Envoyer</button>
  </form>

  // const [firstname, setFirstname] = useState('John doe')

  // const handleChange = (e) => {
  //   setFirstname(e.target.value)
  // }

  // const reset = () => {
  //   setFirstname('')
  // }

  // console.log('render')

  // return <form>
  //   <input type="text" name="firstname" value={firstname}
  //     onChange={handleChange} />
  //   <button onClick={reset} type="button">Reset</button>
  //   {firstname}
  // </form>

}

export default App;
