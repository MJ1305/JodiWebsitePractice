import { Link } from "react-router-dom"

export default function Otp() {
    return(
        <body className="bg-Background05 bg-cover bg-no-repeat min-h-screen font-Slab">            
            <div className="flex flex-col justify-center items-center h-screen drop-shadow-md px-4 sm:px-6">
                {/* OTP Message */}
                <p className="font-bold opacity-70 text-white text-[1.5rem] sm:text-[2rem] md:text-[2.2rem] p-2 rounded text-center">
                    OTP HAS BEEN SENT TO YOUR EMAIL
                </p>

                {/* OTP Input Fields */}
                <div className="flex space-x-2 sm:space-x-4 p-6 sm:p-10 rounded-md">
                    {[...Array(4)].map((_, i) => (
                        <input
                            key={i}
                            className="w-[2.5rem] sm:w-[3rem] h-[2.5rem] sm:h-[3rem] outline-none rounded-sm text-center text-base sm:text-lg"
                            type="text"
                        />
                    ))}
                </div>   

                {/* Verify Button */}
                <Link to={"/login"}>
                    <div className="flex justify-center mt-4">
                        <button className="bg-slate-700 w-[6rem] sm:w-[7rem] py-1 sm:py-2 px-3 sm:px-4 rounded-md font-semibold text-white text-sm sm:text-base hover:bg-slate-800 transition">
                            Verify
                        </button>
                    </div>    
                </Link>                                                     
            </div>
        </body>
    )
}
