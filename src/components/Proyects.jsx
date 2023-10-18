
const data = [
    {
        name: 'PigCommander',
        description: "Es una aplicación de finanzas que permite a los usuarios registrar sus gastos e ingresos financieros. Con esta aplicación, los usuarios pueden tener un seguimiento detallado de sus finanzas personales y tomar decisiones informadas sobre sus gastos e inversiones.",
        technologies: ['ReactJs , React-Router-Dom , Bootstrap , Toastify , Material Icons ,Reactstrap ,Sass ,Firebase,NodeJs']

    },
    {
        name: 'PigCommander',
        description: "Es una aplicación de finanzas que permite a los usuarios registrar sus gastos e ingresos financieros. Con esta aplicación, los usuarios pueden tener un seguimiento detallado de sus finanzas personales y tomar decisiones informadas sobre sus gastos e inversiones.",
        technologies:['Next.js','Tailwind','Express','PostgreSQL']
    }
]


import { useInView } from 'react-intersection-observer';

const Proyects = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.2,
      });
  return (
    <section 
    ref={ref}
    className={`my-6  flex flex-col gap-3 ${ inView ? ' opacity-100 scale-[100%] transition-all duration-[2s]' : ' opacity-0 scale-[85%] transition-all duration-[2s]' }`}>
        
        <h2 className="text-[27px] font-bold mb-4 text-center">03. Proyectos</h2>
        
        <div className="flex flex-col md:flex-row  gap-6 mx-auto">
        {data.map( (proyect,id) =>
        (
            <div ref={ref} key={id} className={` p-6 rounded-lg shadow-lg md:w-[400px] md:h-[450px] bg-[#d8d2cb] flex flex-col gap-2 transition-transform hover:transform hover:-translate-y-1 ${ inView ? ' opacity-100 scale-[100%] transition-all duration-[2s]' : ' opacity-0 scale-[85%] transition-all duration-[2s]' }`}>
            <div className="flex justify-between my-2">
                <i className="fa-regular fa-folder fa-3x"></i>
                <div className="" >
                    <a href="" className='p-2 text-[32px] hover:text-[#6a6b68] transition duration-500'><i className="fa-brands fa-github "></i></a>
                    <a href="" className='p-2 text-[26px] hover:text-[#6a6b68] transition duration-500'><i className="fa-solid fa-arrow-up-right-from-square "></i></a>
                </div>
            </div>
            <h2 className="text-[22px] font-bold mb-2">{proyect.name}</h2>
            <p className="mb-4 text-[19px]">{proyect.description}</p>
            <div>
                <ul className=" flex gap-3 text-[#6a6b68] font-semibold">
                    {proyect.technologies.map( t => <li key={t.id}>{t}</li>)}

                </ul>
            </div>
        </div>
        ))}

            

        </div>
    </section>
  )
}

export default Proyects