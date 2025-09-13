import Reac,{useState} from 'react'
import './App.css'
import Card from './Components/Card'
import Counter from './Components/Counter'
function App() {
  
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
    <div>

      <Counter increaseCount = {handleClick} text={count} />

      <Card name="Ranjit">
        <h1>This is Children Heading</h1>
        <p>This is Children description</p>
      </Card>
    </div>
  )
}

export default App
