import { BsCoin } from "react-icons/bs";
import logoImage from '../assets/logo.png';
export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
            <img src={logoImage} alt="" />
        </div>
        <div className='flex gap-10 items-center'>
        <ul className="flex gap-10 items-center text-gray-600 text-sm">
            <li><a href="">Home</a></li>
            <li><a href="">Fixture</a></li>
            <li><a href="">Teams</a></li>
            <li><a href="">Schedules</a></li>
            </ul>
            <p className='border rounded-md p-2 flex items-center gap-2 font-semibold'><span id="coin">0</span> Coin <BsCoin style={{color:'#F39E09', fontSize:'22px'}}></BsCoin></p>
        </div>
      </div>
    </div>
  )
}
