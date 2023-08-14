import React from 'react'
import Title from '../../components/Title'
import servicesData from '../../data/services.data'
import ServiceCard from '../../components/ServiceCard'

const ServicesContainer = () => {
  return (
    <section id="services">
          <div className="container">
            <Title
            title='Bizning xizmatlar'
            text='Biz oliy ishlarga harakat qiladigan kishlarmiz. shuning uchun adashmang'
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16 mt-12">
              {
                servicesData.map((item, index) => (
                  <ServiceCard service={item} key={index}/>
                ))


              }
            
            </div>
          </div>
        </section>
  )
}

export default ServicesContainer