import React, { useState } from 'react';
import dynamics_logo from '../assets/dynamics_logo.png';
import { useMainComponent } from '../context/mainComponent.context';
import { MainComponentContextType } from '../constants/page-constants';
import { Dropdown } from 'flowbite-react';


function TopNavbar() {
    const mainComponent = useMainComponent();
    const [showServiceDropdown, setShowServiceDropdown] = useState(false);


    return (
        <nav className="bg-[#161615] border-[#f9d112] border-b-2">
            <div className=" px-10 flex flex-wrap items-center mx-auto p-4  justify-between">
                <a onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.HOME) }} href="#" className="flex items-center  space-x-5 pl-4 rtl:space-x-reverse ">
                    <img src={dynamics_logo} className="h-10 w-10" alt="Flowbite Logo" />
                    <span className=" font-black_ops_one self-center md:text-2xl text-xl whitespace-nowrap text-[#f9d112]">DYNAMICS 101 MMA</span>
                </a>
                <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:flex md:w-auto">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-[#161615] md:bg-[#161615] border-gray-700">
                        <li>
                            <a href="#" onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.HOME) }} className=" hover:text-[#f9d112] block py-2 px-3 text-white rounded md:bg-transparent md:p-0 font-semibold" aria-current="page">Home</a>
                        </li>
                        <li>
                            {/* <div onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.ABOUTUS) }} className=" hover:text-[#f9d112] block py-2 px-3 text-white rounded md:bg-transparent md:p-0 font-semibold" aria-current="page">About Us</div> */}
                            {/* <Dropdown inline label='About us' placement="bottom" className=" hover:text-[#f9d112] block py-2 px-3 text-white rounded md:bg-transparent md:p-0 font-semibold">bout U
                                <Dropdown.Item className='bg-red-100 text-white'>Dashboard</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Earnings</Dropdown.Item>
                                <Dropdown.Item>Sign out</Dropdown.Item>
                            </Dropdown> */}
                            <div className='hover:text-red-500 hover: flex gap-2' onBlurCapture={()=>{console.log('blurred')}}>
                                <div className='flex justify-center items-center' >
                                    <button  onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.ABOUTUS) }} className=" hover:text-[#f9d112] py-2 px-3 text-white rounded md:bg-transparent md:p-0 font-semibold flex justify-center items-center">About Us
                                    </button>
                                    <svg onBlurCapture={() => setShowServiceDropdown(false)} onClick={() => setShowServiceDropdown(!showServiceDropdown)} className="w-2.5 h-2.5 ms-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                    
                                </div>

                                {showServiceDropdown && <div id="dropdownNavbar" className="z-10 absolute top-14 font-normal divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700">
                                    <ul className="py-2 text-sm text-white" aria-labelledby="dropdownLargeButton" >
                                        <li>
                                            <a onClick={() => { setShowServiceDropdown(!showServiceDropdown); mainComponent?.setMainComponent(MainComponentContextType.SCHEDULES) }} className="block px-4 py-2 hover:bg-gray-600 hover:text-[#f9d112]">Schedules</a>
                                        </li>
                                        <li>
                                            <a onClick={() => { setShowServiceDropdown(!showServiceDropdown); mainComponent?.setMainComponent(MainComponentContextType.TEAMS) }} className="block px-4 py-2  hover:bg-gray-600 hover:text-[#f9d112]">Meet Team</a>
                                        </li>
                                    </ul>
                                </div>}
                            </div>
                            {/* <div className=" hover:text-[#f9d112] block py-2 px-3 text-white rounded md:bg-transparent md:p-0 font-semibold" >
                                <Dropdown label="About Us" inline onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.ABOUTUS) }}>
                                    <Dropdown.Item onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.SCHEDULES) ; console.log('schedules') }}>Schedules</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.TEAMS) }}>Meet Team</Dropdown.Item>
                                </Dropdown>
                            </div> */}
                        </li><li>
                            <a href="#" onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.CLUBS) }} className=" hover:text-[#f9d112] block py-2 px-3 text-white rounded md:bg-transparent md:p-0 font-semibold" aria-current="page">Clubs</a>
                        </li><li>
                            <a href="#" onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.CONTACT) }} className="hover:text-[#f9d112] block py-2 px-3 text-white rounded md:bg-transparent md:p-0 font-semibold" aria-current="page">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default TopNavbar;

