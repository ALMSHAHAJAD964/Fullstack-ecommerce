import React, { useState } from "react";
import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart, IoMdTimer } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { HiDotsVertical } from "react-icons/hi";
import { Chart } from "react-google-charts";

const data = [
    ["Year", "Sales", "Expense"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

const options1 = {
    backgroundColor: "transparent",
    'chartArea':{'width':'100%','height':'100%'}
};

const options = ['Last Day', 'Last week', 'Last month', 'Last Year'];
const ITEM_HEIGHT = 48;

const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="right-content w-100">
            <div className="row dashboardBoxWrapperRow">
                {/* Left Boxes */}
                <div className="col-md-8">
                    <div className="dashboardBoxWrapper d-flex">
                        <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true} />
                        <DashboardBox color={["#c0123e", "#ed64fe"]} icon={<IoMdCart />} />
                        <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} />
                        <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} />
                    </div>
                </div>

                {/* Right Graph + Dropdown */}
                <div className="col-md-4 pl-0">
                    <div className="box graphBox p-3 bg-dark text-white rounded">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div>
                                <h4 className="mb-1">Total Sales</h4>
                                <h3 className="font-weight-bold">$343,441.00</h3>
                                <p>$343,441.30 in last month</p>
                            </div>
                            <Button
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <HiDotsVertical className="text-white" />
                            </Button>
                        </div>

                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="170px"
                            data={data}
                            options={options1}
                        />

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
                    </div>
                </div>
            </div>




            <div className="card shadow border-0 p-3 mt-4">
                <h3 className="hd">Best Selling Products</h3>


<div className="row">
    <div className="row">
        <h4>SHOW BY</h4>
    </div>
</div>

            </div>
        </div>
    );
};

export default Dashboard;
