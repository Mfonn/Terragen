import {useEffect, useState} from "react";
import { loadCaptchaEnginge } from "react-simple-captcha";


/*==== Import Components ====*/
import AppLayoutHOC from "../components/layout/AppLayout_HOC";
import OrderApplicationComp from "../components/pages/order/OrderApplication_Comp";


const OrderView = () => {
    const [state, setState] = useState({
        isNotRobot: true,
        quantity: 1,
        productDetail: {
            title: "TerraGen CAPSULE",
            sunTitle: "Compact Automated Power Supply And Utility Equipment",
            description: "TerraGen is an autonomous power generator that utilizes flywheel energy storage technology; a renewable " +
                "source of energy suitable for environmental and economic sustainability.",
            imageURL: "/assets/images/capsule_01.png",
            price: 450000,
            thumbnails: [
                "/assets/images/capsule_01.png",
                "/assets/images/capsule_02.png",
                "/assets/images/capsule_03.png"
            ],
            features: [
                {
                    title: "Fully operates from mobile device",
                    image: "/assets/images/feature_1.png"
                },
                {
                    title: "Fuelless Operation",
                    image: "/assets/images/feature_2.png"
                },
                {
                    title: "72-Hour Non-Stop Operation",
                    image: "/assets/images/feature_3.png"
                },
                {
                    title: "Environmentally Friendly",
                    image: "/assets/images/feature_4.png"
                },
            ]
        },
        products: [
            {
                name: "TerraGen Capsule",
                description: "10 KVA.",
                price: 450000,
                quantity: 1
            },
        ],
        showOrderApplicationModal: false,
    });

    useEffect(() => {
        !state.isNotRobot && loadCaptchaEnginge(6);
    }, []);

    const toggleShowTCCApplicationModal = (value: boolean) => {
        setState(prevState => ({
            ...prevState,
            showOrderApplicationModal: value,
        }))
    };

    /*const handleUpdateQuantity = (quantity: number) => {
        setState((prevState) => ({
            ...prevState,
            quantity:  quantity,
        }));
    };*/

    /*const handleUpdateImageURL = (imageURL) => {
        setState((prevState) => ({
            ...prevState,
            product: {
                ...prevState.product,
                imageURL: imageURL
            }
        }));
    };*/


    return (
        <AppLayoutHOC>
            <section className="h-full w-full container mt-[120px] pb-10 relative">
                <div className="lg:flex items-center gap-x-5">
                    <div className="h-auto w-full lg:w-[70%] relative
                        after:content-[''] after:h-[40px] lg:after:h-[60px] after:w-[80px] lg:after:w-[120px] after:bg-[#FFE5B4] after:border-none after:rounded-tl-full after:rounded-tr-full after:absolute after:top-[60px] after:left-[10px] lg:after:left-[40px]
                        before:content-[''] before:h-[70px] lg:before:h-[100px] before:w-[70px] lg:before:w-[100px] before:bg-[#27D018]/60 before:border-none before:rounded-tr-full before:absolute before:bottom-[10px] lg:before:bottom-[20px] before:right-[20px] lg:before:right-[40px]"
                    >
                        <img src="/assets/images/capsule_01.png" alt="TerraGen Capsule" className="h-[320px] lg:h-[500px] w-auto mx-auto relative" />
                    </div>

                    <div className="h-[150px] lg:h-auto w-full lg:w-[30%] mt-10 flex lg:flex-col items-start justify-evenly relative overflow-x-hidden
                        before:content-[''] before:h-[80px] lg:before:h-[150px] before:w-[80px] lg:before:w-[150px] before:bg-[url('/assets/images/dot_bg.png')] before:bg-contain before:bg-no-repeat before:absolute before:bottom-0 before:right-0 lg:before:top-[0px] lg:before:right-[30px]"
                    >
                        <img src="/assets/images/capsule_03.png" alt="TerraGen Capsule" className="h-[80px] lg:h-[140px] w-auto relative" />
                        <img src="/assets/images/capsule_01.png" alt="TerraGen Capsule" className="h-[80px] lg:h-[140px] w-auto lg:mt-6" />
                        <img src="/assets/images/capsule_02.png" alt="TerraGen Capsule" className="h-[80px] lg:h-[140px] w-auto" />
                    </div>
                </div>

                <div className="h-auto w-full mt-10 lg:mt-24 lg:flex items-start justify-between">
                    <div className="w-full max-w-[700px] text-center lg:text-start">
                        <h1 className="text-2xl font-bold">{state.productDetail.title}</h1>
                        <p className="mt-2 text-gray-700 text-justify">{state.productDetail.description}</p>
                        <p className="hidden lg:flex font-normal text-gray-700 mt-4 text-start">Price: ₦{state.productDetail.price.toLocaleString()}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                        <p className="lg:hidden font-normal text-gray-700 mt-4 text-start">Price: ₦{state.productDetail.price.toLocaleString()}</p>
                        <button onClick={ () => toggleShowTCCApplicationModal(true) }
                            className="h-auto w-[150px] lg:w-[250px] py-2 lg:py-3.5 bg-blue-900 hover:bg-black rounded-full outline-none font-normal lg:font-semibold text-xs lg:text-lg text-white">
                            Pre-Order Yours
                        </button>
                    </div>
                </div>

                <hr className="mt-5" />

                <div className="h-auto w-full mt-7 lg:mt-10">
                    <h3 className="mb-3 font-semibold">Core Features:</h3>
                    <div className="lg:flex items-center gap-10">
                        {
                            state.productDetail.features.map((eachFeature) => (
                                <div key={ eachFeature.title } className="mb-4 lg:mb-0 flex items-center gap-x-2">
                                    <img src={ eachFeature.image } alt="Feature Image 01" className="h-[40px] w-[40px] p-2 bg-gray-200 rounded-full" />
                                    <p className="text-sm">{ eachFeature.title }</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/*==== Modals ====*/}
            <OrderApplicationComp showOrderApplicationModal={ state.showOrderApplicationModal } toggleShowTCCApplicationModal={ toggleShowTCCApplicationModal } />
        </AppLayoutHOC>
    );
};

export default OrderView;
