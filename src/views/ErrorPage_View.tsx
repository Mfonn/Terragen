import { Link, useRouteError } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";


const ErrorPageView = () => {

    const error:any = useRouteError();
    const metaData = {
        title: "TerraGen - Error",
    };

    return (error?.status === 404) ? (
        <main className="h-screen w-full grid place-content-center text-center relative">
            <HelmetProvider>
                <Helmet {...metaData} />
            </HelmetProvider>

            <video src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/404-error-7362259-6014988.mp4"
                   className="h-[150px] md:h-[200px] w-auto mx-auto" autoPlay muted loop playsInline
            />
            <h3 className="mt-2 font-bold text-navyBlue text-xl md:text-3xl">Page Not Found</h3>

            <p className="w-[85%] mt-3 mx-auto text-gray-500 text-sm md:text-base">We're sorry, the page you requested could not be found please go back to the home page.</p>

            <Link to="/home">
                <button className="h-auto w-[150px] md:w-[200px] mx-auto mt-8 p-3 md:p-4 bg-navyBlue rounded-md text-center text-sm md:text-base text-white">Go To Home</button>
            </Link>
        </main>
    ) : (
        <main className="h-screen w-full grid place-content-center text-center relative">
            <HelmetProvider>
                <Helmet {...metaData} />
            </HelmetProvider>

            <img src="/assets/images/error.png" alt="404 Image" className="h-[120px] md:h-[220px] w-auto mx-auto" />

            <h3 className="mt-2 font-bold text-navyBlue text-xl md:text-3xl">{ error.statusText }</h3>
            <p className="mt-3 mx-auto text-gray-500 text-sm md:text-base">
                Sorry, an unexpected error has occurred.<br />
                Please try again later.
            </p>

            <Link to="/home">
                <button className="h-auto w-[150px] md:w-[200px] mx-auto mt-8 p-3 md:p-4 bg-navyBlue rounded-md text-center text-sm md:text-base text-white">Go To Home</button>
            </Link>
        </main>
    );
};

export default ErrorPageView;
