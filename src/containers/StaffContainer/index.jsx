import React from 'react'

const StaffContainer = () => {
  return (
    <section className="pt-6" id="team">
          <div className="container">
            <div className="flex justify-center">
              <div className="lg:w-2/3 space-y-5 text-center">
                {/* Section Title */}
                <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">Behind the People</h1>
                <div className="h-0.5 bg-red-500 w-14 mx-auto" />
                <p className="text-gray-400 dark:text-gray-300/60">It is a long established fact that create category leading
                  brand
                  experiences a reader will be distracted by the readable content of a page when looking at its
                  layout.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
              {/* Team Member 1 */}
              <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                <div className="text-center space-y-3">
                  <img alt="" src="assets/images/team/img-1.jpg" className="rounded" />
                  <div className="dark:text-white">
                    <a href="page-profile.html">Frank Johnson</a>
                  </div>
                  <div className="text-sm uppercase text-gray-400 dark:text-gray-300/60">CEO</div>
                  <div className="border-b dark:border-zinc-700/50" />
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                <div className="text-center space-y-3">
                  <img alt="" src="assets/images/team/img-2.jpg" className="rounded" />
                  <div className="dark:text-white">
                    <a href="page-profile.html">Elaine Stclair</a>
                  </div>
                  <div className="text-sm uppercase text-gray-400 dark:text-gray-300/60">Designer</div>
                  <div className="border-b dark:border-zinc-700/50" />
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                <div className="text-center space-y-3">
                  <img alt="" src="assets/images/team/img-3.jpg" className="rounded" />
                  <div className="dark:text-white">
                    <a href="page-profile.html">Wanda Arthur</a>
                  </div>
                  <div className="text-sm uppercase text-gray-400 dark:text-gray-300/60">developer</div>
                  <div className="border-b dark:border-zinc-700/50" />
                </div>
              </div>
              {/* Team Member 4 */}
              <div className="transform transition ease-in-out duration-300  hover:-translate-y-4">
                <div className="text-center space-y-3">
                  <img alt="" src="assets/images/team/img-4.jpg" className="rounded" />
                  <div className="dark:text-white">
                    <a href="page-profile.html">Joshua Stemple</a>
                  </div>
                  <div className="text-sm uppercase text-gray-400 dark:text-gray-300/60">manager</div>
                  <div className="border-b dark:border-zinc-700/50" />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default StaffContainer