import footerImage from '../assets/logo-footer.png'
export default function Footer() {
  return (
<div>
    <div className='w-4/6 mx-auto border p-2 rounded-lg mt-20 relative'>
        <div className="bg-cover p-24 rounded-lg"
            style={{backgroundImage: "url(https://i.ibb.co.com/2YWCvQF/bg-shadow.png)"}}>
            <div className='flex flex-col justify-center items-center space-y-3'>
            <h1 className='text-slate-950 font-semibold text-2xl'>Subscribe to our Newsletter</h1>
            <p className='text-slate-600 text-xs'>Get the latest updates and news right in your inbox!</p>
            <div className='flex gap-3 items-center'>
            <input className='p-2 rounded-md border' type="text" placeholder='Enter your email' />
            <button className='bg-yellow-500 p-2 rounded-md font-semibold'>Subscribe</button>
            </div>
            </div>
        </div>
    </div>
    <div className="bg-slate-900 pb-4 -mt-24">
       <div className='flex justify-center flex-col items-center pt-8'>
        <img className='mt-28' src={footerImage} alt="" />
          <div className='grid grid-cols-3 gap-6 w-4/5 mt-10'>
            <div>
                <h1 className='text-white'>About us</h1>
                <p className='text-slate-400 text-xs w-52 mt-3'>We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div>
                <h1 className='text-white'>Quick Links</h1>
                <ul className='text-slate-400  w-52 mt-3 space-y-2 list-disc'>
                    <li className='ml-5'>Home</li>
                    <li className='ml-5'>Service</li>
                    <li className='ml-5'>About</li>
                    <li className='ml-5'>Contact</li>
                </ul>
            </div>
            <div>
                <h1 className='text-white'>Subscribe</h1>
                <p className='text-slate-400 text-xs w-52 mt-3 '>Subscribe to our newsletter for the latest updates.</p>
                <div className='mt-6'>
                <input className='p-2 rounded-l-md' type="text" placeholder='Enter your email' />
                <button className='bg-yellow-500 p-2 rounded-r-md font-semibold'>Subscribe</button>
                </div>
            </div>
          </div>
       </div>
    <div className='border-t border-slate-700 text-center mt-6'>
        <p className='text-slate-400 mt-4'>&copy;2024 Your Company All Rights Reserved.</p>
    </div>
    </div>
</div>
  )
}
