import Header from "../shared/header"
// import Buz5 from "../Img/jodi08.jpg"
import Buz3 from "../Img/jodi06.jpg"
import Dashcard from "../shared/dashcard"
import Buz4 from "../Img/jodi07.jpg"

export default function Statistics() {
    return(
        <body className="font-Slab">
            <Header/>
            
            {/* Hero Section */}
            <div className="group relative">
                <div className="bg-Background03 bg-no-repeat bg-cover h-[35rem] sm:h-[40rem] md:h-screen relative overflow-hidden">
                    <div className="flex flex-col justify-center items-center h-full w-full absolute top-0 left-0 bg-black/20 text-blue-500 font-bold transition-all duration-700 px-4 sm:px-6">
                        <h1 className="text-3xl sm:text-5xl md:text-[5rem] text-center">JODI ORGANIZATIONS</h1>
                        <h5 className="text-xl sm:text-2xl md:text-[2rem] text-center mt-2">The World In Your Hands</h5>
                    </div>
                </div>
            </div>           

            {/* Dashboard Cards */}
            <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-12 py-4 sm:py-8 gap-4 sm:gap-0">
               <Dashcard Heading={"PROJECT MANAGEMENT"} Img={Buz3}/>
               <Dashcard Heading={"INTERN DISCUSSIONS"} Img={Buz4}/>                
            </div> 
        </body>
    )
}
