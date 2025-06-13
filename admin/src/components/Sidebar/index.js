import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
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
                </ul>
            </div>
        </>
    )
}
export default Sidebar;