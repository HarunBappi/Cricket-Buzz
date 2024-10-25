import bannerMain from '../assets/banner-main.png'
export default function Banner({handleAddCreadit}) {
  return (
    <div className="bg-cover bg-no-repeat mt-20"
     style={{
        backgroundImage: 'url ("https://i.ibb.co.com/xzShg15/bg-shadow.png")',}}>
      <div className='w-4/6 mx-auto flex flex-col items-center gap-3'>
         <img src={bannerMain} alt="" />
         <h1 className='text-3xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
         <p>Beyond Boundaries Beyond Limits</p>
         <button onClick={()=>handleAddCreadit(600000)} className='p-2 rounded-md bg-yellow-500 font-semibold'>Claim Free Credit</button>
      </div>
    </div>
  )
}
