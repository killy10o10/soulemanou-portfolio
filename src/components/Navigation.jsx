function Navigation() {
  return (
    <>
      <nav className="z-20 fixed top-0 left-0 z-90 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
              Soulemanou Babanou
            </span>
          </a>
          <div className="flex md:order-2">
            <div className="relative hidden md:flex  h-min overflow-hidden justify-center items-center rounded-md p-1">
              <div className="absolute w-36 h-10 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 animate-spin"></div>
              <button
                type="button"
                className="hidden z-20 md:block px-4 py-2  text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:outline-none md:mr-0 dark:bg-blue-600  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
                onClick={() =>
                  window.open(
                    'src/assets/Soulemanou_Bababou_Resume (1).pdf',
                    '_blank'
                  )
                }
              >
                My Resume
              </button>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#aboutme"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  <i className="fa-solid fa-user mx-4"></i>
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <i className="fa-solid fa-gear mx-4"></i>
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <i className="fa-solid fa-code mx-4"></i>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contactme"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <i className="fa-solid fa-address-book mx-4"></i>
                  Contact
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="md:hidden px-4 py-2 mt-2 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:outline-none md:mr-0 dark:bg-blue-600  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
                  onClick={() =>
                    window.open(
                      'src/assets/Soulemanou_Bababou_Resume (1).pdf',
                      '_blank'
                    )
                  }
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
