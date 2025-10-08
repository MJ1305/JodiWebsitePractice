import Header from "../shared/header"

export default function Enquiries() {
    
    return(
        <body className="bg-Background02 bg-cover h-screen">
            <Header/>
            <div className="py-[6rem]">
                <div className="bg-slate-600 ml-[3rem] mr-[40rem] text-center">
                    <h1 className="px-4 text-white font-bold text-[3rem]">FOR MORE ENQUIRIES</h1>
                </div>                
                <form className="flex flex-col items-center py-10">
                    <div>
                        <textarea className="outline-none rounded-md opacity-60" placeholder="Complain Here" id="" cols="80" rows="10"></textarea>
                    </div>
                    <button type="submit" className=" bg-slate-700 border rounded-md text-white font-Slab px-[1rem] py-[0.3rem]">
                        Send
                    </button>
                </form>
            </div>
        </body>
    )
}