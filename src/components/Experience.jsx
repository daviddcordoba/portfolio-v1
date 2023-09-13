import imgDetail from '../assets/imgDetail.jpeg';
import imgDetail1 from '../assets/chimuDetail.jpeg';

const Experience = () => {
  return (
    <section className=' flex flex-col  justify-center w-full  gap-5 p-2'>
        <h2 className='text-[32px] font-bold'>02. Experiencia</h2>
        
        <div className='flex  mx-auto  p-5 bg-[#d8d2cb]'>
          <div className='w-full h-auto flex flex-col gap-5'>
            <h2 className='text-[28px] font-semibold'>PigCommander</h2>
            <p className='text-[18px]'>Es una aplicación de finanzas que permite a los usuarios registrar sus gastos e ingresos financieros. Con esta aplicación, los usuarios pueden tener un seguimiento detallado de sus finanzas personales y tomar decisiones informadas sobre sus gastos e inversiones.</p>
            <div>
              <ul className='flex gap-3'>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Express</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <a href="" className='p-2 text-2xl'><i className="fa-brands fa-github"></i></a>
            <a href="" className='p-2 text-xl'><i className="fa-solid fa-arrow-up-right-from-square "></i></a>
            </div>
          </div>

          <div>
            <img src={imgDetail} alt="" className='h-[350px] w-[1400px]' />
          </div>

        </div>

        <div className='flex  mx-auto  p-5 bg-[#d8d2cb]'>

          <div className='w-full h-auto flex flex-col gap-5'> 
            <h2 className='text-[28px] font-semibold'>Nombre de proyecto</h2>
            <p className='text-[18px]'>Es una aplicación de finanzas que permite a los usuarios registrar sus gastos e ingresos financieros. Con esta aplicación, los usuarios pueden tener un seguimiento detallado de sus finanzas personales y tomar decisiones informadas sobre sus gastos e inversiones.</p>
            <div>
              <ul className='flex gap-3'>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Express</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <a href="" className='p-2 text-[28px]'><i className="fa-brands fa-github "></i></a>
            <a href="" className='p-2 text-[22px]'><i className="fa-solid fa-arrow-up-right-from-square "></i></a>
            </div>
          </div>

          <div >
  <img src={imgDetail1} alt="" className='h-[350px] w-[1400px]'/>
</div>

        </div>
        
        
      </section>
  )
}

export default Experience