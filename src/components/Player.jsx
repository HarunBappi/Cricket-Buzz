export default function Player({player}) {
    const {name, image} = player
  return (
    <div className="border rounded-md p-3 mt-4">
        <img className="h-60 w-full rounded-lg" src={image} alt="" />
        <div className="flex items-center gap-2 mt-2">
        <i className="fa-solid fa-user"></i> 
        <h1 className="text-xl font-semibold">{name}</h1>
        </div>
    </div>
  )
}
