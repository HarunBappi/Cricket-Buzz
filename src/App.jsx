import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Players from "./components/Players";
import SelectedPlayers from "./components/SelectedPlayers";
function App() {
  // Toggle Button state
  const [view, setView] = useState("available");
  const toggleButton = (type) => {
    setView(type);
  };
  // Cleaim Free Creadit State
  const [credit, setCredit] = useState(0);
  const handleAddCreadit = (money) => {
    const addCredit = credit + money;
    setCredit(addCredit);
  };
  // Handle Choose Player
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleSelectPlayer = (player) => {
    const choosePlayer = selectedPlayer.find(
      (p) => p.playerId === player.playerId
    );
    // Handle Player
    if (choosePlayer) {
      toast.error("alredy selected");
      return;
    }
    // Credit Validation and Credit minus
    if (credit < player.biddingPrice) {
      toast.warning("Credit is not enough");
      return;
    }
    // Maximum Player Selected
    if (selectedPlayer.length < 6) {
      setSelectedPlayer([...selectedPlayer, player]);
      setCredit(credit - player.biddingPrice);
      toast.success(`${player.name} added`);
    } else {
      toast.error("Maximum 6 Players added");
    }
  };
  // Remove for Selected Player
  const handleRemovePlayer = (playerId) => {
    const updatePlayer = selectedPlayer.filter((p) => p.playerId !== playerId);
    setSelectedPlayer(updatePlayer);
  };
  const handleAddMore = () => {
    setView("available");
  };
  return (
    <>
      <div className="w-5/6 mx-auto mt-6">
        <Header credit={credit}></Header>
        <Banner handleAddCreadit={handleAddCreadit}></Banner>
        {view === "available" ? (
          <Players
            view={view}
            credit={credit}
            handleSelectPlayer={handleSelectPlayer}
            toggleButton={toggleButton}
            selectedPlayer={selectedPlayer}
          />
        ) : (
          <SelectedPlayers
            view={view}
            toggleButton={toggleButton}
            selectedPlayer={selectedPlayer}
            handleRemovePlayer={handleRemovePlayer}
            handleAddMore={handleAddMore}
          />
        )}
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
