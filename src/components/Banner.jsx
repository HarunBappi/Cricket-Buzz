import bannerMain from '../assets/banner-main.png'
export default function Banner({handleAddCreadit}) {
  return (
    <div className="bg-cover bg-no-repeat bg-black mt-20 p-6 rounded-lg"
    style={{backgroundImage: "url(https://i.ibb.co.com/2YWCvQF/bg-shadow.png)"}}>
      <div className='w-4/6 mx-auto flex flex-col items-center gap-3'>
         <img src={bannerMain} alt="" />
         <h1 className='text-3xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
         <p className='text-slate-300'>Beyond Boundaries Beyond Limits</p>
         <div className='border p-1 rounded-xl'>
         <button onClick={()=>handleAddCreadit(600000)} className='p-2 rounded-md bg-[#E7FE29] font-semibold'>Claim Free Credit</button>
         </div>
      </div>
    </div>
  )
}
