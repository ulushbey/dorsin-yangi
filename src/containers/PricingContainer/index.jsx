import React from 'react'
import Title from '../../components/Title'

const PricingContainer = () => {
  return (
   <section className="pt-12" id="pricing">
          <div className="container">
            <Title
            title={'Our Pricing'}
            text={`Call to action pricing table is really crucial to your for your
                  business website. Make your bids stand-out with amazing options.`}
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
              {/* Pricing Card Economy */}
              <div className="card text-center transform transition ease-in-out duration-300 hover:-translate-y-4 mb-4 dark:bg-zinc-900/30 dark:border-zinc-700/50">
                <div className="card-body">
                  <div className="space-y-2">
                    <h1 className="uppercase text-sm dark:text-white">Economy</h1>
                    <h1 className="text-4xl dark:text-white">$9.90</h1>
                    <h1 className="uppercase text-gray-400 dark:text-gray-300/60 text-xs">Billing Per Month</h1>
                  </div>
                  <hr className="my-7 dark:border-zinc-700/50" />
                  <div className="space-y-5">
                    <p className="dark:text-gray-300/80">Bandwidth: <span className="text-red-500 font-medium">1GB</span></p>
                    <p className="dark:text-gray-300/80">Onlinespace: <span className="text-red-500 font-medium">50MB</span></p>
                    <p className="dark:text-gray-300/80">Support: <span className="text-red-500 font-medium">No</span></p>
                    <p className="dark:text-gray-300/80"><span className="text-red-500 font-medium">1</span> Domain</p>
                    <p className="dark:text-gray-300/80"><span className="text-red-500 font-medium">No</span> Hidden Fees</p>
                  </div>
                  {/* Button */}
                  <a href="signup.html" className="btn bg-red-500 text-white mt-10">Join Now</a>
                </div>
              </div>
              {/* Pricing Card Deluxe (shadow-xl to Active Card) */}
              <div className="card text-center transform transition ease-in-out duration-300 hover:-translate-y-4 shadow-xl mb-4 dark:bg-zinc-900/30 dark:border-zinc-700/50">
                <div className="card-body">
                  <div className="space-y-2">
                    <h1 className="uppercase text-sm dark:text-white">Deluxe</h1>
                    <h1 className="text-4xl dark:text-white">$19.90</h1>
                    <h1 className="uppercase text-gray-400 dark:text-gray-300/60 text-xs">Billing Per Month</h1>
                  </div>
                  <hr className="my-7 dark:border-zinc-700/50" />
                  <div className="space-y-5">
                    <p className="dark:text-gray-300/80">Bandwidth: <span className="text-red-500 font-medium">10GB</span></p>
                    <p className="dark:text-gray-300/80">Onlinespace: <span className="text-red-500 font-medium">500MB</span></p>
                    <p className="dark:text-gray-300/80">Support: <span className="text-red-500 font-medium">Yes</span></p>
                    <p className="dark:text-gray-300/80"><span className="text-red-500 font-medium">10</span> Domain</p>
                    <p className="dark:text-gray-300/80"><span className="text-red-500 font-medium">No</span> Hidden Fees</p>
                  </div>
                  {/* Button */}
                  <a href="signup.html" className="btn bg-red-500 text-white mt-10">Join Now</a>
                </div>
              </div>
              {/* Pricing Card Ultimate */}
              <div className="card text-center transform transition ease-in-out duration-300 hover:-translate-y-4 mb-4 dark:bg-zinc-900/30 dark:border-zinc-700/50">
                <div className="card-body">
                  <div className="space-y-2">
                    <h1 className="uppercase text-sm dark:text-white">Ultimate</h1>
                    <h1 className="text-4xl dark:text-white">$29.90</h1>
                    <h1 className="uppercase text-gray-400 dark:text-gray-300/60 text-xs">Billing Per Month</h1>
                  </div>
                  <hr className="my-7 dark:border-zinc-700/50" />
                  <div className="space-y-5">
                    <p className="dark:text-gray-300/80">Bandwidth: <span className="text-red-500 font-medium">1GB</span></p>
                    <p className="dark:text-gray-300/80">Onlinespace: <span className="text-red-500 font-medium">2GB</span></p>
                    <p className="dark:text-gray-300/80">Support: <span className="text-red-500 font-medium">Yes</span></p>
                    <p className="dark:text-gray-300/80"><span className="text-red-500 font-medium">Unlimited</span> Domain</p>
                    <p className="dark:text-gray-300/80"><span className="text-red-500 font-medium">No</span> Hidden Fees</p>
                  </div>
                  {/* Button */}
                  <a href="signup.html" className="btn bg-red-500 text-white mt-10">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default PricingContainer