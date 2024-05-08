import menu_icon from "@/assets/menu.png"
import logo from "@/assets/logo.png"
import Image from 'next/image';
import search_icon from "@/assets/search.png"
import upload_icon from "@/assets/upload.png"
import more_icon from "@/assets/more.png"
import notification_icon from "@/assets/notification.png"
import profile_icon from "@/assets/jack.png"
const Navbar = () => {

    return (
        <nav className='flex-div'>
        <div className='nav-left flex-div'>
          <Image className='menu-icon' src={menu_icon} alt="" />
          <Image className='logo' src={logo} alt="" />
        </div>

        <div className="nav-middle flex-div">
            <input type="text" placeholder="Search"/>
            <Image src={search_icon} alt="" />
        </div>

        <div className="nav-right flex-div">
            <Image src={upload_icon} alt="" />
            <Image src={more_icon} alt="" />
            <Image src={notification_icon} alt="" />
            <Image src={profile_icon} className="user-icon" alt="" />
        </div>
      </nav>
    )
}

export default Navbar