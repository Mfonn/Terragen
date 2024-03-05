import ImageSectionComp from "./ImageSection_Comp";

const TerraShopComp = () => {

    const productList = [
        {
            image: "/assets/images/product_01.png",
            name: "Terra Hoodies",
            description: "Select smart, shop smarter.",
            price: "₦5000",
        },
        {
            image: "/assets/images/product_03.png",
            name: "Terra Polo",
            description: "Select smart, shop smarter.",
            price: "₦5000",
        },
        {
            image: "/assets/images/product_04.png",
            name: "Terra T-Shirt",
            description: "Select smart, shop smarter.",
            price: "₦5000",
        },
        {
            image: "/assets/images/product_02.png",
            name: "Terra Sweater",
            description: "Select smart, shop smarter.",
            price: "₦5000",
        },
        {
            image: "/assets/images/product_05.png",
            name: "Terra Cap",
            description: "Select smart, shop smarter.",
            price: "₦5000",
        },
    ];

    return (
        <ImageSectionComp
            imageSource = "bg-[url('/assets/images/terra_shop_01.jpg')]"
            title = "Terra Shop"
            titleColor = "text-white"
            description="Select smart, shop smarter."
            leftButtonText="View More"
            rightButtonText=""
        >

            <div className="h-full w-full container py-4 lg:py-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-14
            overflow-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-[#303030]">
                {productList.map((eachProductItem) => (
                    <div key={ eachProductItem.name }
                        // onMouseEnter={ () => handleUpdateMenuIndex(index) }
                        className="h-auto w-full mx-auto p-5 lg:p-7 flex flex-col items-center justify-center rounded-md bg-black/50">
                        <img src={ eachProductItem.image } alt="Terra Product" className="h-[200px] w-auto rounded-md bg-gray-600/40" />
                        <h3 className="mt-5 font-semibold text-xl text-white">{ eachProductItem.name }</h3>
                        <p className="text-white">{ eachProductItem.description }</p>
                        <div className="h-auto w-[320px] md:w-full mt-5 flex items-center justify-between">
                            <small className="font-medium text-white">{ eachProductItem.price }</small>
                            <button className="px-5 py-2 rounded-full font-medium text-xs text-white bg-white/30">Order Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </ImageSectionComp>
    );
};

export default TerraShopComp;
