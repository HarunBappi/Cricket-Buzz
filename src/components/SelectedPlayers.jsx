import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SelectedPlayers({
  selectedPlayer,
  handleRemovePlayer,
  handleAddMore,
}) {
  // Toast Message for Removing
  const toastMsg = (playerName) => {
    toast.success(`${playerName} is remove!`);
  };
  const handleRemove = (playerId, playerName) => {
    handleRemovePlayer(playerId);
    toastMsg(playerName);
  };
  return (
    <div>
      <div className="mt-12">
        <h1 className="text-2xl font-semibold">
          Selected Players ({selectedPlayer.length}/6)
        </h1>
        <div className="mt-4">
          {selectedPlayer.map((player) => (
            <div key={player.playerId} className="border rounded-md p-3 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img
                    className="w-28 h-20 rounded-lg"
                    src={player.image}
                    alt={player.name}
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-semibold">{player.name}</h1>
                    <p className="text-sm text-gray-400">{player.role}</p>
                    <p className="text-sm text-gray-400">Price: ${player.biddingPrice}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleRemove(player.playerId, player.name)}
                    className="border p-2 rounded-md text-red-600 font-semibold"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
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
