import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom"
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export default function SignIn() {

    const [showpassword,setShowpassword] = useState(false)
    const [showpassword2,setShowpassword2] = useState(false)

    function Toogle1() {
        setShowpassword(!showpassword)
    }
    function Toogle2() {
        setShowpassword2(!showpassword2)
    }

    return(        
        <body className="bg-Background04 bg-cover bg-no-repeat min-h-screen font-Slab">            
            <div className="flex justify-center items-center h-screen px-4 sm:px-6">
                
                {/* Back Button */}
                <Link to={"/"} className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <button className="p-2 sm:p-4 flex justify-center items-center hover:text-white hover:bg-slate-700 duration-700 rounded-md">
                        <FaArrowLeft size={20}/>
                    </button>
                </Link>

                {/* Form */}
                <form className="space-y-3 sm:space-y-4 p-6 sm:p-10 rounded-md drop-shadow-lg bg-white/10">
                    <input 
                        className="w-[12rem] sm:w-[15rem] md:w-[18rem] h-[2rem] sm:h-[2.5rem] outline-none rounded-b-lg opacity-60 px-3 sm:px-6 text-sm sm:text-base" 
                        placeholder="Fullname" 
                        type="text" 
                    />
                    <input 
                        className="w-[12rem] sm:w-[15rem] md:w-[18rem] h-[2rem] sm:h-[2.5rem] outline-none rounded-b-lg opacity-60 px-3 sm:px-6 text-sm sm:text-base" 
                        placeholder="Email" 
                        type="text" 
                    />
                    <div className="relative">
                        <input 
                            className="w-[12rem] sm:w-[15rem] md:w-[18rem] h-[2rem] sm:h-[2.5rem] outline-none rounded-b-lg opacity-60 px-3 sm:px-6 text-sm sm:text-base" 
                            placeholder="Password" 
                            type={showpassword ? 'text' : 'password'} 
                        />
                        <span className="absolute top-1.5 sm:top-2 right-2 sm:right-3 cursor-pointer text-sm sm:text-base" onClick={Toogle1}>
                            {showpassword ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>}
                        </span>
                    </div>
                    <div className="relative">
                        <input 
                            className="w-[12rem] sm:w-[15rem] md:w-[18rem] h-[2rem] sm:h-[2.5rem] outline-none rounded-b-lg opacity-60 px-3 sm:px-6 text-sm sm:text-base" 
                            placeholder="Confirmpassword" 
                            type={showpassword2 ? 'text' : 'password'} 
                        />
                        <span className="absolute top-1.5 sm:top-2 right-2 sm:right-3 cursor-pointer text-sm sm:text-base" onClick={Toogle2}>
                            {showpassword2 ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>}
                        </span>
                    </div>       
                    <div className="flex justify-center">
                        <Link to={"/otp"}>
                            <button className="bg-slate-700 w-[6rem] sm:w-[7rem] py-1 sm:py-2 px-3 sm:px-4 rounded-md font-semibold text-white text-sm sm:text-base hover:bg-slate-800 transition">
                                SignIn
                            </button>
                        </Link>                        
                    </div>                                  
                </form>
            </div>
        </body>
    )    
}
