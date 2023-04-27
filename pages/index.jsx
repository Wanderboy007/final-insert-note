import { Navbar } from "flowbite-react"; 
import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image"; 
import bg from "../public/bg.jpg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <>    


<Navbar
  fluid={true}
>
  <Navbar.Brand>
    <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500">
      Insert-notes
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    
  </Navbar.Collapse>
</Navbar>      
    
<div className=" h-screen w-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  ">

</div>

<div className=" absolute  top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
  <div className="px-4  mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Insert Note</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Insert Note is a website designed for nursing students to make
            notes, keep track of assignments and access study materials. Its
            user-friendly interface and mobile accessibility make it an ideal
            platform for studying on go.</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="./loggedin/home" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Login/Signup
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            
        </div> 
        </div>
</div> 

</>
  
}
