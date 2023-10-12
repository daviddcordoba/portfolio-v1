
import imagen from '../assets/profile.jpg';

const About = () => {
  return (
    <section className="my-16 grid grid-cols-1 md:grid-cols-2 md:mx-[15rem]  justify-items-center ">

          <div className='flex items-center col-span-2 row-span-2 w-full'>
            <h2 className=' my-6 text-left  text-[27px] font-bold'>01. Sobre mi</h2>
            <hr className='border-1 border-[#b0aa99] w-1/2 ml-2 '></hr>
          </div>
          
          <div className='col-span-2 my-2'>
            <div>
              <div className='text-[19px] flex flex-col gap-2'>
                <p>Hola! Mi nombre es David, me gusta la tecnologia y programar. Mis primeros pasos fueron en CoderHouse cuando hice la carrera Frontend y realice mi primer carrito de compras.</p>
                <p>Luego decidi anotarme en la carrera Ciencias de la Computacion para en un futuro dedicarme a la investigacion, y tambien Henry para ser desarrollador Fullstack</p>
                <p>Estoy entusiasmado por las oportunidades que el campo del desarrollo tech ofrece y tengo muchas ganas de seguir aprendiendo.</p>
                <p>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
              </div>
              <ul className='grid grid-cols-2 gap-4 mt-3 text-[16px] font-semibold mx-2'>
                <li className='col-span-1'>JavaScript</li>
                <li className='col-span-1'>React.js</li>
                <li className='col-span-1'>Node.js</li>
                <li className='col-span-1'>Tailwind</li>
                <li className='col-span-1'>PostgreSQL</li>
                <li className='col-span-1'>Express</li>
                <li className='col-span-1'>Sequelize</li>
                <li className='col-span-1'>SQL</li>
              </ul>
            </div>
          </div>

          <div className='my-6'>
            <img src={imagen} alt="" width={400} height={500} />
          </div>
        
      </section>
  )
}

export default About