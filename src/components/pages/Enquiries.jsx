import Header from "../shared/header"

export default function Enquiries() {
    return (
        <body className="bg-Background02 bg-cover min-h-screen font-Slab">
            <Header />

            <div className="py-[4rem] sm:py-[6rem] px-4 sm:px-8">
                {/* Heading */}
                <div className="bg-slate-600 text-center mx-auto max-w-[90%] sm:max-w-[80%] md:ml-[3rem] md:mr-[40rem] rounded-md">
                    <h1 className="px-2 sm:px-4 text-white font-bold text-[1.8rem] sm:text-[2.5rem] md:text-[3rem] leading-tight">
                        FOR MORE ENQUIRIES
                    </h1>
                </div>

                {/* Form Section */}
                <form className="flex flex-col items-center py-10 space-y-4">
                    <div className="w-full flex justify-center">
                        <textarea
                            className="outline-none rounded-md opacity-70 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] h-[10rem] sm:h-[12rem] md:h-[14rem] p-3 text-sm sm:text-base resize-none"
                            placeholder="Complain Here"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-slate-700 border rounded-md text-white font-Slab px-[1.5rem] py-[0.4rem] text-sm sm:text-base hover:bg-slate-800 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </body>
    )
}
