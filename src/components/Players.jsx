import { useEffect, useState } from "react"
import Player from "./Player"

export default function Players({handleActiveBtn, active,handeChoosePlayer}) {
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=> res.json())
        .then(data=> setPlayers(data))
    })
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-2xl font-semibold">Available Players
           </h1>
        </div>
        <div className="flex gap-4 border rounded-lg p-2">
            <button className={`${active.available?"btn bg-yellow-500":"btn"}`} onClick={()=>handleActiveBtn("available")}>Available</button>
            <button className={`${active.selected?"btn bg-yellow-500":"btn"}`} onClick={()=>handleActiveBtn("selected")}>Selected(0)</button>
        </div>
      </div>
      {/* Show data in player Component */}
<div  className="grid grid-cols-3 gap-6">
{
players.map(player=> <Player 
    key={player.playerId}
     player={player}
     handeChoosePlayer={handeChoosePlayer}
     ></Player>)
      }
</div>
    </div>
  )
}
