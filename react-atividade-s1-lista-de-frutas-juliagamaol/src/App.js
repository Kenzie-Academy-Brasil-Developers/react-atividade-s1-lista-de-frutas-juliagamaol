import './App.css';
import {useState} from 'react'
function App() {
  const [fruits, setFruit] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 }
  ])
  
  const filterRedFruits = () =>{
      let result = fruits.filter((fruit)=>{
          return fruit.color === 'red'
      })
      setFruit(result)
    }
  return (
    <div className="App">
      <header className="App-header">
          <h1>Preço total = {fruits.reduce((acc,atual)=>acc+atual.price,0)}</h1>
          <ul>
            {fruits.map((fruit)=>(
                <li>{fruit.name}</li>
            ))}
          </ul>
          <button onClick={filterRedFruits}>Mostrar frutas vermelhas</button>
      </header>
    </div>
  );
}

export default App;
