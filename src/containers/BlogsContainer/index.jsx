import React from 'react'

const BlogsContainer = () => {
  return (
    <section className="pt-12 bg-gray-50 dark:bg-zinc-900/30" id="blog">
          <div className="container">
            <div className="flex justify-center">
              <div className="lg:w-2/3 space-y-5 text-center">
                <h1 className="text-2xl text-gray-800 uppercase tracking-widest dark:text-white">Blog</h1>
                <div className="h-0.5 bg-red-500 w-14 mx-auto" />
                <p className="text-gray-400 dark:text-gray-300/60">Separated they live in Bookmarksgrove right at the
                  coast of the Semantics, a large language ocean class at a euismod mus ipsum vel ex finibus
                  semper
                  luctus quam.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
              <div>
                {/* Blog 1 */}
                <div className="transition-all ease-in-out duration-300 hover:-translate-y-4">
                  <img src="assets/images/blog/img-1.jpg" className="mb-4" alt="Blog img-1" />
                  <h1 className="text-gray-400 dark:text-gray-300/60 text-sm">UI &amp; UX Design</h1>
                  <h1 className="mb-2">
                    <a href="page-blog-details.html" className="text-xl hover:text-red-500 dark:text-white">Doing a cross country
                      road trip</a>
                  </h1>
                  <p className="text-gray-400 dark:text-gray-300/60 text-sm">We packed her seven versalia, put her initial into
                    the belt and made herself on the way..</p>
                  <div className="mt-4">
                    <a href="page-blog-details.html" className="text-red-500">
                      Read More <i className="mdi mdi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                {/* Blog 2 */}
                <div className="transition-all ease-in-out duration-300  hover:-translate-y-4">
                  <img src="assets/images/blog/img-2.jpg" className="mb-4" alt="Blog img-2" />
                  <h1 className="text-gray-400 dark:text-gray-300/60 text-sm ">Digital Marketing</h1>
                  <h1 className="mb-2">
                    <a href="page-blog-details.html" className="text-xl hover:text-red-500 dark:text-white">New exhibition at our
                      Museum</a>
                  </h1>
                  <p className="text-gray-400 dark:text-gray-300/60 text-sm ">Pityful a rethoric question ran over her cheek, then
                    she continued her way...</p>
                  <div className="mt-4">
                    <a href="page-blog-details.html" className="text-red-500">
                      Read More <i className="mdi mdi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                {/* Blog 3 */}
                <div className="transition-all ease-in-out duration-300  hover:-translate-y-4">
                  <img src="assets/images/blog/img-3.jpg" className="mb-4" alt="Blog img-3" />
                  <h1 className="text-gray-400 dark:text-gray-300/60 text-sm">Travelling</h1>
                  <h1 className="mb-2">
                    <a href="page-blog-details.html" className="text-xl hover:text-red-500 dark:text-white">Why are so many
                      people</a>
                  </h1>
                  <p className="text-gray-400 dark:text-gray-300/60 text-sm">Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.</p>
                  <div className="mt-4">
                    <a href="page-blog-details.html" className="text-red-500">
                      Read More <i className="mdi mdi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default BlogsContainer