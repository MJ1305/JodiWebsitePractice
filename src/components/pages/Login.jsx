// import Footer from "../shared/footer"
import { FaArrowLeft } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom"
import { useState } from "react";

export default function Login() {

    const [showpassword,setShowpassword] = useState(false)

    function Toggle() {
        setShowpassword(!showpassword)
    }
    
    return(
        <body className="font-Slab">
            <div className="bg-Background02 bg-no-repeat bg-cover min-h-screen flex justify-center items-center">                                               
                {/* Back Button */}
                <Link to={"/"} className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <button className="p-2 sm:p-4 flex justify-center items-center hover:text-white hover:bg-slate-700 duration-700 rounded-md">
                        <FaArrowLeft size={20} />
                    </button>
                </Link> 

                {/* Form */}
                <form className="flex flex-col rounded-md space-y-4 sm:space-y-5 drop-shadow-lg bg-white/10 p-4 sm:p-6 md:p-8" action="">
                    <span>
                        <input 
                            className="w-[12rem] sm:w-[15rem] md:w-[18rem] h-[2rem] sm:h-[2.5rem] outline-none rounded-b-lg opacity-60 px-3 sm:px-7 text-sm sm:text-base" 
                            placeholder="name or email" 
                            type="text" 
                        />
                    </span>
                    <span className="relative">
                        <input 
                            className="w-[12rem] sm:w-[15rem] md:w-[18rem] h-[2rem] sm:h-[2.5rem] outline-none rounded-b-lg opacity-60 px-3 sm:px-7 text-sm sm:text-base" 
                            placeholder="password" 
                            type={showpassword ? 'text' : 'password'} 
                        />                            
                        <span className="absolute top-1.5 sm:top-2 right-2 sm:right-3 cursor-pointer text-sm sm:text-base" onClick={Toggle}>
                            {showpassword ?  <BsFillEyeFill/> : <BsFillEyeSlashFill/>}                                   
                        </span>                        
                    </span>
                    <Link to={"/dashboard"}>
                        <div className="flex justify-center">
                            <button className="bg-slate-700 w-[6rem] sm:w-[7rem] py-1 sm:py-2 px-3 sm:px-4 rounded-md font-semibold text-white text-sm sm:text-base hover:bg-slate-800 transition">
                                Login
                            </button>
                        </div>  
                    </Link>                                              
                </form>
            </div>
            {/* <Footer/> */}
        </body>
    )
}
