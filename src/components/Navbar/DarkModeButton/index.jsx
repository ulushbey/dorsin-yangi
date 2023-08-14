import React, { useEffect } from 'react'

const DarkModeButton = () => {
    function toggleTheme (e) {
        var themeMode = document.documentElement.getAttribute("data-mode");
        if (themeMode == "light") {
            document.documentElement.setAttribute("data-mode", "dark");
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.setAttribute("data-mode", "light");
            localStorage.setItem('theme', 'light')
        }
    }
  return (
    <div className="fixed ltr:left-0 rtl:right-0 top-80 flex flex-col gap-3 z-40">
          <button onClick={toggleTheme} id="mode" className="px-3 py-3 z-40 text-14 font-normal transition-all duration-300 ease-linear text-white bg-zinc-800 dark:bg-white ltr:rounded-r rtl:rounded-l">
            <i className="mdi mdi-white-balance-sunny text-xl dark:text-zinc-800 hidden dark:block" />
            <i className="mdi mdi-moon-waning-crescent text-xl dark:text-zinc-800 block dark:hidden " />
          </button>
        </div>
  )
}

export default DarkModeButton