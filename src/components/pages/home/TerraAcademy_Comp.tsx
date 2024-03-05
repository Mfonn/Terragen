import ImageSectionComp from "./ImageSection_Comp";

const TerraAcademyComp = () => {
    return (
        <ImageSectionComp
            imageSource = "bg-[url('/assets/images/terra_academy_image_02.jpg')]"
            title = "TERRA ACADEMY"
            titleColor = "text-white"
            description="TerraGen Technical Training Academy"
            leftButtonText="Apply Now"
            rightButtonText="Learn More"
        >
            <p className="h-auto w-[90%] md:w-[80%] lg:w-[60%] 2xl:w-[50%] mt-[40px] lg:mt-[70px] px-[25px] lg:px-[30px] py-[80px] lg:py-[100px] flex flex-col justify-center font-semibold text-white text-center bg-gradient-to-b from-transparent via-white/35 via-white/40 via-white/40 via-white/35 to-transparent z-10">
                The TerraGen Technical Training Academy, TerracademyTM, is structured to train and certify vendors and
                support staff with core skills peculiar to TerraGen's trade craft. The Academy is designed to ensure
                that vendors and technical support staff are well equipped with in-depth knowledge of Terragen's technology.
                The Academy offers various certifications and up-skilling programs in two different faculties. The School
                of Technical Certifications and the School of Up-skilling.
            </p>
        </ImageSectionComp>
    );
};

export default TerraAcademyComp;
