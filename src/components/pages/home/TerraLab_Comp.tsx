import { useState } from 'react';
import ImageSectionComp from "./ImageSection_Comp";

const TerraLabComp = () => {

    const [state, setState] = useState({
        selectedLabImage: "/assets/images/lab_01.png",
        selectedLabText: "TerraLab is our hardware development centre that serves to provide tools and expertise to clients seeking to produce custom hardware parts for their products or projects.",
        selectedLabList: [
            {
                image: "/assets/images/lab_01.png",
                text: "TerraLab is our hardware development centre that serves to provide tools and expertise to clients seeking to produce custom hardware parts for their products or projects.",
            },
            {
                image: "/assets/images/lab_02.png",
                text: "The TerraGen Technical Training Academy, TerracademyTM, is structured to train and certify vendors and support staff with core skills peculiar to TerraGen's trade craft.",
            },
            {
                image: "/assets/images/lab_03.png",
                text: "The Academy is designed to ensure that vendors and technical support staff are well equipped with in-depth knowledge of Terragen's technology.",
            },
            {
                image: "/assets/images/lab_04.png",
                text: "The Academy offers various certifications and up-skilling programs in two different faculties. The School of Technical Certifications and the School of Up-skilling."
            }
        ],
    });

    const handleChangeSelectedLabText = (index: number) => {
        setState(prevState => ({
            ...prevState,
            selectedLabImage: state.selectedLabList[index].image,
            selectedLabText: state.selectedLabList[index].text
        }));
    };

    return (
        <ImageSectionComp
            imageSource = "bg-[url('/assets/images/terra_lab_image_02.jpg')]"
            title = "TERRA LAB"
            titleColor = "text-white"
            description="TerraLab is our hardware development centre that serves to provide tools and expertise to clients
            seeking to produce custom hardware parts for their products or projects."
            leftButtonText="Pre-Order"
            rightButtonText="Learn More"
        >

            <div className="h-full w-full py-4 lg:py-10 flex flex-col lg:flex-row items-center justify-center">
                <aside className="h-full w-[50%] flex items-center justify-center">
                    <div className="h-auto w-full lg:hidden flex items-center justify-center gap-4 lg:gap-10">
                        <img src="/assets/images/lab_01.png" alt="Lab_01"
                             onMouseEnter={ () => handleChangeSelectedLabText(0) }
                             className="h-[70px] lg:h-[110px] w-auto bg-white p-1 lg:p-2 rounded-full cursor-pointer hover:animate-spinOnce"
                        />
                        <img src="/assets/images/lab_02.png" alt="Lab_02"
                             onMouseEnter={ () => handleChangeSelectedLabText(1) }
                             className="h-[70px] lg:h-[110px] w-auto bg-white p-1 lg:p-2 rounded-full cursor-pointer hover:animate-spinOnce"
                        />
                        <img src="/assets/images/lab_03.png" alt="Lab_03"
                             onMouseEnter={ () => handleChangeSelectedLabText(2) }
                             className="h-[70px] lg:h-[110px] w-auto bg-white p-1 lg:p-2 rounded-full cursor-pointer hover:animate-spinOnce"
                        />
                        <img src="/assets/images/lab_04.png" alt="Lab_04"
                             onMouseEnter={ () => handleChangeSelectedLabText(3) }
                             className="h-[70px] lg:h-[110px] w-auto bg-white p-1 lg:p-2 rounded-full cursor-pointer hover:animate-spinOnce"
                        />
                    </div>

                    <div className="h-[300px] lg:h-[350px] 2xl:h-[400px] w-[300px] lg:w-[350px] 2xl:w-[400px] relative hidden lg:flex items-center justify-center">
                        <img src="/assets/images/lab_01.png" alt="Lab_01"
                             onMouseEnter={ () => handleChangeSelectedLabText(0) }
                             className="h-[110px] w-auto absolute top-0 bg-white p-2 rounded-full cursor-pointer hover:animate-spinOnce"
                        />
                        <img src="/assets/images/lab_02.png" alt="Lab_02"
                             onMouseEnter={ () => handleChangeSelectedLabText(1) }
                             className="h-[110px] w-auto absolute right-0 bg-white p-2 rounded-full cursor-pointer hover:animate-spinOnce"
                        />
                        <img src="/assets/images/lab_03.png" alt="Lab_03"
                             onMouseEnter={ () => handleChangeSelectedLabText(2) }
                             className="h-[110px] w-auto absolute bottom-0 bg-white p-2 rounded-full cursor-pointer hover:animate-spinOnce"
                        />
                        <img src="/assets/images/lab_04.png" alt="Lab_04"
                             onMouseEnter={ () => handleChangeSelectedLabText(3) }
                             className="h-[110px] w-auto absolute left-0 bg-white p-2 rounded-full cursor-pointer hover:animate-spinOnce"
                        />
                    </div>
                </aside>

                <aside className="h-auto w-[85%] lg:w-[50%] pt-14 flex items-center justify-center">
                    <p className="h-[350px] xl:h-[400px] w-full xl:w-[400px] px-9 pt-5 relative flex flex-col justify-center text-white text-lg lg:text-xl text-center rounded-full bg-black/60">
                        <img src={ state.selectedLabImage } alt="Lab_01" className="h-[100px] w-[100px] mx-auto mb-14 hidden lg:block absolute -top-10 left-0 right-0 bg-white p-1 lg:p-2 rounded-full" />
                        { state.selectedLabText }
                    </p>
                </aside>
            </div>

        </ImageSectionComp>
    );
};

export default TerraLabComp;
