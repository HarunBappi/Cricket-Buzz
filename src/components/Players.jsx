import { useEffect, useState } from "react";
import Player from "./Player";

export default function Players({toast,setCredit,credit,view,toggleButton,}) {
    const [players, setPlayers] = useState([])
    const [selectedPlayer, setSelectedPlayer] = useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=> res.json())
        .then(data=> setPlayers(data))
    })
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <div>
        { 
        view === "available" ? 
        (<h1 className="text-2xl font-semibold">Available Players</h1>) : (<h1 className="text-2xl font-semibold">
            Selected Players ({selectedPlayer.length}/6)</h1>)
        }
        </div>
        <div className="flex gap-4 border rounded-lg p-2">
        <button className={`${view === "available" ? "btn bg-[#E7FE29]" : "btn"}`} onClick={() => toggleButton("available")} > Available</button>
        <button className={`${view === "selected" ? "btn bg-[#E7FE29]" : "btn"}`} onClick={() => toggleButton("selected")}>
         Selected ({selectedPlayer.length})</button> 
        </div>   
      </div>
     
      {/* Show data in player Component */}
<div  className="grid grid-cols-3 gap-6">
{
 players.map(player => 
<Player key ={player.playerId}
     player={player}
     credit={credit}
     toast={toast}
     setCredit={setCredit}
     selectedPlayer={selectedPlayer}
     setSelectedPlayer={setSelectedPlayer}
     ></Player>
    )
      }
</div>
    </div>
  )
}
