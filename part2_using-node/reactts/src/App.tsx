import "./App.css"
import { ChaiCard } from "./components/ChaiCard.tsx";
import { Counter } from "./components/Counter.tsx";
import ChaiList from "./components/ChaiList.tsx"

import type {Chai} from "./types.ts"
import { OrderForm } from "./components/OrderForm.tsx";
import { Card } from "./components/Card.tsx";

const menu : Chai[] = [
  {id: 1, name: "Masala", price: 30},
  {id: 2, name: "Ginger", price: 50},
  {id: 3, name: "Lemon", price: 60},
]

const App = () => {
  return (
    <>
    <div>
      <h1> Vite + React</h1>
      <ChaiCard name="Headphones" price= {4000 }/>
      <ChaiCard name="Monitor" price= {10000 }/>
    </div>
    <div>
      <Counter />
    </div>
    <div>
      <ChaiList items={menu}/>
    </div>
    <div>
      <OrderForm 
      onSubmit={(order) => {
        console.log("Placed:", order.name, order.cups);
      }}
      />
    </div>
    <div>
      <Card 
      title="Typescript Card"
      footer = {<button>Order Now</button>}
      />

    </div>
    </>
  )
}

export default App;