import ImageSectionComp from "./ImageSection_Comp";

const TerraAcademyComp = () => {
    return (
        <ImageSectionComp
            imageSource = "bg-[url('/assets/images/terra_academy_image_02.jpg')]"
            title = "TERRACADEMY"
            titleColor = "text-white"
            description="TerraGen Technical Training Academy"
            leftButtonText="Apply Now"
            rightButtonText="Learn More"
        >
            {/*<p className="h-auto w-[90%] md:w-[80%] lg:w-[60%] 2xl:w-[50%] mt-[40px] lg:mt-[70px] px-[25px] lg:px-[30px] py-[50px] lg:py-[70px] flex flex-col justify-center font-semibold text-white text-center bg-gradient-to-b from-transparent via-white/35 via-white/40 via-white/40 via-white/35 to-transparent z-10">
                The TerraGen Technical Training Academy, TerracademyTM, is structured to train and certify vendors and
                support staff with core skills peculiar to TerraGen's trade craft. The Academy is designed to ensure
                that vendors and technical support staff are well equipped with in-depth knowledge of Terragen's technology.
                The Academy offers various certifications and up-skilling programs in two different faculties. The School
                of Technical Certifications and the School of Up-skilling.
            </p>*/}

            <div className="flex items-center gap-10">
                <div className="flex flex-col items-center">
                    <img src="./assets/images/certificate_01.png" alt="Rethinking Power" className="h-[140px] w-auto" />
                    <p className="w-[170px] font-normal text-[0.8rem] text-center text-white">Product Engineering and Assembly Certification</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="./assets/images/certificate_02.png" alt="Rethinking Power" className="h-[140px] w-auto" />
                    <p className="w-[170px] font-normal text-[0.8rem] text-center text-white">Product Installation Certification</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="./assets/images/certificate_03.png" alt="Rethinking Power" className="h-[140px] w-auto" />
                    <p className="w-[170px] font-normal text-[0.8rem] text-center text-white">Product Servicing Certification</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="./assets/images/certificate_04.png" alt="Rethinking Power" className="h-[140px] w-auto" />
                    <p className="w-[170px] font-normal text-[0.8rem] text-center text-white">Technical Software Support Certification</p>
                </div>
            </div>
        </ImageSectionComp>
    );
};

export default TerraAcademyComp;
