import React, { use, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import logo from '../../assets/images/logo.png'
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md"
import SearchBox from "../Search";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import { IoShieldHalf } from "react-icons/io5";
import { MyContext } from "../../App";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationsDrop, setisOpennotificationsDrop] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const opneNotifications = Boolean(isOpennotificationsDrop)

  const [isLogin, setIsLogin]= useState(false);
  const context = useContext(MyContext)

  const handleOpenMyAccDrop = (event) => {
    console.log("Menu button clicked!", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDrop = () => {
    console.log("Menu closed");
    setAnchorEl(null);
  };

  const handleOpennotificationsDrop = () => {
    setisOpennotificationsDrop(true)
  }
  const handleClosenotificationsDrop = () => {
    setisOpennotificationsDrop(false)
  }


  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/*Logo Wraooer*/}
            <div className="col-sm-2 part1">
              <Link to={'/'} className="d-flex align-items-center logo">
                <img src={logo} />
                <span className="ml-2">TRADEBOARD</span>
              </Link>
            </div>
            <div className="col-sm-3 d-flex align-items-center part2 ">
              <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
              {
                context.isToggleSidebar===false ?<MdMenuOpen/> : <MdOutlineMenu/>
              }
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end 
                        part3">
              <Button className="rounded-circle mr-3"><MdOutlineLightMode /></Button>
              <Button className="rounded-circle mr-3" >
                <IoCartOutline /></Button>




              <div className='dropdownWrapper position-relative'>
                <Button className="rounded-circle mr-3"><MdOutlineMailOutline /></Button>
                <Button className="rounded-circle mr-3" onClick={handleOpennotificationsDrop}>
                  <FaRegBell /></Button>

                <Menu
                  anchorEl={isOpennotificationsDrop}
                  className="notifications dropdown_list"
                  id="notifications"
                  open={opneNotifications}
                  onClose={handleClosenotificationsDrop}
                  onClick={handleClosenotificationsDrop}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <Divider />
                  <div className="head pl-3 pb-0"><h4>Order(12)</h4></div>
                  <Divider className="mb-1" />
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago1 hours</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div>
                      <div className="d-flex position-relative">
                        <span className='rounded-circle border p-1'>
                          <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" />
                        </span>
                      </div>
                    </div>
                    <div className="dropdownInfo">
                      <h5>
                        <b>Mahmudul</b> added to his favorite list <br /><b>Leather belt
                          Steve Madden</b>
                      </h5>
                      <p className='text-skey mb-0'>few seconds ago</p>
                    </div>
                  </MenuItem>
                  <div className="pl-3 pr-3 w-100 pt-2 pb-1">
                    <Button className="btn-blue w-100">View all
                      notifications</Button>

                  </div>
                </Menu>
              </div>

            {
              isLogin!==true ? <Button className='btn-blue'>Sign In</Button>
              :

              <div className="myAccWrapper">
                <Button className="myAcc d-flex align-items-center"
                  onClick={handleOpenMyAccDrop}>
                  <div className="userimg">
                    <span className="rounded-circle">
                      <img src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=996" alt="User" />
                    </span>
                  </div>

                  <div className="userInfo">
                    <h4>Shahajad alam</h4>
                    <p className="mb-0">Shahajad878687Alam@mail.com</p>
                  </div>
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAccDrop}
                  onClick={handleCloseMyAccDrop}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <Divider />
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My Account

                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <IoShieldHalf />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            }
              

              

            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header;