import { Navbar } from "flowbite-react";
import Link from "next/link";

export default function home() {
  return (
    <>
      <Navbar fluid={true}>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500">
            Insert-notes
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="../">Home</Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-5xl font-semibold leading-none text-center">
            SUBJECT
          </h1>
        </div>
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto">
          {/* <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10"> */}
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg hover:border-x-2 border-x-blue-500 ">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 italic text-center dark:text-gray-100 bg-lime-200">
                Subject burn refers to the phenomenon where an individual
                becomes emotionally exhausted and disengaged from their job or
                field of study due to prolonged exposure to its demands and
                stressors.
              </p>
            </div>
            <Link
              href="subject/burn"
              className="flex flex-col items-center justify-center p-8 rounded-b-lg hover:bg-blue-500 cursor-pointer"
            >
              Burn
            </Link>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg hover:border-x-2 border-x-blue-500 cursor-pointer">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 italic text-center dark:text-gray-100 bg-lime-200">
                The cardiac system is responsible for pumping blood throughout
                the body and consists of the heart and blood vessels, including
                arteries, veins, and capillaries.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg hover:bg-blue-500 cursor-pointer">
              Cardiac
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg hover:border-x-2 border-x-blue-500 cursor-pointer">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 italic text-center dark:text-gray-100 bg-lime-200">
                The term "endocrine" refers to a system of glands in the body
                that produce and secrete hormones, which regulate various
                physiological processes such as metabolism, growth and
                development, and mood.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg hover:bg-blue-500 cursor-pointer">
              Endocrine
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg hover:border-x-2 border-x-blue-500 cursor-pointer">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 italic text-center dark:text-gray-100 bg-lime-200">
                Neurology is a branch of medicine that deals with the study and
                treatment of disorders of the nervous system, including the
                brain, spinal cord, and nerves.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg hover:bg-blue-500 cursor-pointer">
              Neurology
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg hover:border-x-2 border-x-blue-500 cursor-pointer">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 italic text-center dark:text-gray-100 bg-lime-200">
                Dermal refers to the layer of skin that lies beneath the
                epidermis and contains connective tissue, blood vessels, and
                nerve endings.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg hover:bg-blue-500 cursor-pointer">
              Dermal
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-lg hover:border-x-2 border-x-blue-500 cursor-pointer">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 italic text-center dark:text-gray-100 bg-lime-200">
                Respiratory refers to the system of organs and tissues in the
                body responsible for breathing, including the lungs, airways,
                and diaphragm.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg hover:bg-blue-500 cursor-pointer">
              Respiratory
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
