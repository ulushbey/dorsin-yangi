import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar-custom" id="navbar">
          <nav>
            <div className="lg:container flex flex-wrap items-center">
              {/* Main Logo */}
              <a href="index.html" className="flex lg:ml-0 ml-8">
                <span className="self-center text-xl font-poppins font-bold tracking-widest whitespace-nowrap uppercase text-white">
                  Dorsin
                </span>
              </a>
              <div className="flex items-center lg:order-2 rtl:mr-auto ltr:ml-auto lg:mr-0 mr-8">
                {/* Navbar Button */}
                <a href="signup.html" className="btn bg-red-500 text-white rounded-full translate-y-0">
                  Try it Free
                </a>
                {/* Navbar Collapse Manu Button */}
                <button data-collapse="menu-collapse" type="button" className="inline-flex items-center ml-3 text-sm text-white lg:hidden" aria-controls="menu-collapse" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <i className="mdi mdi-menu text-2xl" />
                </button>
              </div>
              {/* Navbar Manu */}
              <div className="justify-between items-center w-full lg:w-auto lg:flex hidden lg:order-1 ltr:lg:ml-14 rtl:lg:mr-14 rtl:mr-0 ltr:ml-0" id="menu-collapse">
                <ul className="navbar-nav lg:h-auto h-[290px] lg:overflow-visible overflow-y-scroll lg:ml-0 ml-8" id="navbar-navlist">
                  <li>
                    <div className="dropdown">
                      <a href="#home" className="nav-item dropdown-toggle" id="navbarDropdownOneButton" data-dropdown-toggle="navbarDropdownOne" aria-current="page">Home <i className="mdi mdi-chevron-down" /></a>
                      <div id="navbarDropdownOne" className="dropdown-menu">
                        <a href="index.html" className="dropdown-item">Home Page 1</a>
                        <a href="index-2.html" className="dropdown-item">Home Page 2</a>
                        <a href="index-3.html" className="dropdown-item">Home Page 3</a>
                        <a href="index-4.html" className="dropdown-item">Home Page 4</a>
                        <a href="index-5.html" className="dropdown-item">Home Page 5</a>
                        <a href="index-6.html" className="dropdown-item">Home Page 6</a>
                        <a href="index-7.html" className="dropdown-item">Home Page 7</a>
                        <a href="index-8.html" className="dropdown-item">Home Page 8</a>
                        <a href="index-9.html" className="dropdown-item">Home Page 9</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a data-scroll href="#services" className="nav-item">Services</a>
                  </li>
                  <li>
                    <a data-scroll href="#pricing" className="nav-item">Pricing</a>
                  </li>
                  <li>
                    <a data-scroll href="#team" className="nav-item">Team</a>
                  </li>
                  <li>
                    <a data-scroll href="#blog" className="nav-item">Blog</a>
                  </li>
                  <li>
                    <div className="dropdown">
                      <a href="#Authpage" className="nav-item dropdown-toggle" id="navbarDropdownTwoButton" data-dropdown-toggle="navbarDropdownTwo" aria-current="page">Auth Pages <i className="mdi mdi-chevron-down" /></a>
                      <div id="navbarDropdownTwo" className="dropdown-menu">
                        <a href="login.html" className="dropdown-item">Login</a>
                        <a href="signup.html" className="dropdown-item">Sign up</a>
                        <a href="password_forget.html" className="dropdown-item">Forget Password</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
  )
}

export default Navbar