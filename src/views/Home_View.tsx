
/*==== Import Components ====*/
import AppLayoutHOC from "../components/layout/AppLayout_HOC";
import HeroSectionComp from "../components/pages/home/HeroSection_Comp";
import VideoSectionComp from "../components/pages/home/VideoSection_Comp";
import ImageSectionComp from "../components/pages/home/ImageSection_Comp";


const HomeView = () => {
    return (
        <AppLayoutHOC>
            <HeroSectionComp
                videoSource = "/assets/videos/pexels_video_2.mp4"
                title = "Blazing"
                subTitle = "From $31,890"
                description="After Federal Tax Credit & Est. Gas Savings"
                leftButtonText="Custom order"
                rightButtonText="Learn More"
            />

            <ImageSectionComp
                imageSource = "bg-[url('./assets/images/section_background_4.jpg')]"
                title = "Solar Roof"
                titleColor = "text-white"
                description="Produce Clean Energy From Your Roof."
                leftButtonText="Custom order"
                rightButtonText="Learn More"
            />

            <ImageSectionComp
                imageSource = "bg-[url('./assets/images/section_background_2.jpg')]"
                title = "Solar Roof"
                titleColor = "text-white"
                description="Produce Clean Energy From Your Roof."
                leftButtonText="Custom order"
                rightButtonText="Learn More"
            />

            <ImageSectionComp
                imageSource = "bg-[url('./assets/images/section_background_3.jpg')]"
                title = "Solar Roof"
                titleColor = "text-black"
                description="Produce Clean Energy From Your Roof."
                leftButtonText="Custom order"
                rightButtonText="Learn More"
            />

            <VideoSectionComp
                videoSource = "/assets/videos/pexels_video_6.mp4"
                title = "Blazing"
                titleColor = "text-white"
                subTitle = "From $31,890"
                description="After Federal Tax Credit & Est. Gas Savings"
                leftButtonText="Custom order"
                rightButtonText="Learn More"
            />

            <ImageSectionComp
                imageSource = "bg-[url('./assets/images/section_background_1.jpg')] text-white"
                title = "Section 1"
                titleColor = "text-white"
                description="A little description for this section."
                leftButtonText="Custom order"
                rightButtonText="Existing inventory"
            />

            <ImageSectionComp
                imageSource = "bg-[url('./assets/images/section_background_5.jpg')]"
                title = "Solar Roof"
                titleColor = "text-white"
                description="Produce Clean Energy From Your Roof."
                leftButtonText="Custom order"
                rightButtonText="Learn More"
            />
        </AppLayoutHOC>
    );
};

export default HomeView;
