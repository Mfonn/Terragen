import {Slide} from "react-awesome-reveal";
import {IoIosArrowDown} from "react-icons/io";

type propsType = {
    videoSource: string,
    title: string,
    titleColor: string,
    subTitle: string,
    description: string,
    leftButtonText: string,
    rightButtonText: string,
}

const VideoSectionComp = ({ videoSource, title, titleColor, subTitle, description, leftButtonText, rightButtonText }: propsType) => {

    return (
        <section className="h-screen w-full relative flex flex-col items-center justify-between">
            <video className="min-h-screen w-full object-cover" autoPlay loop muted>
                <source src={ videoSource } type="video/mp4" />
            </video>

            <div className="h-[200px] w-auto absolute mt-[70px] px-[30px] flex flex-col justify-center z-10">
                <Slide direction={"up"} delay={3} duration={1000}>
                    <h1 className={`font-bold font-montserrat text-3xl text-center  ${titleColor}`}>{ title }</h1>
                    <p className="mt-5 font-semibold text-center text-lg text-white">{ subTitle }</p>
                    <small className="mt-2 font-semibold text-center text-white">{ description }</small>
                </Slide>
            </div>

            <div className="absolute bottom-0 mb-[2vh] flex flex-col items-center z-10">
                <Slide direction={"up"} delay={3} duration={1000}>
                    <div className="mb-[5vh] flex flex-col lg:flex-row items-center gap-6">
                        <button className="h-auto w-[250px] py-2 bg-black/50 rounded-full font-extralight text-lg text-white">{ leftButtonText }</button>

                        { (rightButtonText !== "") && (
                            <button className="h-auto w-[250px] py-2 bg-white/70 rounded-full font-extralight text-[1.0rem]">{ rightButtonText }</button>
                        ) }
                    </div>
                </Slide>

                <IoIosArrowDown className="animate-bounce" size={24} color={"green"} />
            </div>
        </section>
    );
}

export default VideoSectionComp;