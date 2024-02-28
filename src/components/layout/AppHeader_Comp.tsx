import { useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import { BiHelpCircle, BiWorld, BiUserCircle } from "react-icons/bi";

const AppHeaderComp = () => {
    const [state, setState] = useState({
        isNavBarOpen: false,
        isMenuDropdownOpen: false,
        menuIndex: 0,
    });

    const menuItems = [
        {
            name: "Generators",
            link: "#",
            subMenuItems: [
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_1.png"
                },
                {
                    title: "Model B",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_5.png"
                },
                {
                    title: "Model C",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_3.png"
                },
                {
                    title: "Model D",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_4.png"
                },
                {
                    title: "Model E",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_2.png"
                },
                {
                    title: "Model F",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_6.png"
                },
                {
                    title: "Model G",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_7.png"
                },
            ]
        },
        {
            name: "Solar Panels",
            link: "#",
            subMenuItems: [

                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_3.png"
                },
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_4.png"
                },
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_5.png"
                },
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_6.png"
                },
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_7.png"
                },
            ]
        },
        {
            name: "Chargers",
            link: "#",
            subMenuItems: [
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_4.png"
                },
                {
                    title: "Model B",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_1.png"
                },
                {
                    title: "Model C",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_5.png"
                },
                {
                    title: "Model D",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_3.png"
                },
                {
                    title: "Model E",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_2.png"
                },
            ]
        },
        {
            name: "Shop",
            link: "#",
            subMenuItems: [
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_1.png"
                },
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_2.png"
                },
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_3.png"
                },
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_4.png"
                },
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/home_menu_item_5.png"
                },
            ]
        },
    ];


    const handleToggleNavBar = () => {
        setState(prevState => ({
            ...prevState,
            isNavBarOpen: !state.isNavBarOpen,
            isMenuDropdownOpen: false,
        }));
    }
    const handleChangeMenuDropdown = (value: boolean) => {
        // console.log("EVENT::: ", value);
        setState(prevState => ({
            ...prevState,
            isMenuDropdownOpen: value,
        }));
    }
    const handleUpdateMenuIndex = (selectedIndex: number) => {
        setState(prevState => ({
            ...prevState,
            menuIndex: selectedIndex,
        }))
    }

    return (
        <div className="h-screen w-full absolute inset-0 p-0 m-0 z-50">

            {/*=== Nav Bar ===*/}
            <nav className="h-[70px] w-auto px-4 lg:px-[40px] flex justify-between items-center text-gray-700 fixed inset-0 bottom-0 z-20
            bg-gradient-to-b from-white to-transparent">

                <div className="h-full w-full lg:w-[25%] flex items-center justify-between z-20">
                    <Link to="/home">
                        <div className="h-[40px] w-[90px] md:h-[50px] md:w-[110px]"
                             style={{
                                 background: "url('/assets/images/logo_dark.png') no-repeat left center",
                                 backgroundSize: "contain",
                             }}
                        />
                    </Link>

                    <button onClick={ () => handleToggleNavBar() } className="lg:hidden cursor-pointer">
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {state.isNavBarOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6L18 18"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop navigation */}
                <ul
                    onMouseEnter={ () => handleChangeMenuDropdown(true) }
                    onMouseLeave={ () => handleChangeMenuDropdown(false) }
                    className="h-full hidden lg:flex items-center space-x-6 text-lg font-medium">
                    {menuItems.map((eachMenuItem, index) => (
                        <li key={ eachMenuItem.name }
                            onMouseEnter={ () => handleUpdateMenuIndex(index) }
                            className="list-none">
                            <NavLink to={eachMenuItem.link} className="no-underline text-white hover:text-black visited:text-black hover:bg-gray-100 px-3 py-2 hover:px-3 hover:py-2 z-10">
                                {eachMenuItem.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>


                <div className="h-full w-[25%] hidden lg:flex items-center justify-end gap-4">
                    <BiHelpCircle size={25} />
                    <BiWorld size={25} />
                    <BiUserCircle size={25} />
                </div>

                {/* Mobile navigation (toggle menu) */}
                {state.isNavBarOpen && (
                    <ul className="h-screen w-full lg:hidden pt-24 flex flex-col items-center gap-16 absolute left-0 top-[0px] bg-white z-0">
                        {menuItems.map((eachMenuItem, index) => (
                            <li key={eachMenuItem.name}
                                className="list-none">
                                <NavLink to={eachMenuItem.link}
                                         onClick={ () => {
                                             handleChangeMenuDropdown(true)
                                             handleUpdateMenuIndex(index);
                                         } }
                                         className="no-underline hover:text-gray-400 visited:text-gray-600 hover:bg-gray-100 px-5 py-2 hover:px-5 hover:py-2 z-10">
                                    {eachMenuItem.name}
                                </NavLink>
                            </li>
                        ))}

                        <li className="list-none">
                            <BiHelpCircle size={25} />
                        </li>
                        <li className="list-none">
                            <BiWorld size={25} />
                        </li>
                        <li className="list-none">
                            <BiUserCircle size={25} />
                        </li>
                    </ul>
                )}
            </nav>


            {/*==== Menu DropDown Panel ====*/}
            <div
                onMouseEnter={ () => handleChangeMenuDropdown(true) }
                onMouseLeave={ () => handleChangeMenuDropdown(false) }
                className={`max-h-[65vh] h-auto w-[100%] px-0 lg:px-10 py-3 lg:pt-[80px] fixed bg-white transition-all duration-300 z-30 lg:z-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] ${ (state.isMenuDropdownOpen) ? "bottom-0 lg:top-0 ease-in" : "-bottom-[65vh] -top-[67vh] ease-out" }`}>

                <div className="lg:hidden px-5 py-2 flex justify-end">
                    <button onClick={ () => handleChangeMenuDropdown(false) } className="cursor-pointer">
                        <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6L18 18"
                            />
                        </svg>
                    </button>
                </div>

                <div className="h-full w-full container grid grid-cols-3 lg:grid-cols-4 gap-7 z-50">
                    {
                        menuItems[state.menuIndex].subMenuItems.map(eachSubItem => (
                            <div key={eachSubItem.imageSource} className="v-full w-full flex flex-col items-center justify-center">
                                <img src={ eachSubItem.imageSource } alt="" className="h-[40%] md:h-[30%] xl:h-[40%] w-auto"/>
                                <h1 className="mt-2 font-bold text-sm lg:text-lg">{ eachSubItem.title }</h1>
                                <small className="hidden lg:block text-center">{ eachSubItem.subTitle }</small>
                                <Link to="#" className="underline underline-offset-2 decoration-0">Learn more</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AppHeaderComp;
