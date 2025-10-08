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
        <body className="font-slab">
            <div className="bg-Background02 bg-no-repeat bg-cover">                                               
                <div className="flex flex-col h-screen justify-center items-center">
                    <Link to={"/"} className="top-0 absolute left-0">
                        <button className="p-5 justify-center flex hover:text-white hover:bg-slate-700 duration-700 rounded-md">
                            <FaArrowLeft/>
                        </button>
                    </Link> 
                    {/* <img className="w-[34rem] h-[24rem]" src={LoginImg} alt="LoginImg" /> */}
                    <form className="flex flex-col rounded-md space-y-5 drop-shadow-lg" action="">
                        <span>
                            <input className="w-[15rem] h-[2rem] outline-none rounded-b-lg opacity-60 px-7" placeholder="name or email" type="text" />
                        </span>
                        <span className="relative">
                            <input className="w-[15rem] h-[2rem] outline-none rounded-b-lg opacity-60 px-7" placeholder="password" type={showpassword ? 'text' : 'password'} />                            
                            <span className="absolute top-2 right-1 cursor-pointer" onClick={Toggle}>
                                {
                                   showpassword ?  <BsFillEyeFill/> : <BsFillEyeSlashFill/>
                                }                                   
                            </span>                        
                        </span>
                        <Link to={"/dashboard"}>
                            <div className="flex justify-center">
                                <button className="bg-slate-700 w-[7rem] py-1 px-3 rounded-md font-semibold text-white">
                                    Login
                                </button>
                            </div>  
                        </Link>                                              
                    </form>
                </div>
            </div>
            {/* <Footer/> */}
        </body>
    )
}