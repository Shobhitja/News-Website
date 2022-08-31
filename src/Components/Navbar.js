import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <header >

                <nav className="navbar fixed top-0 navbar-expand-lg shadow-md py-2 bg-teal-400 flex items-center w-full justify-between ">
                    <div className="px-6 w-full flex flex-wrap items-center justify-between">
                        <div className="flex items-center">
                            <button
                                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-black hover:text-gray-700 focus:text-black transition-shadow duration-150 ease-in-out mr-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContentY"
                                aria-controls="navbarSupportedContentY"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    className="w-5"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">

                                <li className="nav-item">
                                    <NavLink className="nav-link block pr-2 lg:px-2 py-2 text-black hover:text-gray-900 focus:text-black transition duration-150 ease-in-out font-semibold" to="/" data-mdb-ripple="true" data-mdb-ripple-color="light"> EarlyBird News</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link block pr-2 lg:px-2 py-2 text-blue-900 hover:text-blue-700 focus:text-rose-900 transition duration-150 ease-in-out" to="/" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</NavLink>
                                </li>




                                <li className="nav-item">
                                    <NavLink className="nav-link block pr-2 lg:px-2 py-2 text-blue-900 hover:text-blue-700 focus:text-rose-900 transition duration-150 ease-in-out" to="/about" data-mdb-ripple="true" data-mdb-ripple-color="light">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link block pr-2 lg:px-2 py-2 text-blue-900 hover:text-blue-700 focus:text-rose-900 transition duration-150 ease-in-out" to="/entertainment" data-mdb-ripple="true" data-mdb-ripple-color="light">Entertainment</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link block pr-2 lg:px-2 py-2 text-blue-900 hover:text-blue-700 focus:text-rose-900 transition duration-150 ease-in-out" to="/business" data-mdb-ripple="true" data-mdb-ripple-color="light">Business</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link block pr-2 lg:px-2 py-2 text-blue-900 hover:text-blue-700 focus:text-rose-900 transition duration-150 ease-in-out" to="/health" data-mdb-ripple="true" data-mdb-ripple-color="light">Health</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link block pr-2 lg:px-2 py-2 text-blue-900 hover:text-blue-700 focus:text-rose-900 transition duration-150 ease-in-out" to="/science" data-mdb-ripple="true" data-mdb-ripple-color="light">Science</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link block pr-2 lg:px-2 py-2 text-blue-900 hover:text-blue-700 focus:text-rose-900 transition duration-150 ease-in-out" to="/sports" data-mdb-ripple="true" data-mdb-ripple-color="light">Sports</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link block pr-2 lg:px-2 py-2 text-blue-900 hover:text-blue-700 focus:text-rose-900 transition duration-150 ease-in-out" to="/technology" data-mdb-ripple="true" data-mdb-ripple-color="light">Technology</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link block pr-2 lg: py-2 text-black hover:text-gray-900 font-semibold focus:text-rose-900 transition duration-150 ease-in-out ml-[43rem]" to="/signUp" data-mdb-ripple="true" data-mdb-ripple-color="light">SignUp</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}

export default Navbar