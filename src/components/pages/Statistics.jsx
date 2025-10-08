import Header from "../shared/header"
// import Buz5 from "../Img/jodi08.jpg"
import Buz3 from "../Img/jodi06.jpg"
import Dashcard from "../shared/dashcard"
import Buz4 from "../Img/jodi07.jpg"


export default function Statistics() {

    return(
        <body>
            <Header/>
            <div className="group">
                <div className="bg-Background03 bg-no-repeat bg-cover h-screen relative overflow-hidden ">
                    <div className="py-3 flex flex-col justify-center items-center h-full border border-red-800 mr-[5rem] w-full font-bold text-blue-500 absolute bg-black/20 opacity-100 group-hover:top-0 group-hover:opacity-100 transition-all duration-700">
                        <h1 className="text-[5rem]">JODI ORGANIZATIONS</h1>
                        <h5 className="text-[2rem]">The World In Your Hands</h5>
                    </div>
                </div>
            </div>           
            <div className="flex justify-between px-[3rem] py-[2rem]">
               <Dashcard Heading={"PROJECT MANAGMENT"} Img={Buz3}/>
               <Dashcard Heading={"INTERN DISCUSSIONS"} Img={Buz4}/>                
            </div> 
        </body>
    )
}