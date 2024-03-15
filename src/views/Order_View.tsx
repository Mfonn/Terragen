// import {useEffect, useRef, useState} from "react";
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import {IoIosArrowDown} from "react-icons/io";


/*==== Import Components ====*/
import AppLayoutHOC from "../components/layout/AppLayout_HOC";


const OrderView = () => {
    /*const [state, setState] = useState({
        isNotRobot: true,
        quantity: 1,
        product: {
            name: "TerraGen CAPSULE",
            description: "Compact Automated Power Supply And Utility Equipment",
            imageURL: "/assets/images/capsule_01.png",
            price: 450000,
            thumbnails: [
                "/assets/images/capsule_01.png",
                "/assets/images/capsule_02.png",
                "/assets/images/capsule_03.png"
            ]
        },
        productList: [
            {
                name: "TerraGen Capsule",
                description: "10 KVA.",
                price: 450000,
                quantity: 1
            },
            {
                name: "TerraGen Capsule",
                description: "3 KVA.",
                price: 150000,
                quantity: 1
            }
        ],
    });*/
    // const captchaInputRef = useRef(null);

    /*useEffect(() => {
        !state.isNotRobot && loadCaptchaEnginge(6);
    }, []);*/

    /*const submitCaptcha = (event) => {
        event.preventDefault();
        let user_captcha = captchaInputRef.current.value;
        console.log("CAPTCHA VALUE::: ", user_captcha);

        if (validateCaptcha(user_captcha) === true) {
            setState(prevState => ({
                ...prevState,
                isNotRobot: true
            }));
            alert('Captcha Matched');
            loadCaptchaEnginge(6);
            captchaInputRef.current.value = "";
        } else {
            alert('Captcha Does Not Match');
            captchaInputRef.current.value = "";
        }
    };*/

    /*const handleAddToCart = (productItem) => {
        setState((prevState) => ({
            ...prevState,
            productList:  state.productList.push(productItem),
        }));
        alert('Product added to cart!');
    };*/

    /*const handleUpdateQuantity = (quantity) => {
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
            <section className="h-full w-full container mt-[120px] pb-10">
                {/*<h1 className="text-2xl font-bold mb-4">Orders</h1>

                {state.productList.map((eachProduct, index) => (
                    <div key={ index } className="border border-gray-300 rounded p-4 mb-4">
                        <h2 className="text-lg font-semibold">{eachProduct.name}</h2>
                        <p className="text-gray-700 mb-2">{eachProduct.description}</p>
                        <p className="text-gray-700">Price: ₦{eachProduct.price.toLocaleString()}</p>
                        <p className="text-gray-700 mb-2">Quantity: {eachProduct.quantity}</p>
                    </div>
                ))}*/}


                <div className="h-[350px] w-full flex flex-col items-center justify-center gap-5">
                    <IoIosArrowDown className="animate-bounce" size={24} color={"green"} />
                    <p className="font-semibold text-xl">Coming soon.</p>
                </div>
            </section>
        </AppLayoutHOC>
    );
};

export default OrderView;
