
const Contact = () => {
    return (
        <footer className='flex flex-col items-center mt-20'>
            <div className='pt-8 py-0 pb-24'>
            
            <ul className='flex gap-6 justify-center'>
                <li>
                    <a href="" className='p-2 text-[32px] hover:text-[#6a6b68] transition duration-500'><i className="fa-brands fa-github "></i></a>
                </li>
                <li>
                    <a href="" className='p-2 text-[32px] hover:text-[#6a6b68] transition duration-500'><i className="fa-brands fa-linkedin"></i></a>

                </li>
                <li>
                    
                <a href=""className='p-2 text-[32px] hover:text-[#6a6b68] transition duration-500' ><i className="fa-solid fa-envelope"></i></a>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Contact