import {useState} from 'react';
import ImageSectionComp from "./ImageSection_Comp";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

const TerraGenFeaturesComp = () => {

    const [state, setState] = useState({
        selectedInvoiceDetails: 1
    });

    const handleSelectedInvoiceDetailsChange = (value: number) => {
        setState(prevState => ({
            ...prevState,
            selectedInvoiceDetails: (state.selectedInvoiceDetails === value ? 0 : value)
        }));
    }

    return (
        <ImageSectionComp
            imageSource = "bg-[url('/assets/images/terragen_capsule.png')]"
            title = "FEATURES"
            titleColor = "text-white"
            description="TerraGen Key Features"
            leftButtonText=""
            rightButtonText=""
        >

            <div className="h-auto w-auto mt-2 lg:mt-5 px-5 py-6 flex flex-col lg:flex-row gap-2">

                <div className="flex flex-col lg:flex-row items-center gap-1">
                    <div onClick={ () => handleSelectedInvoiceDetailsChange(1) }
                         className="h-[70px] lg:h-[400px] w-full lg:w-[70px] px-2 py-2.5 lg:py-4 flex lg:flex-col items-center lg:justify-between gap-2 lg:gap-0 cursor-pointer rounded-xl bg-gray-200">
                        <div className="hidden lg:block" />
                        { (state.selectedInvoiceDetails === 1) ? <SlArrowDown className="hidden lg:block" /> : <SlArrowRight className="hidden lg:block" /> }
                        <img src="/assets/images/feature_1.png" alt="Feature Image 01" className="h-[50px] w-[50px] p-2.5 bg-gray-300 rounded-full" />
                        <h3 className="lg:hidden font-semibold text-center text-sm">Fully operates from mobile device</h3>
                    </div>

                    { (state.selectedInvoiceDetails === 1) && (
                        <div className="h-[280px] lg:h-[400px] w-full lg:w-[400px] px-7 pt-10 rounded-xl bg-gray-100 transition duration-500">
                            <h3 className="font-semibold text-center">Fully operates from mobile device</h3>

                            <p className="mt-5 text-justify leading-[40px]">
                                The TerraGen Autonomous Power generator can be fully operated from the comfort of your
                                mobile device in real- time from anywhere.
                            </p>
                        </div>
                    ) }
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-1">
                    <div onClick={ () => handleSelectedInvoiceDetailsChange(2) }
                         className="h-[70px] lg:h-[400px] w-full lg:w-[70px] px-2 py-2.5 lg:py-4 flex lg:flex-col items-center lg:justify-between gap-2 lg:gap-0 cursor-pointer rounded-xl bg-gray-200">
                        <div className="hidden lg:block" />
                        { (state.selectedInvoiceDetails === 2) ? <SlArrowDown className="hidden lg:block" /> : <SlArrowRight className="hidden lg:block" /> }
                        <img src="/assets/images/feature_2.png" alt="Feature Image 01" className="h-[50px] w-[50px] p-2.5 bg-gray-300 rounded-full" />
                        <h3 className="lg:hidden font-semibold text-center text-sm">Fuelless Operation</h3>
                    </div>

                    { (state.selectedInvoiceDetails === 2) && (
                        <div className="h-[280px] lg:h-[400px] w-full lg:w-[400px] px-7 pt-10 rounded-xl bg-gray-100 transition duration-500">
                            <h3 className="font-semibold text-center">Fuelless Operation</h3>

                            <p className="mt-5 text-justify leading-[40px]">
                                The generator does not use any form of fuel (fossil or synthetic), it relies on gravity
                                as a source of renewable energy.
                            </p>
                        </div>
                    ) }
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-1">
                    <div onClick={ () => handleSelectedInvoiceDetailsChange(3) }
                         className="h-[70px] lg:h-[400px] w-full lg:w-[70px] px-2 py-2.5 lg:py-4 flex lg:flex-col items-center lg:justify-between gap-2 lg:gap-0 cursor-pointer rounded-xl bg-gray-200">
                        <div className="hidden lg:block" />
                        { (state.selectedInvoiceDetails === 3) ? <SlArrowDown className="hidden lg:block" /> : <SlArrowRight className="hidden lg:block" /> }
                        <img src="/assets/images/feature_3.png" alt="Feature Image 01" className="h-[50px] w-[50px] p-2.5 bg-gray-300 rounded-full" />
                        <h3 className="lg:hidden font-semibold text-center text-sm">72-Hour Non-Stop Operation</h3>
                    </div>

                    { (state.selectedInvoiceDetails === 3) && (
                        <div className="h-[280px] lg:h-[400px] w-full lg:w-[400px] px-7 pt-10 rounded-xl bg-gray-100 transition duration-500">
                            <h3 className="font-semibold text-center">72-Hour Non-Stop Operation</h3>

                            <p className="mt-5 text-justify leading-[40px]">
                                Under regular operational conditions, the generator will provide an uninterrupted power
                                supply for 72 hours.
                            </p>
                        </div>
                    ) }
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-1">
                    <div onClick={ () => handleSelectedInvoiceDetailsChange(4) }
                         className="h-[70px] lg:h-[400px] w-full lg:w-[70px] px-2 py-2.5 lg:py-4 flex lg:flex-col items-center lg:justify-between gap-2 lg:gap-0 cursor-pointer rounded-xl bg-gray-200">
                        <div className="hidden lg:block" />
                        { (state.selectedInvoiceDetails === 4) ? <SlArrowDown className="hidden lg:block" /> : <SlArrowRight className="hidden lg:block" /> }
                        <img src="/assets/images/feature_4.png" alt="Feature Image 01" className="h-[50px] w-[50px] p-2.5 bg-gray-300 rounded-full" />
                        <h3 className="lg:hidden font-semibold text-center text-sm">Environmentally Friendly</h3>
                    </div>

                    { (state.selectedInvoiceDetails === 4) && (
                        <div className="h-[280px] lg:h-[400px] w-full lg:w-[400px] px-7 pt-10 rounded-xl bg-gray-100 transition duration-500">
                            <h3 className="font-semibold text-center">Environmentally Friendly</h3>

                            <p className="mt-5 text-justify leading-[40px]">
                                Gravity is a renewable source of energy that benefits both man and nature and allows for
                                sustainable co- existence.
                            </p>
                        </div>
                    ) }
                </div>

            </div>

        </ImageSectionComp>
    );
};

export default TerraGenFeaturesComp;
