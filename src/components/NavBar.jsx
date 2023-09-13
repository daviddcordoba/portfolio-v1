
    const NavBar = () => {
    return (
        <nav className=" flex justify-end gap-4 text-xl font-medium m-4 p-4 text-[#a18c74]">
            <ul className="flex gap-4 text-xl font-semibold items-center ">
                <li>01. Sobre mi</li>
                <li>02. Experiencia</li>
                <li>03. Proyectos</li>
                <li>04. Contacto</li>
            </ul>
            <button className="font-bold p-2">Curriculum</button>
        </nav>
    )
    }

    export default NavBar