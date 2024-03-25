import {useEffect, useRef, useState} from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";


/*==== Import Components ====*/
import AppLayoutHOC from "../components/layout/AppLayout_HOC";
import {IoIosArrowDown} from "react-icons/io";


const ProductDetailsView = () => {
    const [state, setState] = useState({
        isNotRobot: false,
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
    });

    const captchaInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const submitCaptcha = (event: any) => {
        event.preventDefault();

        if (captchaInputRef.current) {
            const user_captcha = captchaInputRef.current.value;
            // console.log("CAPTCHA VALUE::: ", user_captcha);

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
        } else {
            console.error('captchaInputRef is null');
        }
    };

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
            <section className="h-full w-full z-100">
                <p>{ state.isNotRobot }</p>
                {(!state.isNotRobot) ? (
                    <div className="h-full w-full container mt-[120px] px-4 pb-10 grid place-content-center">
                        <form onSubmit={ (event) => submitCaptcha(event) }
                              className="h-auto max-w-[400px] px-16 py-10 flex flex-col items-center justify-center gap-y-5 border border-1 rounded-xl bg-black/10">
                            <LoadCanvasTemplate />

                            <input type="text" name="user_captcha_input"
                                   placeholder="Enter Captcha Value"
                                   ref={captchaInputRef}
                                   className="form-control w-full bg-clip-padding border border-gray-400 bg-transparent rounded font-normal text-base px-3 py-3 shadow-sm shadow-gray-200
                                focus:bg-transparent focus:border-gray-400 focus:outline-none"
                            />
                            <button onClick={ (event) => submitCaptcha(event) }
                                    className="h-auto w-[150px] lg:w-[250px] py-2 bg-black/50 rounded-full font-medium lg:font-semibold text-white" >
                                Submit
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="h-full w-full container mt-[120px] px-4 pb-10">
                        {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <img className="h-[450px] w-auto object-cover" src={state.product.imageURL} alt={state.product.name} />

                                <hr className="mt-5" />

                                <div className="h-auto w-full mt-10 flex items-center gap-x-5">
                                    { state.product.thumbnails.map((eachThumbnail, index) => (
                                        <img src={ eachThumbnail }
                                             key={ index }
                                             onClick={ () => handleUpdateImageURL(eachThumbnail) }
                                             alt="Capsule thumbnail image"
                                             className="h-[70px] w-auto cursor-pointer"
                                        />
                                    )) }
                                </div>
                            </div>

                            <div className="pt-10">
                                <h1 className="text-2xl font-bold mb-5">{state.product.name}</h1>
                                <p className="font-semibold text-lg text-gray-700">{state.product.description}</p>
                                <p className="font-normal text-gray-700 mt-4">Price: ₦{state.product.price.toLocaleString()}</p>

                                <div className="mt-4 flex items-center mb-4">
                                    <label htmlFor="quantity" className="mr-2 font-normal">Quantity:</label>
                                    <input
                                        id="quantity"
                                        type="number"
                                        value={state.quantity}
                                        onChange={event => handleUpdateQuantity(parseInt(event.target.value))}
                                        className="border border-gray-300 rounded px-3 py-1 w-20"
                                    />
                                </div>

                                <button
                                    onClick={ () => handleAddToCart() }
                                    className="h-auto w-[200px] py-2 bg-blue-900 hover:bg-black rounded-full font-normal text-white"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>*/}

                        <div className="h-[350px] w-full flex flex-col items-center justify-center gap-5">
                            <IoIosArrowDown className="animate-bounce" size={24} color={"green"} />
                            <p className="font-semibold text-xl">Coming soon.</p>
                        </div>
                    </div>
                ) }

            </section>
        </AppLayoutHOC>
    );
};

export default ProductDetailsView;
