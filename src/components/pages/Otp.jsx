import { Link } from "react-router-dom"

export default function Otp() {
    
    
    
    return(
        <body className="bg-Background05 bg-cover bg-no-repeat">            
            <div className="flex flex-col justify-center items-center h-screen drop-shadow-md">
                <p className="font-bold opacity-70 text-white text-[2rem] p-2 rounded">OTP HAS BEEN SENT TO YOUR EMAIL</p>
                <div action="" className="space-x-4 p-10 rounded-md flex">
                    <div>                        
                        <input className="w-[3rem] h-[3rem] outline-none rounded-sm px-4"  type="text" />
                    </div>
                    <div>                        
                        <input className="w-[3rem] h-[3rem] outline-none rounded-sm px-4"  type="text" />
                    </div>
                    <div>                        
                        <input className="w-[3rem] h-[3rem] outline-none rounded-sm px-4"  type="text" />
                    </div>
                    <div>
                        <input className="w-[3rem] h-[3rem] outline-none rounded-sm px-4" type="text" />
                    </div>                           
                </div>   
                <p></p>    
                <Link to={"/login"}>
                    <div className="flex justify-center">
                        <button className="bg-slate-700 w-[7rem] py-1 px-3 rounded-md font-semibold text-white">Verify</button>
                    </div>    
                </Link>                                                         
            </div>
 
        </body>
    )
}