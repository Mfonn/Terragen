import { Link } from "react-router-dom";
import { HiOutlineClock, HiOutlinePhoneMissedCall, HiOutlineLocationMarker, HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi";

const AppFooterComp = () => {

    return (
        <section className="h-auto md:h-[400px] w-full px-5 bg-gradient-to-b from-blue-950 to-slate-950 text-white" style={{
            background: "linear-gradient(rgba(0, 4, 90, 0.8), rgba(0, 1, 10, 0.95)), url('../../../../assets/images/footer_image.png') no-repeat center",
            backgroundSize: "cover"
        }}>

            {/*==== Top Header ====*/}
            <div className="h-auto w-full container py-10 grid md:grid-cols-3 justify-center">

                {/*==== Col 1 =====*/}
                <div>
                    <div className="flex items-center gap-4">
                        <Link to="/home">
                            <img src="/assets/images/logo_light.png" alt="App Logo" className="h-[50px] w-auto" />
                        </Link>
                    </div>
                    <p className="mt-4 pr-12 text-sm text-justify text-white">
                        Energy Solutions Limited is committed to providing affordable, accessible and environmentally
                        sustainable energy to proffer solutions to the Sub-Sahara Africa and global energy crisis.
                    </p>

                    <div className="mt-5">
                        <h3 className="mt-2 font-semibold text-white text-xl">Business Hours</h3>
                        <hr className="w-[50px] border border-gold" />

                        <p className="mt-3 flex items-center gap-0.5 md:gap-2 text-sm text-white"><HiOutlineClock size="1rem" /> Monday - Friday | 8AM - 5PM</p>
                        <p className="mt-3 flex items-center gap-0.5 md:gap-2 text-sm text-white"><HiOutlineClock size="1rem" /> Saturday - Sunday | Closed</p>
                    </div>
                </div>

                {/*==== Col 2 =====*/}
                <div className="mt-6 md:mt-2 md:pl-10">
                    <h3 className="font-semibold text-white text-xl">Quick Link</h3>
                    <hr className="w-[50px] border border-gold" />

                    <ul className="mt-2 md:mt-5">
                        <li className='py-2 text-white text-sm after:block after:bg-gold after:h-[2px] after:w-[0] hover:after:w-[35px] hover:text-gray-400 after:transition-all after:duration-700'>
                            <Link to="/home">Capsule</Link>
                        </li>
                        <li className='py-2 text-white text-sm after:block after:bg-gold after:h-[2px] after:w-[0] hover:after:w-[35px] hover:text-gray-400 after:transition-all after:duration-700'>
                            <Link to="/about_us">Terra Academy</Link>
                        </li>
                        <li className='py-2 text-white text-sm after:block after:bg-gold after:h-[2px] after:w-[0] hover:after:w-[35px] hover:text-gray-400 after:transition-all after:duration-700'>
                            <Link to="/services">Terra Lab</Link>
                        </li>
                        <li className='py-2 text-white text-sm after:block after:bg-gold after:h-[2px] after:w-[0] hover:after:w-[35px] hover:text-gray-400 after:transition-all after:duration-700'>
                            <Link to="/contact_us">Discovery</Link>
                        </li>
                        <li className='py-2 text-white text-sm after:block after:bg-gold after:h-[2px] after:w-[0] hover:after:w-[35px] hover:text-gray-400 after:transition-all after:duration-700'>
                            <Link to="/contact_us">Shop</Link>
                        </li>
                    </ul>
                </div>

                {/*==== Col 3 =====*/}
                <div className="mt-6 md:mt-2">
                    <div>
                        <h3 className="font-semibold text-white text-xl">Contact Info</h3>
                        <hr className="w-[50px] border border-gold" />

                        <div className="mt-5 text-sm">
                            <p className="my-3 flex gap-2 text-white">
                                <HiOutlineLocationMarker size="1.2rem" /> 58 Hallie Estate, Goody State, Nigeria
                            </p>
                            <p className="my-3 flex gap-2 text-white">
                                <HiOutlinePhoneMissedCall size="1.2rem" /> (+234) 8130000000
                            </p>
                            <p className="my-3 flex gap-2 text-white">
                                <HiOutlineMail size="1.2rem" /> support@terragen.com.ng
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="mt-5 font-semibold text-white text-xl">Get Update</h3>
                        <hr className="w-[50px] border border-gold" />

                        <p className="mt-3 flex gap-2">Subscribe to our news letter</p>
                        <div className="h-[47px] w-full mt-1 flex items-center border border-gray-400 rounded-full">
                            <input type="text"
                                   className="h-[45px] w-[calc(100%-45px)] px-4 rounded-full text-xs bg-transparent outline-0"
                                   placeholder="Enter your email here"
                            />
                            <button className="h-[35px] w-[40px] grid place-content-center rounded-full text-white bg-gold">
                                <HiOutlineArrowSmRight size="1rem" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*==== Bottom header ====*/}
            <div className="h-[20px] md:h-[30px] w-full flex justify-center items-center italic text-blue-100 font-extralight text-[0.5rem] md:text-[0.8rem] bg-mGray">
                Copyright &copy; { new Date().getFullYear() }. TerraGen Energy Solutions Limited.
            </div>
        </section>
    );
};

export default AppFooterComp;
