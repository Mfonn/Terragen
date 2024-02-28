
import { Slide } from "react-awesome-reveal";
import { IoIosArrowDown } from "react-icons/io";

type propsType = {
    imageSource: string,
    title: string,
    titleColor: string,
    description: string,
    leftButtonText: string,
    rightButtonText: string,
}

const ImageSectionComp = ({ title, titleColor, description, imageSource, leftButtonText, rightButtonText }: propsType) => {

    return (
        <section className={`h-screen w-full flex flex-col items-center justify-between bg-cover ${imageSource}`}>
            <Slide direction={"up"} delay={3} duration={1000}>
                <div className="mt-[15vh] text-center">
                    <h1 className={`font-bold font-montserrat text-3xl ${titleColor}`}>{title}</h1>
                    <p className={`${titleColor} font-semibold`}>{description}</p>
                </div>
            </Slide>

            <div className="h-auto w-full mb-[2vh] flex flex-col items-center">
                <Slide direction={"up"} delay={3} duration={1000}>
                    <div className="mb-[5vh] flex flex-col lg:flex-row items-center gap-6">
                        <button className="h-auto w-[250px] py-2 bg-black/50 rounded-full font-extralight text-lg text-white">{ leftButtonText }</button>

                        { (rightButtonText) && (
                            <button className="h-auto w-[250px] py-2 bg-white/70 rounded-full font-extralight text-[1.0rem]">{ rightButtonText }</button>
                        ) }
                    </div>
                </Slide>

                <IoIosArrowDown className="animate-bounce" size={24} color={"green"} />
            </div>

        </section>
    );
};

export default ImageSectionComp;
