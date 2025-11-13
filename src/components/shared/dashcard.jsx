export default function Dashcard({Heading, Img}) {
    return(
        <div className="border p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 md:space-y-7 rounded-md shadow-lg max-w-full">
            
            {/* Heading */}
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl">{Heading}</h2>
            
            {/* Image */}
            <img className="w-full sm:w-[20rem] md:w-[20rem] object-cover rounded" src={Img} alt="Buz" />

            {/* Paragraph */}
            <p className="w-full sm:w-[25rem] md:w-[30rem] text-justify text-sm sm:text-base md:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nemo quia provident ipsa fugiat blanditiis delectus odio, aliquam incidunt architecto, aut a optio accusamus cupiditate labore quod ullam iste eligendi.
                Autem non magni natus vel minus. Dolor aliquid minus dolores fuga ratione possimus nemo deleniti voluptatum, adipisci cupiditate, consequatur magni ullam hic, exercitationem sapiente vitae modi. Consectetur optio cupiditate ut.
                Accusamus magnam facilis odio voluptates recusandae nesciunt ea iste culpa rem aperiam, amet praesentium reiciendis officia facere deleniti eaque? Asperiores vitae doloribus consectetur quasi enim tempore, sapiente in vero sint.
            </p>

            {/* Button */}
            <button className="border px-4 py-1 sm:px-5 sm:py-1.5 rounded-md shadow-sm text-sm sm:text-base hover:bg-slate-100 transition">
                READ
            </button>
        </div>
    )
}
