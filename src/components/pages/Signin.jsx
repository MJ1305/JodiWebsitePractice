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
        <body className="bg-Background04 bg-cover h-screen bg-no-repeat">            
            <div className="flex justify-center items-center h-screen">
                <Link to={"/"} className="top-0 absolute left-0">
                    <button className="p-5 justify-center flex hover:text-white hover:bg-slate-700 duration-700 rounded-md">
                        <FaArrowLeft/>
                    </button>
                </Link>
                <form action="" className="space-y-4 p-10 rounded-md drop-shadow-lg">
                    <div>                        
                        <input className="w-[15rem] h-[2rem] outline-none rounded-b-lg opacity-60 px-6" placeholder="Fullname" type="text" />
                    </div>
                    <div>                        
                        <input className="w-[15rem] h-[2rem] outline-none rounded-b-lg opacity-60 px-6" placeholder="Email" type="text" />
                    </div>
                    <div className="relative">                        
                        <input className="w-[15rem] h-[2rem] outline-none rounded-b-lg opacity-60 px-6" placeholder="Password" type={showpassword ? 'text' : 'password'} />
                        <span className="absolute top-2 right-1 cursor-pointer" onClick={Toogle1}>
                            {
                                showpassword ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>
                            }
                        </span>
                    </div>
                    <div className="relative">
                        <input className="w-[15rem] h-[2rem] outline-none rounded-b-lg opacity-60 px-6" placeholder="Confirmpassowrd" type={showpassword2 ? 'text' : 'password'} />
                        <span className="absolute top-2 right-1 cursor-pointer" onClick={Toogle2}>
                            {
                                showpassword2 ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>
                            }
                        </span>
                    </div>       
                    <div className="flex justify-center">
                        <Link to={"/otp"}>
                            <button className="bg-slate-700 w-[7rem] py-1 px-3 rounded-md font-semibold text-white">SignIn</button>
                        </Link>                        
                    </div>                                    
                </form>
            </div>
        </body>
    )    
}