
/*==== Import Components ====*/
import AppLayoutHOC from "../components/layout/AppLayout_HOC";
import HeroSectionComp from "../components/pages/home/HeroSection_Comp";
import TerraAcademyComp from "../components/pages/home/TerraAcademy_Comp";
import TerraLabComp from "../components/pages/home/TerraLab_Comp";
import TerraShopComp from "../components/pages/home/TerraShop_Comp";
import TerraGenFeaturesComp from "../components/pages/home/TerraGenFeatures_Comp";



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

            <TerraGenFeaturesComp />

            <TerraAcademyComp />

            <TerraLabComp />

            <TerraShopComp />
        </AppLayoutHOC>
    );
};

export default HomeView;
