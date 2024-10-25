export default function SelectedPlayers({
  selectedPlayer,
  handleRemovePlayer,
  handleAddMore
}) {
  return (
    <div>
      <div className="mt-12">
        <h1 className="text-2xl font-semibold">
          Selected Players ({selectedPlayer.length}/6)
        </h1>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {selectedPlayer.map((player) => (
            <div key={player.playerId} className="border rounded-md p-3">
              <img
                className="h-60 w-full rounded-lg"
                src={player.image}
                alt={player.name}
              />
              <h1 className="text-xl font-semibold">{player.name}</h1>
              <div className="bg-gray-200 px-4 py-2 rounded-xl font-semibold mb-4">
                {player.role}
              </div>
              <button
                onClick={() => handleRemovePlayer(player.playerId)}
                className="border p-2 rounded-md text-red-600 font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddMore}
          className="mt-4 btn bg-blue-500 text-white"
        >
          Add More Players
        </button>
      </div>
    </div>
  );
}
