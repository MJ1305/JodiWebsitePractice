import Header from "../shared/header"
import Footer from "../shared/footer"

export default function Faqs() {
    return (
        <body className="bg-Background03 bg-cover bg-no-repeat min-h-screen font-Slab">
            <Header />

            {/* Page Heading */}
            <h1 className="pt-[3rem] sm:pt-[5rem] pb-[1.5rem] px-4 sm:px-[2rem] font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] text-center">
                FREQUENTLY ASKED QUESTIONS!
            </h1>

            {/* Accordion Container */}
            <div className="mx-2 sm:mx-4 md:mx-[2rem] lg:mx-[4rem] rounded-lg bg-white opacity-90">
                <div id="accordion-collapse" data-accordion="collapse">

                    {/* FAQ Item Example */}
                    <h2 id="accordion-collapse-heading-1">
                        <button
                            type="button"
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-4 sm:p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-2 sm:gap-3"
                            data-accordion-target="#accordion-collapse-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-collapse-body-1"
                        >
                            <span className="text-left sm:text-base md:text-lg">What is Jodi?</span>
                            <svg
                                data-accordion-icon
                                className="w-3 h-3 rotate-180 shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>

                    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-4 sm:p-5 border border-b-0 border-gray-200">
                            <p className="mb-2 text-gray-500 text-sm sm:text-base md:text-lg">
                                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                            </p>
                            <p className="text-gray-500 text-sm sm:text-base md:text-lg">
                                Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.
                            </p>
                        </div>
                    </div>

                    {/* Repeat for other FAQs */}
                    {/* Make sure all headings and content have similar responsive classes as above */}
                    
                </div>
            </div>

            <Footer />
        </body>
    )
}
