
/*==== Import Components ====*/
import AppLayoutHOC from "../components/layout/AppLayout_HOC";
import HeroSectionComp from "../components/pages/home/HeroSection_Comp";
import TerraAcademyComp from "../components/pages/home/TerraAcademy_Comp";
import TerraLabComp from "../components/pages/home/TerraLab_Comp";
import TerraShopComp from "../components/pages/home/TerraShop_Comp";



const HomeView = () => {
    return (
        <AppLayoutHOC>
            <HeroSectionComp
                videoSource = "/assets/videos/pexels_video_2.mp4"
                title = "TerraGen"
                subTitle = "Loving The Earth Means Rethinking Power Generation"
                leftButtonText="Pre-Order"
                rightButtonText="Learn More"
            />

            <TerraAcademyComp />

            <TerraLabComp />

            <TerraShopComp />

            {/*<VideoSectionComp
                videoSource = "/assets/videos/pexels_video_6.mp4"
                title = "Blazing"
                titleColor = "text-white"
                subTitle = "From $31,890"
                description="After Federal Tax Credit & Est. Gas Savings"
                leftButtonText="Pre-Order"
                rightButtonText="Learn More"
            />

            <ImageSectionComp
                imageSource = "bg-[url('/assets/images/section_background_1.jpg')] text-white"
                title = "Section 1"
                titleColor = "text-white"
                description="A little description for this section."
                leftButtonText="Pre-Order"
                rightButtonText="Existing inventory"
            />

            <ImageSectionComp
                imageSource = "bg-[url('/assets/images/section_background_5.jpg')]"
                title = "Solar Roof"
                titleColor = "text-white"
                description="Produce Clean Energy From Your Roof."
                leftButtonText="Pre-Order"
                rightButtonText="Learn More"
            />*/}
        </AppLayoutHOC>
    );
};

export default HomeView;
