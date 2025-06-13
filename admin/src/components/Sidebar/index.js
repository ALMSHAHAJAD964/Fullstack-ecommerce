import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { IoPieChartSharp } from "react-icons/io5";
import { LuTable } from "react-icons/lu";
import { GiSpikyField } from "react-icons/gi";

const Sidebar = () => {
    return (

        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><MdDashboard /></span>
                            Dashboard
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><MdProductionQuantityLimits /></span>
                            Products
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><TiShoppingCart /></span>
                            Orders
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><MdMessage /></span>
                            Messages
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><IoNotifications /></span>
                            Notiications
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><IoSettingsSharp /></span>
                            Settings
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><FaRegUser /></span>
                            User
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><MdLock /></span>
                            Authentication
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><IoPieChartSharp /></span>
                            Charts
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><LuTable /></span>
                            Tables
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><GiSpikyField /></span>
                            Fields
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                    <li>
                        <Button className='w-100'>
                            <span className='icon'><MdDashboard /></span>
                            Dashboard
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><MdProductionQuantityLimits /></span>
                            Products
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><TiShoppingCart /></span>
                            Orders
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><MdMessage /></span>
                            Messages
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                     <li>
                        <Button className='w-100'>
                            <span className='icon'><IoNotifications /></span>
                            Notiications
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar;