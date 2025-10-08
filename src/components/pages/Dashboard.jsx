import Header from "../shared/header"
import Buz2 from "../Img/jodi02.jpg"
import Buz from "../Img/jodi04.jpg"
import Buz3 from "../Img/jodi06.jpg"
import Buz4 from "../Img/jodi07.jpg"
import Buz5 from "../Img/jodi08.jpg"
import Dashcard from "../shared/dashcard"
import Footer from '../shared/footer';


export default function Dashboard() {

    return(
        <body className="font-Slab">
            <Header/>
            <div className="bg-Background03 bg-no-repeat bg-cover h-screen">
                <div className="py-3 flex flex-col justify-center items-center pt-[14rem] font-bold text-blue-500">
                    <h1 className="text-[5rem]">JODI ORGANIZATIONS</h1>
                    <h5 className="text-[2rem]">The World In Your Hands</h5>
                </div>
            </div>
            <div className="flex justify-between px-[3rem] py-[2rem]">
               <Dashcard Heading={"DEPENDENCIES"} Img={Buz}/>
               <Dashcard Heading={"HUMAN RESOURCES"} Img={Buz2}/>                
            </div>
            <div className=" mx-[5rem] rounded-lg group ">
                <div className="relative overflow-hidden rounded-lg h-[30rem]">
                    <img src={Buz5} alt="Buz5" />
                    <div className="absolute h-full w-full top-10 flex items-center justify-center opacity-0 bg-black/20 group-hover:top-0 group-hover:opacity-100 transition-all duration-700">
                        <div className="text-white text-justify px-[2rem]">
                            <h2 className="font-bold text-[2rem]">BOARD OF DIRECTORS</h2>
                            <p className="font-semibold">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur facere dolore, excepturi voluptatum molestias maiores molestiae ex, asperiores, necessitatibus sequi consectetur veniam incidunt dignissimos? Molestiae deserunt quas modi explicabo quos.
                                Explicabo officiis incidunt consectetur aspernatur tenetur perferendis corporis libero exercitationem hic est ipsa, saepe, esse, iusto fugiat culpa. Vel et veniam libero sunt officiis laboriosam corrupti officia nam. Eligendi, placeat?
                                Nisi ea nam odit aperiam atque quod repellat obcaecati hic sed incidunt dignissimos, qui error omnis sequi illum possimus eveniet placeat sunt! Quisquam doloribus, adipisci odit ratione quia voluptatem. Vero?
                            </p>
                            <button className="border px-[1rem]">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>    
            </div>  
            <div className="flex justify-between px-[3rem] py-[2rem]">
               <Dashcard Heading={"PROJECT MANAGMENT"} Img={Buz3}/>
               <Dashcard Heading={"INTERN DISCUSSIONS"} Img={Buz4}/>                
            </div>                                          
            <Footer/>
        </body>
    )    
}