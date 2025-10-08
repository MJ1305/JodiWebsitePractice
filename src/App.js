export default function App() {
  
  return(
    <body>
      <h1>Hello world</h1>  
    </body>
  )
  
}







// export default function Acordion({Question,Text,Head1,Head2,Body1,Body2}) {
//   return(
//       <div id="accordion-collapse" data-accordion="collapse">
//           <h2 id={Head1}>
//               <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target={Body2} aria-expanded="true" aria-controls="accordion-collapse-body-1">
//               <span>What is Flowbite?</span>
//               <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
//               </svg>
//               </button>
//           </h2>
//           <div id={Body1} class="hidden" aria-labelledby={Head2}>
//               <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//               <p class="mb-2 text-gray-500 dark:text-gray-400">{Text}</p>
//               {/* <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p> */}
//               </div>
//           </div>           
//       </div>
//   )
// }