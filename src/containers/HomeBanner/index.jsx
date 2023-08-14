import React from 'react'

const HomeBanner = () => {
  return (
    <>
    <section className="lg:pb-40 lg:pt-56 py-32" id="home">
          <div className="overflow-hidden">
            <img className="absolute inset-0 h-full w-full object-cover" src="assets/images/bg-home.jpg" alt="build your website image" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-900 to-purple-800 opacity-90" />
          </div>
          <div className="container">
            <div className="flex justify-center">
              <div className="lg:w-2/3 text-center relative">
                <div className="space-y-6 mb-10">
                  {/* Home Page Title */}
                  <h2 className="text-white md:text-[32px] lg:text-[46px] leading-[64px] capitalize ">
                    We help startups launch their products
                  </h2>
                  <p className="text-gray-300/80">Etiam sed.Interdum consequat proin vestibulum class at.Moltin gives you the
                    platform. A small <br /> river named Duden flows by their place and supplies it with the necessary
                    regelialia.</p>
                  {/* Video Modal Outline Button */}
                  <button type="button" className="btn border text-red-500 border-red-500 hover:bg-red-500 hover:text-white" data-modal-trigger aria-controls="modal-video" aria-expanded="false">
                    Watch Now <span className="mdi mdi-play-circle text-[20px] align-middle ltr:ml-2 rtl:mr-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <img src="assets/images/bg-pattern.png" alt="bg-pattern" className="block dark:hidden" />
            <img src="assets/images/bg-pattern-dark.png" alt="bg-pattern" className="hidden dark:block" />
          </div>
        </section>
    <div id="modal-video" data-modal-target className="hidden">
          <div className="flex items-center justify-center fixed inset-0 z-50">
            <div data-modal-close data-modal-overlay tabIndex={-1} data-class-in="opacity-50" data-class-out="opacity-0" className="opacity-0 fixed inset-0 w-full z-40 transition-opacity duration-300 bg-black select-none">
            </div>
            <div data-modal-wrapper data-class-in="opacity-100 translate-y-0" data-class-out="opacity-0 -translate-y-5" className="opacity-0 -translate-y-5 w-full z-50 overflow-auto max-w-3xl max-h-screen transition-all duration-300  flex flex-col transform rounded-md">
              <div className="absolute top-10 right-10 z-50">
                {/* Modal Close Button */}
                <button data-modal-close aria-label="Close" type="button" className="w-10 h-10 text-2xl bg-gray-50 rounded-lg bg-opacity-50 text-gray-700 hover:text-black focus:text-black transition ease-in-out duration-150 ml-auto">
                  <i className="mdi mdi-close text-center -z-20" />
                  <span className="sr-only">Close Button</span>
                </button>
              </div>
              <div className="relative overflow-x-hidden overflow-y-auto h-full flex-grow p-5">
                <video id="VisaChipCardVideo" className="w-full" controls>
                  {/* Modal Video */}
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default HomeBanner