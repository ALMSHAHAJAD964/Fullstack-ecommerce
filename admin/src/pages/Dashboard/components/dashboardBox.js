import React, { useState } from "react";
import Button from '@mui/material/Button';
import { HiDotsVertical } from "react-icons/hi";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoMdTimer } from "react-icons/io";

const options = ['Last Day', 'Last week ', 'Last month','Last Year'];
const ITEM_HEIGHT = 48;

const DashboardBox = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        className="dashboardBox"
        style={{
          backgroundImage: `linear-gradient(to right,${props.color?.[0]},${props.color?.[1]})`,
        }}
      >
        {props.grow === true ? (
          <span className="chart"><TrendingUpIcon /></span>
        ) : (
          <span className="chart"><TrendingDownIcon /></span>
        )}

        <div className="d-flex w-100">
          <div className="col1">
            <h4 className="text-white mb-0">Total Users</h4>
            <span className="text-white">277</span>
          </div>

          <div className="ml-auto">
            {props.icon && <span className="icon">{props.icon}</span>}
          </div>
        </div>

        <div className="d-flex alignitems-center w-100 bottomEle">
          <h6 className="text-white mb-0 mt-0">Last month</h6>
          <div className="ml-auto">
            <Button
              className="ml-auto toggleIcon"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <HiDotsVertical />
            </Button>
          </div>
        </div>
      </Button>

      <Menu
       className="Dropdown_menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
      {options.map((option) => (
  <MenuItem key={option} onClick={handleClose}>
    <IoMdTimer style={{ marginRight: '8px' }} />
    {option}
  </MenuItem>
))}
      </Menu>
    </>
  );
};

export default DashboardBox;
