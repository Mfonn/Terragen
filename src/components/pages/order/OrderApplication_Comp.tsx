import { Form } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const OrderApplicationComp = ({ showOrderApplicationModal, toggleShowTCCApplicationModal }: { showOrderApplicationModal: boolean, toggleShowTCCApplicationModal: any }) => {

    return (
        <main className={`h-[calc(100%-70px)] w-full lg:w-[650px] px-5 pt-3 pb-10 fixed top-[70px] right-0 lg:right-0 bg-gray-100 transition-all ease-in-out duration-300 z-[999]
            overflow-auto [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:bg-gray-200
            ${ (showOrderApplicationModal) ? "translate-x-0" : "translate-x-full" }
        `}>

            <button onClick={ () => toggleShowTCCApplicationModal(false) } className="flex items-center gap-2 font-semibold">
                Close
                <IoClose size={ 22 } />
            </button>


            <Form action="#" className="h-auto w-full mt-10 px-10">
                <h3 className="font-semibold text-xl">Pre-Order Form</h3>

                <div className="form-group h-auto w-full mt-6">
                    <label htmlFor="name" className="form-label text-sm inline-block mb-1 text-gray-600">Name</label>
                    <input type="text" name="name"
                           className="form-control w-full bg-clip-padding border border-gray-200/70 bg-transparent rounded font-normal text-base px-3 py-3 shadow-sm shadow-gray-200
                              focus:bg-transparent focus:border-gray-400 focus:outline-none"
                    />
                </div>

                <div className="form-group h-auto w-full mt-4">
                    <label htmlFor="email" className="form-label text-sm inline-block mb-1 text-gray-600">Email</label>
                    <input type="email" name="email"
                           className="form-control w-full bg-clip-padding border border-gray-200/70 bg-transparent rounded font-normal text-base px-3 py-3 shadow-sm shadow-gray-200
                              focus:bg-transparent focus:border-gray-400 focus:outline-none"
                    />
                </div>

                <div className="form-group h-auto w-full mt-4">
                    <label htmlFor="phone" className="form-label text-sm inline-block mb-1 text-gray-600">Phone</label>
                    <input type="text" name="phone"
                           className="form-control w-full bg-clip-padding border border-gray-200/70 bg-transparent rounded font-normal text-base px-3 py-3 shadow-sm shadow-gray-200
                              focus:bg-transparent focus:border-gray-400 focus:outline-none"
                    />
                </div>

                <div className="form-group h-auto w-full mt-4">
                    <label htmlFor="address" className="form-label text-sm inline-block mb-1 text-gray-600">Address</label>
                    <input type="text" name="address"
                           className="form-control w-full bg-clip-padding border border-gray-200/70 bg-transparent rounded font-normal text-base px-3 py-3 shadow-sm shadow-gray-200
                              focus:bg-transparent focus:border-gray-400 focus:outline-none"
                    />
                </div>

                <div className="form-group h-auto w-full mt-4">
                    <label htmlFor="comment" className="form-label text-sm inline-block mb-1 text-gray-600">Comment</label>
                    <textarea name="comment"
                           className="form-control w-full bg-clip-padding border border-gray-200/70 bg-transparent rounded font-normal text-base px-3 py-3 shadow-sm shadow-gray-200
                              focus:bg-transparent focus:border-gray-400 focus:outline-none"
                    />
                </div>

                <div className="form-checkbox h-auto w-full mt-4 flex items-center gap-x-2 relative">
                    <label htmlFor="address" className="form-label text-sm inline-block text-gray-600">Notify me when product is available:</label>
                    <input type="checkbox" name="address" className="h-[18px] w-[18px] border-[1px] border-blue-800/20 rounded checked:bg-blue-800 checked:border-0 bg-white" />
                </div>

                <div className="flex justify-center">
                    <button type="button"
                            className="h-auto w-full lg:w-[250px] lg:mx-auto py-3.5 mt-10 bg-blue-900 hover:bg-black rounded-full outline-none font-normal text-white">
                        Submit
                    </button>
                </div>


            </Form>
        </main>
    );
};

export default OrderApplicationComp;
