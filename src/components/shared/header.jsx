import { Link } from "react-router-dom"

export default function Header() {
    return(
       <nav className="flex py-[1rem] fixed w-screen z-20 px-[5rem] justify-between font-Slab font-medium text-white ">
           <div className="flex w-[15rem] justify-evenly">
                <Link to={"/dashboard"}>
                    <div className="">
                        <button className=" bg-slate-700 rounded-md px-[0.7rem] py-[0.4rem]">Home</button>
                    </div>
                </Link>
                <Link to={"/statistics"}>
                    <div className="">
                        <button className=" bg-slate-700 rounded-md px-[0.7rem] py-[0.4rem]">Statistics</button>
                    </div>
                </Link>
           </div>
            <div className="w-[15rem] flex justify-around">                                  
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-slate-700 font-medium rounded-lg text-sm px-5 text-center inline-flex items-center hover:-translate-y-1 duration-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">More<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <Link to={"/profile"}>
                                <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</p>
                            </Link>                        
                        </li>
                        <li>
                            <Link to={"/enquiries"}>
                                <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Enquiries</p>
                            </Link>                            
                        </li>
                        <li>
                            <Link to={"/faqs"}>
                                <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Faqs</p>
                            </Link>                        
                        </li>
                        <li>
                            <Link to={"/login"}>
                                <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</p>
                            </Link>                        
                        </li>
                    </ul>
                </div>
            </div>
       </nav>

    )
}