import meetImg from '../Img/jodi02.jpg'
import Footer from '../shared/footer';
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <body className="font-Slab">
      {/* Hero Section */}
      <div className='bg-Background01 bg-no-repeat bg-cover h-[35rem] sm:h-[40rem] md:h-[45rem]'>
        <nav className="flex flex-col sm:flex-row px-4 sm:px-[5rem] py-4 sm:py-[1.2rem] justify-between fixed w-screen z-20 items-center sm:items-start">
          <Link to={"/"}>
            <p className="text-xl font-bold text-white mb-2 sm:mb-0">LOGO</p>
          </Link>
          <div className="flex gap-4 sm:gap-4 w-full sm:w-[15rem] justify-center sm:justify-between">
            <Link to={"/signin"}>
              <button className="border px-4 sm:px-7 py-1 text-white bg-slate-700 rounded-md hover:-translate-y-1 duration-1000">SignIn</button>
            </Link>
            <Link to={"/login"}>
              <button className="border px-4 sm:px-7 py-1 text-white bg-slate-700 rounded-md hover:-translate-y-1 duration-1000">LogIn</button>
            </Link>          
          </div>
        </nav>

        <div className="flex flex-col justify-center items-center pt-[10rem] sm:pt-[14rem] font-bold text-blue-500 text-center px-4">
          <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] leading-tight">JODI ORGANIZATIONS</h1>
          <h5 className="text-[1rem] sm:text-[1.5rem] md:text-[2rem]">The World In Your Hands</h5>
        </div>
      </div>

      {/* Welcome Section */}
      <div className='px-4 sm:px-[1rem] py-6 sm:py-[2rem] m-3 rounded-md shadow-lg bg-slate-700 text-white'>
        <h2 className="text-[1.2rem] sm:text-[1.3rem] font-semibold mb-2">JODI WELCOMES YOU</h2>
        <p className='text-justify text-sm sm:text-base md:text-lg leading-relaxed'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quo sint ducimus delectus quia repellat. Dolor dolore quae, fugiat enim, inventore accusantium alias impedit eius, itaque laboriosam rem tempore aliquam.
          Ipsam dicta magnam nesciunt. Provident in corrupti labore. Pariatur inventore saepe officia ipsam voluptas reprehenderit similique tempore error itaque quae iure, sint asperiores ad ullam veniam aut. Quis, iusto sit.
          Officiis repellendus tenetur vero minus at. Cupiditate quasi magnam rem aliquid blanditiis! Magnam aspernatur autem enim laudantium officia repellendus rerum doloremque amet tempora beatae maiores quidem, molestiae saepe quibusdam sequi!
          Dolore veniam dignissimos nam doloribus voluptatem repellat enim tempora quasi, quidem atque, cumque, tenetur cum. Quam nesciunt, beatae, non itaque nobis ipsam exercitationem voluptate reprehenderit minus alias facilis, consequuntur nihil.
          Est inventore mollitia veritatis eveniet aspernatur quibusdam cumque harum non molestias, impedit officia animi rerum vel sapiente culpa tenetur nostrum fugiat molestiae obcaecati? Quis, quaerat! Obcaecati distinctio odit id adipisci!
          Fugiat distinctio id veniam, eum temporibus nisi officia omnis laborum aut placeat odio sint repudiandae? Ducimus non qui, sapiente nesciunt, animi enim rem eum molestiae explicabo, quod assumenda blanditiis repudiandae!
          Eum quo omnis totam adipisci eligendi quaerat? Totam quasi perspiciatis omnis nemo quos enim porro inventore, modi expedita voluptatibus minus at ipsum rerum recusandae quia hic labore quibusdam! Tempora, debitis?
          Totam iure mollitia, ratione incidunt fuga odit, unde porro iste, quibusdam consequatur in magnam. Cum earum dolor, cupiditate provident ullam at assumenda, repellendus dicta, aliquam impedit atque magnam quia ea?
          Odit officia libero ipsam, facere quae id aliquam cum est ea pariatur quidem consequatur qui distinctio fugiat aperiam magnam quisquam aut vitae adipisci iure? Illo voluptatibus quibusdam non est vero!                    
        </p>
      </div>      

      {/* Here at Jodi Section */}
      <div className='px-4 sm:px-[1rem] py-6 sm:py-[2rem] m-3 rounded-md shadow-lg bg-slate-700 text-white relative'>
        <h2 className="text-[1.2rem] sm:text-[1.3rem] font-semibold mb-2">HERE AT JODI</h2>
        <p className='text-justify text-sm sm:text-base md:text-lg leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quam non reiciendis nobis ad eos a doloremque excepturi dignissimos quos assumenda illum. Libero laboriosam earum minima eius quam harum atque.
          Perferendis eum temporibus eius iste libero nam at sit officiis, laborum voluptatum, dolorem blanditiis magnam. Adipisci, deserunt expedita illo quo nihil eligendi consectetur provident explicabo libero incidunt cum quibusdam vitae.
          Nesciunt dicta nam quia perspiciatis veniam nisi dolorem, saepe fuga explicabo reprehenderit libero tenetur!
        </p>

        {/* Responsive image */}
        <img 
          className='w-[18rem] sm:w-[20rem] h-[10rem] sm:h-[12rem] absolute top-4 sm:top-8 right-0 object-cover rounded-md' 
          src={meetImg} 
          alt="meetImg" 
        />

        <p className='text-justify text-sm sm:text-base md:text-lg leading-relaxed mt-6'>
          Hic perferendis praesentium laudantium, quasi animi reiciendis eos perspiciatis ullam labore nostrum atque harum id deleniti facilis similique, facere quos unde fuga quam quae sapiente?
          Iusto rem nulla repellat velit aliquam numquam sit culpa autem laborum tempore, adipisci corrupti eveniet architecto! Nihil porro repellat distinctio veniam! Corrupti, suscipit. Esse numquam mollitia doloribus iusto, aperiam qui?
          Dicta explicabo perspiciatis quasi voluptate doloribus esse dolore, impedit minus doloremque fuga accusantium, beatae numquam totam autem qui, in dignissimos alias quam debitis. Deleniti sed cumque molestiae sit, ipsa voluptate?
          Dolores, nesciunt sapiente labore reiciendis rerum tempore eos ratione odio accusamus ad perspiciatis architecto aperiam sed quia. Saepe accusantium laudantium optio explicabo, eius sunt quos veniam quasi cumque debitis numquam?
          Excepturi minus maiores nesciunt, rerum quae omnis odio error! At reiciendis doloremque aperiam alias fugiat, et ratione aspernatur, voluptatibus illo commodi rerum similique eveniet quaerat tempore saepe. Accusamus, cumque id!
          Quaerat natus itaque cupiditate officiis similique facere quod accusantium, pariatur temporibus voluptate ipsa ipsam. Dolore praesentium rerum aut sapiente maxime enim libero deleniti, similique ex, incidunt, provident pariatur? Autem, ab?
          Quod porro dolores, suscipit delectus exercitationem nobis optio ipsam veritatis earum voluptatem tempora ut deserunt eum molestias facilis ad eos repellendus provident et? Sed voluptate omnis accusantium molestias illum aspernatur.
        </p>
      </div>

      <Footer/>
    </body>
  );
}
