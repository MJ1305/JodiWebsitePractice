export default function Dashcard({Heading,Img}) {
    return(
        <div className="border p-[2rem] space-y-7 rounded-md shadow-lg">
            <h2 className="font-bold text-[2rem]">{Heading}</h2>
            <img className="w-[20rem]" src={Img} alt="Buz" />
            <p className="w-[30rem] text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nemo quia provident ipsa fugiat blanditiis delectus odio, aliquam incidunt architecto, aut a optio accusamus cupiditate labore quod ullam iste eligendi.
                Autem non magni natus vel minus. Dolor aliquid minus dolores fuga ratione possimus nemo deleniti voluptatum, adipisci cupiditate, consequatur magni ullam hic, exercitationem sapiente vitae modi. Consectetur optio cupiditate ut.
                Accusamus magnam facilis odio voluptates recusandae nesciunt ea iste culpa rem aperiam, amet praesentium reiciendis officia facere deleniti eaque? Asperiores vitae doloribus consectetur quasi enim tempore, sapiente in vero sint.
            </p>
            <button className="border px-[1rem] py-[0.3rem] rounded-md shadow-sm">
                READ
            </button>
        </div>
    )
}