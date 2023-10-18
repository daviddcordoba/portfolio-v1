"use client";
import imgDetail from '../assets/imgDetail.jpeg';
import imgDetail1 from '../assets/chimuDetail.jpeg';
import { useInView } from 'react-intersection-observer';
const data = [
  {
      name: 'Pig Commander',
      description: "Es una aplicación de finanzas que permite a los usuarios registrar sus gastos e ingresos financieros. Con esta aplicación, los usuarios pueden tener un seguimiento detallado de sus finanzas personales y tomar decisiones informadas sobre sus gastos e inversiones.",
      technologies:['NextJs','Tailwind','Express','PostgreSQL','Sequelize'],
      image: imgDetail,
      ref: {
        web: 'https://pig-commander-client-beta.vercel.app/',
        github:{
          back: 'https://github.com/RodrigoSpano/pig_Commander_api',
          front: 'https://github.com/RodrigoSpano/pig_commander_client'
        }
      }
  },
  {
    name: 'Chimu',
    description: 'Mi primer sitio web donde aprendi bastante sobre ReactJs y frameworks CSS como Tailwind',
    technologies: ['ReactJs', 'Tailwind','Firebase', 'NodeJs'],
    image: imgDetail1,
    ref: {
      web: 'https://chimu.netlify.app/',
      github:{
        front: 'https://github.com/danielhh-dev/chimu'
      }
    }
}
]
const Experience = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });
  return (


    <section 
    ref={ref}
     className={` flex flex-col justify-center w-full gap-5 p-2 ${ inView ? ' opacity-100 scale-[100%] transition-all duration-[2s]' : ' opacity-0 scale-[85%] transition-all duration-[2s]' }`}>

      <div className='flex items-center col-span-2 row-span-2 w-full'>
        <h2 className='text-[27px] font-bold'>02. Experiencia</h2>
        <hr className='border-1 border-[#b0aa99] w-1/2 ml-2 '></hr>
      </div>
        
        {data.map( (proyect,id) => (
           <div key={id} className={`flex flex-col md:flex-row mx-auto  p-5 bg-[#d8d2cb] gap-2 shadow-lg  `}>
            <div className='w-full h-auto flex flex-col gap-5'>
              <h2 className='text-[24px] font-semibold'>{proyect.name}</h2>
              <p className='text-[19px]'>{proyect.description}</p>
              <div>
                <ul className='flex gap-3 text-[#6a6b68] font-semibold'>
                  {proyect.technologies.map( (tech,id) => <li key={id}>{tech}</li>)}
                  
                </ul>
              </div>
              <div>
                <a title={Object.keys(proyect.ref)[0]} href={proyect.ref.web} className='p-2 text-[22px] hover:text-[#6a6b68] transition duration-500' target='_blanck'><i className="fa-solid fa-arrow-up-right-from-square "></i></a>
                {Object.keys(proyect.ref.github).length > 1 ? (
                  <>
                    <a  title={Object.keys(proyect.ref.github)[1]} href={proyect.ref.github.front} className='p-2 text-[28px] hover:text-[#6a6b68] transition duration-500' target='_blanck'><i className="fa-brands fa-github"></i></a>
                    <a  title={Object.keys(proyect.ref.github)[0]} href={proyect.ref.github.back} className='p-2 text-[28px] hover:text-[#6a6b68] transition duration-500' target='_blanck'><i className="fa-brands fa-github" ></i></a>
                  </>
                ): 
                <a  title={Object.keys(proyect.ref)[1]} href={proyect.ref.github.front} className='p-2 text-[28px] hover:text-[#6a6b68] transition duration-500' target='_blanck'><i className="fa-brands fa-github"></i></a>
                }
              </div>
            </div>
  
            <div>
              <img src={proyect.image} alt="" className='h-[300px] w-full md:h-[350px] md:w-[1400px]'/>
            </div>
         </div>
        ))}
       

        
      </section>

  )
}

export default Experience