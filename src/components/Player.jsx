export default function Player({player,selectedPlayer,credit,setCredit,toast,setSelectedPlayer}) {
    const {name, image,country,role,battingType,bowlingType,biddingPrice,playerId} = player
// Copy 
const handleSelectPlayer = () => {
    const choosePlayer = selectedPlayer.find(p=> p.playerId === playerId)
    // Handle Player 
    if(choosePlayer){
        toast.error("alredy selected");
        return
    }
    // Credit Validation and Credit minus
    if (credit < biddingPrice) {
        toast.warning("Credit is not enough");
      return;
    }
    // Maximum Player Selected 
    if (selectedPlayer.length < 6) {
        setSelectedPlayer([...selectedPlayer, player]);
        setCredit(credit - biddingPrice);
        toast.success(`${name} added`);
    } else {
        toast.error("Maximum 6 Players added");
    }
  };

  return (
    <div className="border rounded-md p-3 mt-4">
        <img className="h-60 w-full rounded-lg" src={image} alt="" />
        <div className="flex items-center gap-2 mt-2">
        <i className="fa-solid fa-user"></i> 
        <h1 className="text-xl font-semibold">{name}</h1>
        </div>
        {/* country & Role */}
        <div className="flex justify-between items-center border-b border-gray-300">
        <div className="flex gap-3 text-gray-400 items-center">
        <i className="fa-solid fa-flag"></i>
        {country}
        </div>
        <div className="bg-gray-200 px-4 py-2 rounded-xl font-semibold mb-4">
            {role}
        </div>
        </div>
        {/* Rating */}
        <div className="mt-4">
            <h1 className="text-xl font-semibold">Rating</h1>
            <div className="flex justify-between items-center mt-4">
                <div className="text-sm font-semibold">
                    {battingType}
                </div>
                <div className="text-gray-400 text-sm font-semibold">
                    {bowlingType}
                </div>
            </div>
            <div className="flex items-center justify-between mt-3">
                <div className="text-sm font-semibold">
                    <p>Price: ${biddingPrice}</p>
                </div>
                <div>
                    <button onClick={handleSelectPlayer} className="border p-2 rounded-md text-slate-700 font-semibold">Choose Player</button>
                </div>
            </div>
        </div>
    </div>
  )
}
