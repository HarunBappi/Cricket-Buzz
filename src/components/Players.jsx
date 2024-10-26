import { useEffect, useState } from "react";
import Player from "./Player";

export default function Players({
  toast,
  setCredit,
  credit,
  handleSelectPlayer,
  selectedPlayer,
  setSelectedPlayer,
}) {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  });
  return (
    <div className="mt-12">
      {/* Show data in player Component */}
      <div className="grid grid-cols-3 gap-6">
        {players.map((player) => (
          <Player
            key={player.playerId}
            player={player}
            credit={credit}
            toast={toast}
            setCredit={setCredit}
            handleSelectPlayer={handleSelectPlayer}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
          ></Player>
        ))}
      </div>
    </div>
  );
}
