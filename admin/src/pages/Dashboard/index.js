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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaEye } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Pagination } from "@mui/material";


const data = [
    ["Year", "Sales", "Expense"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

const options1 = {
    backgroundColor: "transparent",
    chartArea: { width: "100%", height: "100%" }
};

const filterOptions = ['Last Day', 'Last week', 'Last month', 'Last Year'];
const ITEM_HEIGHT = 48;

const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const [brandBy, setBrandBy] = useState('');
    const [searchBy, setsearchBy] = useState('');
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
                <div className="col-md-8">
                    <div className="dashboardBoxWrapper d-flex">
                        <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true} />
                        <DashboardBox color={["#c0123e", "#ed64fe"]} icon={<IoMdCart />} />
                        <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} />
                        <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} />
                    </div>
                </div>

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
                            MenuListProps={{ 'aria-labelledby': 'long-button' }}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            {filterOptions.map((option) => (
                                <MenuItem key={option} onClick={handleClose}>
                                    <IoMdTimer style={{ marginRight: '8px' }} />
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                </div>
            </div>

            {/* Card with Filters */}
            <div className="card shadow border-0 p-3 mt-4">
                <h3 className="hd">Best Selling Products</h3>

                <div className="row cardfilters mt-3">
                    {/* Show By */}
                    <div className="col-md-3">
                        <h6 className="font-weight-bold mb-2">SHOW BY</h6>
                        <FormControl size="small" className="w-100">
                            <Select
                                value={showBy}
                                onChange={(e) => setShowBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Show By' }}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                                <MenuItem value="30">Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    {/* Category By */}
                    <div className="col-md-3">
                        <h6 className="font-weight-bold mb-2">CATEGORY BY</h6>
                        <FormControl size="small" className="w-100">
                            <Select
                                value={categoryBy}
                                onChange={(e) => setCategoryBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Category By' }}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                                <MenuItem value="30">Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    {/* Brand */}
                    <div className="col-md-3">
                        <h6 className="font-weight-bold mb-2">BRAND BY</h6>
                        <FormControl size="small" className="w-100">
                            <Select
                                value={brandBy}
                                onChange={(e) => setBrandBy(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Brand' }}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                                <MenuItem value="30">Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    {/* Search by */}
                    <div className="col-md-3">
                        <h6 className="font-weight-bold mb-2">SEARCH BY</h6>
                        <FormControl size="small" className="w-100">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter keyword"
                                value={searchBy}
                                onChange={(e) => setsearchBy(e.target.value)}
                            />
                        </FormControl>
                    </div>

                </div>



                <div className="table-responsive mt-3">
                    <table className="table table-bordered v-align">
                        <thead className="thead-dark">
                            <tr>
                                <th>UID</th>
                                <th style={{ width: '300px' }}>PRODUCT</th>
                                <th>CATEGORY</th>
                                <th>BRAND</th>
                                <th>PRICE</th>
                                <th>STOCK</th>
                                <th>RATING</th>
                                <th>ORDER</th>
                                <th>SALES</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>
                                    <div className="d-flex  align-items-center productBox">
                                        <div className="imgWrapper">
                                            <div className="img">
                                                <img src="https://www.shutterstock.com/shutterstock/photos/2538682431/display_1500/stock-photo-a-young-woman-is-shopping-in-a-department-store-thoughtfully-comparing-two-yellow-printed-summer-2538682431.jpg" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="info pl-0">
                                            <h6>Top and skirt set for Female....</h6>
                                            <p>Woman's exclusive summer tips and shirt set for Female
                                                tops  and skirt set.
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <div style={{ width: '70px' }}>
                                        <del className="old">$123</del>
                                        <span className="new text-danger" >$123</span>
                                    </div>
                                </td>
                                <td>30</td>
                                <td>4.9(17)</td>
                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex alignitems-center">
                                        <Button className="secondary" color="secondary"><FaEye /></Button>
                                        <Button className="success" color="success"><FaPencilAlt /></Button>
                                        <Button className="error" color="error"><MdDelete /></Button>
                                    </div>
                                </td>

                            </tr>


                        </tbody>
                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>
                                    <div className="d-flex  align-items-center productBox">
                                        <div className="imgWrapper">
                                            <div className="img">
                                                <img src="https://www.shutterstock.com/shutterstock/photos/2538682431/display_1500/stock-photo-a-young-woman-is-shopping-in-a-department-store-thoughtfully-comparing-two-yellow-printed-summer-2538682431.jpg" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="info pl-0">
                                            <h6>Top and skirt set for Female....</h6>
                                            <p>Woman's exclusive summer tips and shirt set for Female
                                                tops  and skirt set.
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <div style={{ width: '70px' }}>
                                        <del className="old">$123</del>
                                        <span className="new text-danger" >$123</span>
                                    </div>
                                </td>
                                <td>30</td>
                                <td>4.9(17)</td>
                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex alignitems-center">
                                        <Button className="secondary" color="secondary"><FaEye /></Button>
                                        <Button className="success" color="success"><FaPencilAlt /></Button>
                                        <Button className="error" color="error"><MdDelete /></Button>
                                    </div>
                                </td>

                            </tr>


                        </tbody>
                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>
                                    <div className="d-flex  align-items-center productBox">
                                        <div className="imgWrapper">
                                            <div className="img">
                                                <img src="https://www.shutterstock.com/shutterstock/photos/2538682431/display_1500/stock-photo-a-young-woman-is-shopping-in-a-department-store-thoughtfully-comparing-two-yellow-printed-summer-2538682431.jpg" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="info pl-0">
                                            <h6>Top and skirt set for Female....</h6>
                                            <p>Woman's exclusive summer tips and shirt set for Female
                                                tops  and skirt set.
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <div style={{ width: '70px' }}>
                                        <del className="old">$123</del>
                                        <span className="new text-danger" >$123</span>
                                    </div>
                                </td>
                                <td>30</td>
                                <td>4.9(17)</td>
                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex alignitems-center">
                                        <Button className="secondary" color="secondary"><FaEye /></Button>
                                        <Button className="success" color="success"><FaPencilAlt /></Button>
                                        <Button className="error" color="error"><MdDelete /></Button>
                                    </div>
                                </td>

                            </tr>


                        </tbody>
                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>
                                    <div className="d-flex  align-items-center productBox">
                                        <div className="imgWrapper">
                                            <div className="img">
                                                <img src="https://www.shutterstock.com/shutterstock/photos/2538682431/display_1500/stock-photo-a-young-woman-is-shopping-in-a-department-store-thoughtfully-comparing-two-yellow-printed-summer-2538682431.jpg" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="info pl-0">
                                            <h6>Top and skirt set for Female....</h6>
                                            <p>Woman's exclusive summer tips and shirt set for Female
                                                tops  and skirt set.
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <div style={{ width: '70px' }}>
                                        <del className="old">$123</del>
                                        <span className="new text-danger" >$123</span>
                                    </div>
                                </td>
                                <td>30</td>
                                <td>4.9(17)</td>
                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex alignitems-center">
                                        <Button className="secondary" color="secondary"><FaEye /></Button>
                                        <Button className="success" color="success"><FaPencilAlt /></Button>
                                        <Button className="error" color="error"><MdDelete /></Button>
                                    </div>
                                </td>

                            </tr>


                        </tbody>
                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>
                                    <div className="d-flex  align-items-center productBox">
                                        <div className="imgWrapper">
                                            <div className="img">
                                                <img src="https://www.shutterstock.com/shutterstock/photos/2538682431/display_1500/stock-photo-a-young-woman-is-shopping-in-a-department-store-thoughtfully-comparing-two-yellow-printed-summer-2538682431.jpg" className="w-100" />
                                            </div>
                                        </div>
                                        <div className="info pl-0">
                                            <h6>Top and skirt set for Female....</h6>
                                            <p>Woman's exclusive summer tips and shirt set for Female
                                                tops  and skirt set.
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>womans</td>
                                <td>richman</td>
                                <td>
                                    <div style={{ width: '70px' }}>
                                        <del className="old">$123</del>
                                        <span className="new text-danger" >$123</span>
                                    </div>
                                </td>
                                <td>30</td>
                                <td>4.9(17)</td>
                                <td>380</td>
                                <td>$38k</td>
                                <td>
                                    <div className="actions d-flex alignitems-center">
                                        <Button className="secondary" color="secondary"><FaEye /></Button>
                                        <Button className="success" color="success"><FaPencilAlt /></Button>
                                        <Button className="error" color="error"><MdDelete /></Button>
                                    </div>
                                </td>

                            </tr>


                        </tbody>

                    </table>



                    <div className="d-flex justify-content-between tableFooter">
                        <p>showing <b>12</b> of <b>70</b> results</p>
                        <Pagination count={10} color="primary" className="pagination"
                            showFirstButton showLastButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
