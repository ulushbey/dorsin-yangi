const ServiceCard = ({service}) => {
    return (
        <div className="space-y-6 p-4 text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 leading-loose rounded-full text-4xl text-red-500 block mx-auto text-center items-center shadow-lg bg-white group-hover:bg-red-500 group-hover:text-white dark:bg-zinc-900/50">
                  <i className={service.icon} />
                </div>
                <h4 className="font-medium dark:text-white">{service.title}</h4>
                <p className=" text-gray-400 dark:text-gray-300/60">{service.text}</p>
              </div>
    )
} 

export default ServiceCard