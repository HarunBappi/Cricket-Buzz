import { useEffect, useState } from "react"

export default function Players() {
    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=> res.json())
        .then(data=> console.log(data))
    })
  return (
    <div className="mt-12">
      <h1 className="text-2xl font-semibold">Available Players</h1>
    </div>
  )
}
