import Header from "../shared/header"
import Buz2 from "../Img/jodi02.jpg"
import Buz from "../Img/jodi04.jpg"
import Buz3 from "../Img/jodi06.jpg"
import Buz4 from "../Img/jodi07.jpg"
import Buz5 from "../Img/jodi08.jpg"
import Dashcard from "../shared/dashcard"
import Footer from '../shared/footer';

export default function Dashboard() {
    return (
        <body className="font-Slab">
            <Header />
            
            {/* Hero Section */}
            <div className="bg-Background03 bg-no-repeat bg-cover min-h-[60vh] flex flex-col justify-center items-center text-center px-4">
                <div className="py-3 pt-[14rem] md:pt-[10rem] font-bold text-blue-500">
                    <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] leading-tight">
                        JODI ORGANIZATIONS
                    </h1>
                    <h5 className="text-[1.2rem] sm:text-[1.5rem] md:text-[2rem]">
                        The World In Your Hands
                    </h5>
                </div>
            </div>

            {/* First Card Row */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 px-4 sm:px-6 md:px-12 py-8">
                <Dashcard Heading={"DEPENDENCIES"} Img={Buz} />
                <Dashcard Heading={"HUMAN RESOURCES"} Img={Buz2} />
            </div>

            {/* Board of Directors Section */}
            <div className="mx-4 sm:mx-6 md:mx-12 rounded-lg group my-8">
                <div className="relative overflow-hidden rounded-lg h-[25rem] sm:h-[28rem] md:h-[32rem]">
                    <img src={Buz5} alt="Buz5" className="w-full h-full object-cover" />
                    <div className="absolute h-full w-full top-10 flex items-center justify-center opacity-0 bg-black/20 group-hover:top-0 group-hover:opacity-100 transition-all duration-700">
                        <div className="text-white text-justify px-4 sm:px-6 max-w-full sm:max-w-[80%]">
                            <h2 className="font-bold text-[1.5rem] sm:text-[2rem] mb-3 text-center sm:text-left">BOARD OF DIRECTORS</h2>
                            <p className="font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur facere dolore, excepturi voluptatum molestias maiores molestiae ex, asperiores, necessitatibus sequi consectetur veniam incidunt dignissimos? Molestiae deserunt quas modi explicabo quos.
                                Explicabo officiis incidunt consectetur aspernatur tenetur perferendis corporis libero exercitationem hic est ipsa, saepe, esse, iusto fugiat culpa. Vel et veniam libero sunt officiis laboriosam corrupti officia nam. Eligendi, placeat?
                                Nisi ea nam odit aperiam atque quod repellat obcaecati hic sed incidunt dignissimos, qui error omnis sequi illum possimus eveniet placeat sunt! Quisquam doloribus, adipisci odit ratione quia voluptatem. Vero?
                            </p>
                            <div className="text-center sm:text-left mt-4">
                                <button className="border px-4 py-1 mt-2 hover:bg-white hover:text-black transition">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Card Row */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 px-4 sm:px-6 md:px-12 py-8">
                <Dashcard Heading={"PROJECT MANAGMENT"} Img={Buz3} />
                <Dashcard Heading={"INTERN DISCUSSIONS"} Img={Buz4} />
            </div>

            <Footer />
        </body>
    )
}
