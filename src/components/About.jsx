
import imagen from '../assets/profile.jpg';

const About = () => {
  return (
    <section className="my-16 grid grid-cols-2 mx-[15rem] text-2xl justify-items-center">
          
          <h2 className='col-span-2 row-span-2 my-6 text-left w-full text-[32px] font-bold'>01. Sobre mi</h2>
          <div className=''>
          <div>
            <div >
              <p>Hola! Mi nombre es David, me gusta la tecnologia y programar. Mis primeros pasos fueron en CoderHouse cuando hice la carrera Frontend y realice mi primer carrito de compras.</p>
              <p>Luego decidi anotarme en la carrera Ciencias de la Computacion para en un futuro dedicarme a la investigacion, y tambien Henry para ser desarrollador Fullstack</p>
              <p>Estoy entusiasmado por las oportunidades que el campo del desarrollo tech ofrece y tengo muchas ganas de seguir aprendiendo.</p>
              <p>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</p>
            </div>
            <ul className='grid grid-cols-2 gap-4 mt-3'>
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

          <div className=' '>
            <img src={imagen} alt="" width={400} height={500} />
          </div>
        
      </section>
  )
}

export default About