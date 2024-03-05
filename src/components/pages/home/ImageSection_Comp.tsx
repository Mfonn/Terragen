
import { Slide } from "react-awesome-reveal";
import { IoIosArrowDown } from "react-icons/io";

type propsType = {
    children: any;
    imageSource: string,
    title: string,
    titleColor: string,
    description: string,
    leftButtonText: string,
    rightButtonText: string,
}

const ImageSectionComp = ({ children, title, titleColor, description, imageSource, leftButtonText, rightButtonText }: propsType) => {

    return (
        <section className={`h-screen w-full relative bg-cover bg-center ${imageSource}`}>
            <div className="h-full w-full absolute inset-0 flex flex-col items-center justify-between bg-black/60">
                <Slide direction={"up"} delay={3} duration={1000}>
                    <div className="mt-[5vh] lg:mt-[12vh] text-center">
                        <h1 className={`font-bold font-montserrat text-3xl ${titleColor}`}>{title}</h1>
                        <p className={`h-auto w-[90%] md:w-[600px] xl:w-[700px] mt-2 mx-auto font-semibold ${titleColor}`}>{description}</p>
                    </div>
                </Slide>

                { children }

                <div className="h-auto w-full flex flex-col items-center">
                    <Slide direction={"up"} delay={3} duration={1000}>
                        <div className="mt-5 mb-[5vh] flex flex-row items-center gap-6">
                            <button className="h-auto w-[150px] lg:w-[250px] py-2 bg-black/50 rounded-full font-medium lg:font-semibold text-white">{ leftButtonText }</button>

                            { (rightButtonText) && (
                                <button className="h-auto w-[150px] lg:w-[250px] py-2 bg-white/60 rounded-full font-medium lg:font-semibold">{ rightButtonText }</button>
                            ) }
                        </div>
                    </Slide>

                    <IoIosArrowDown className="animate-bounce" size={24} color={"green"} />
                </div>
            </div>

        </section>
    );
};

export default ImageSectionComp;
