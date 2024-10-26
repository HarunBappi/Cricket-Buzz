export default function ToggoleButtons({view,toggleButton,selectedPlayer}) {
  return (
    <div className="flex justify-between items-center mt-12">
    <h1 className="text-2xl font-semibold">Available Players</h1>
<div className="flex gap-4 border rounded-lg p-2">
  <button
    className={view === "available" ? "btn bg-[#E7FE29]" : "btn"}
    onClick={() => toggleButton("available")}
  >
    {" "}
    Available
  </button>
  <button
    className={view === "selected" ? "btn bg-[#E7FE29]" : "btn"}
    onClick={() => toggleButton("selected")}
  >
    Selected ({selectedPlayer.length})
  </button>
</div>
</div>
  )
}
