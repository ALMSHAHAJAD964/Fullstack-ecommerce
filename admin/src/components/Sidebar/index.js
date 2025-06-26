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
import { Link } from '@mui/material';
import { useState } from 'react';
import { IoMdLogOut } from 'react-icons/io'
import { MyContext } from '../../App';

const Sidebar = () => {
    const [actvieTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setisToggleSubmenu] = useState(false);



 const context = useState(MyContext);
    const isOpenSubmeun = (index) => {
        setActiveTab(index)
        setisToggleSubmenu(!isToggleSubmenu)
    }
    return (

        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${actvieTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmeun(0)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${actvieTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmeun(1)}>
                            <span className='icon'><MdProductionQuantityLimits /></span>
                            Products
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${actvieTab === 1 &&
                            isToggleSubmenu === true ? 'collapsed' : 'collapse'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Product List</Link></li>
                                <li><Link to="#">Product view</Link></li>
                                <li><Link to="#">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${actvieTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmeun(2)}>
                                <span className='icon'><TiShoppingCart /></span>
                                Orders
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${actvieTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmeun(3)}>
                                <span className='icon'><MdMessage /></span>
                                Messages
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${actvieTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmeun(4)}>
                                <span className='icon'><IoNotifications /></span>
                                Notiications
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${actvieTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmeun(5)}>
                                <span className='icon'><IoSettingsSharp /></span>
                                Settings
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${actvieTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmeun(6)}>
                                <span className='icon'><FaRegUser /></span>
                                User
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${actvieTab === 7 ? 'active' : ''}`} onClick={() => isOpenSubmeun(7)}>
                                <span className='icon'><MdLock /></span>
                                Authentication
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${actvieTab === 8 ? 'active' : ''}`} onClick={() => isOpenSubmeun(8)}>
                                <span className='icon'><IoPieChartSharp /></span>
                                Charts
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${actvieTab === 9 ? 'active' : ''}`} onClick={() => isOpenSubmeun(9)}>
                                <span className='icon'><LuTable /></span>
                                Tables
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${actvieTab === 10 ? 'active' : ''}`} onClick={() => isOpenSubmeun(10)}>
                                <span className='icon'><GiSpikyField /></span>
                                Fields
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className='w-100'>
                                <span className='icon'><MdProductionQuantityLimits /></span>
                                Products
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                </ul>
                <br />
                <div className='logoutWrapper'>
                    <div className='logoutBox'>
                        <Button variant='contained'><IoMdLogOut /> Logout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;