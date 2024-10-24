export default function Player({player}) {
    const {name, image,country,role,battingType,bowlingType,biddingPrice} = player
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
                    <button className="border p-2 rounded-md">Choose Player</button>
                </div>
            </div>
        </div>
    </div>
  )
}
