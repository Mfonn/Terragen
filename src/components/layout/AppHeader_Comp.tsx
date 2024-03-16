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
            name: "Capsule",
            link: "#",
            subMenuItems: [
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model B",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model C",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model D",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model E",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
            ]
        },
        {
            name: "TerrAcademy",
            link: "#",
            subMenuItems: [

                {
                    title: "",
                    subTitle: "Product Engineering and Assembly Certification",
                    imageSource: "./assets/images/certificate_01.png"
                },
                {
                    title: "",
                    subTitle: "Product Installation Certification",
                    imageSource: "./assets/images/certificate_02.png"
                },
                {
                    title: "",
                    subTitle: "Product Servicing Certification",
                    imageSource: "./assets/images/certificate_03.png"
                },
                {
                    title: "",
                    subTitle: "Technical Software Support Certification",
                    imageSource: "./assets/images/certificate_04.png"
                },
            ]
        },
        {
            name: "Terra Lab",
            link: "#",
            subMenuItems: [
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model B",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model C",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model D",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
            ]
        },
        {
            name: "Discover",
            link: "#",
            subMenuItems: [
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model A",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
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
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model B",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model C",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
                },
                {
                    title: "Model D",
                    subTitle: "Energy From Your Roof",
                    imageSource: "./assets/images/capsule_02.png"
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
        // <div className="h-screen w-full absolute inset-0 p-0 m-0 z-50">
        <div className="h-auto w-full z-20">

            {/*=== Nav Bar ===*/}
            <nav className="h-[70px] w-auto px-4 lg:px-[40px] flex justify-between items-center text-gray-700 fixed inset-0 bottom-0 bg-white z-30">

                <div className="h-full w-full lg:w-[25%] flex items-center justify-between z-20">
                    <Link to="/home">
                        <div className="h-[50px] w-[100px] md:h-[70px] md:w-[130px]"
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
                            <NavLink to={eachMenuItem.link} className="no-underline font-medium text-sm text-white hover:text-black visited:text-gray-600 hover:bg-gray-100 px-3 py-2 hover:px-3 hover:py-2 z-10">
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
                className={`max-h-[400px] h-auto w-[100%] px-0 lg:px-10 py-3 lg:pt-[80px] bg-white transition-all duration-300 z-20 lg:z-20 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] fixed ${ (state.isMenuDropdownOpen) ? "bottom-0 lg:top-0 ease-in" : "-bottom-[30vh] -top-[67vh] ease-out" }`}>

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

                <div className="h-full w-full container grid grid-cols-3 lg:grid-cols-4 items-start gap-7 z-50">
                    { (state.menuIndex === 0) ? (
                        <div className="v-full w-full col-span-4 flex items-center justify-center gap-x-10">
                            <img src="/assets/images/capsule_01.png" alt="" className="h-[200px] w-auto" />

                            <div className="h-[200px] border border-gray-300" />

                            <div className="flex flex-col gap-y-5">
                                <Link to="/product_details">
                                    <button className="h-auto w-[250px] py-2 bg-black hover:bg-blue-900 rounded-full font-semibold text-lg text-white">Features</button>
                                </Link>

                                <Link to="/order">
                                    <button className="h-auto w-[250px] py-2 bg-blue-900 hover:bg-black rounded-full font-semibold text-lg text-white">Pre-Order</button>
                                </Link>

                            </div>
                        </div>
                    ) : (
                        menuItems[state.menuIndex].subMenuItems.map((eachSubItem, index) => (
                            <div key={ index } className="v-full w-full flex flex-col items-center justify-center">
                                <img src={ eachSubItem.imageSource } alt="" className="h-[70px] w-auto"/>
                                <h1 className="mt-2 font-bold text-sm lg:text-lg">{ eachSubItem.title }</h1>
                                <small className="hidden lg:block text-center">{ eachSubItem.subTitle }</small>
                                <Link to="#" className="underline underline-offset-2 decoration-0">Learn more</Link>
                            </div>
                        ))
                    ) }


                </div>
            </div>
        </div>
    );
};

export default AppHeaderComp;
