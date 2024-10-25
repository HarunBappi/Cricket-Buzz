import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Players from "./components/Players"
function App() {
  // Available and Selected state
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
// Cleaim Free Creadit State
const [credit, setCredit] = useState(0)

const handleAddCreadit = (money) =>{
  const addCredit = credit + money
  setCredit(addCredit)
}
// Choose Player State
const [choosePlayer, SetChoosePlayer] = useState([])

const handeChoosePlayer = (player,price) =>{
  const remainbalance = credit - price
 SetChoosePlayer(remainbalance)
}
  return (
    <>
    <div className="w-5/6 mx-auto mt-6">
      <Header credit={credit}></Header>
      <Banner handleAddCreadit={handleAddCreadit}></Banner>
      <Players 
      active={active} 
      handleActiveBtn={handleActiveBtn}
      handeChoosePlayer={handeChoosePlayer}
      ></Players>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
