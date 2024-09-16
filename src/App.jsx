import "./App.css"
import Card from "./components/Card"
import data from "./assets/data.json"

function App() {
  return(
    <div className="container">
      {
        data.length && data.map(function(elemnt, index){
          return <Card key = {index} data = {elemnt}></Card>
        })
      }
    </div>
  )
}

export default App