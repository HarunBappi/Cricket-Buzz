import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";
function App() {
  const [view, setView] = useState("available");
  // Toggle Button
const toggleButton = (type) => {
  setView(type);
};
// Cleaim Free Creadit State
const [credit, setCredit] = useState(0)
const handleAddCreadit = (money) =>{
  const addCredit = credit + money
  setCredit(addCredit)
}
  return (
    <>
    <div className="w-5/6 mx-auto mt-6">
      <Header credit={credit}

      ></Header>
      <Banner handleAddCreadit={handleAddCreadit}></Banner>
      <Players 
        view = {view}
        toggleButton={toggleButton}
        credit={credit}
        setCredit={setCredit}
        toast={toast}
      ></Players>
    </div>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
