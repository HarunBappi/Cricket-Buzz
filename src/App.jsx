import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import Players from "./components/Players"
function App() {
const [active, setActive] = useState({
  available: true,
  status: "available"
})
const handleActiveBtn = (status) =>{
  if(status === "available"){
    setActive({
  available: true,
  status: "available"
})
  }else{
    setActive({
       selected: true,
      status: "selected" 
    })
  }
}
console.log(active)
  return (
    <>
    <div className="w-5/6 mx-auto mt-6">
      <Header></Header>
      <Banner></Banner>
      <Players active={active} handleActiveBtn={handleActiveBtn}></Players>
    </div>
    </>
  )
}

export default App
