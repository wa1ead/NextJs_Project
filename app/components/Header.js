import Link from "next/link";
export default function Header() {
  return (
    <header className="text-gray-400 bg-gray-950 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          Walid DRAA
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about" className="mr-5 hover:text-white cursor-pointer">
            About
          </Link>
          <Link
            href="/projects"
            className="mr-5 hover:text-white cursor-pointer"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="mr-5 hover:text-white cursor-pointer"
          >
            Contact
          </Link>
        </nav>
        <Link href="/contact">
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Contact me
          </button>
        </Link>
      </div>
    </header>
  );
}
