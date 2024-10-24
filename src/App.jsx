import Banner from "./components/Banner"
import Header from "./components/Header"
import Players from "./components/Players"
function App() {
// const [credit, setCredit] = useState([])

// const handleAddCredit = ()=>{

// }
  return (
    <>
    <div className="w-5/6 mx-auto mt-6">
      <Header></Header>
      <Banner></Banner>
      <Players></Players>
    </div>
    </>
  )
}

export default App
