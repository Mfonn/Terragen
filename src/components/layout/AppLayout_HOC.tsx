import { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

/*==== Import Components ====*/
import AppHeaderComp from "./AppHeader_Comp";
import AppFooterComp from "./AppFooter_Comp";

const AppLayoutHOC = ({ children }: PropsWithChildren) => {

    const location = useLocation();

    const metaData = {
        title: (location.pathname === "/home")
            ? "TerraGen - Home"
            : (location.pathname === "/about_us")
                ? "TerraGen - About Us"
                : (location.pathname === "/services")
                    ? "TerraGen - Services"
                    : "TerraGen - Contact Us",
        meta: [
            {
                name: "description",
                content: "TerraGen: We are building a new reality in Power generation."
            },
            {
                name: "keywords",
                content: "TerraGen, Power Generation, Energy Generation, Electricity, Solar"
            },
            {
                name: "author",
                content: "Osondu Tochukwu (tosolife@yahoo.com)"
            }
        ],
    };

    return (
        <main className="h-full w-full">
            <HelmetProvider>
                <Helmet {...metaData} />
            </HelmetProvider>

            {/*==== Header ====*/}
            <header>
                <AppHeaderComp />
            </header>

            {/*==== Main Body ====*/}
            <div className="h-full w-full">
                { children }
            </div>

            {/*==== Footer ====*/}
            <footer>
                <AppFooterComp />
            </footer>
        </main>
    );
};

export default AppLayoutHOC;
