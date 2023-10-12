import { useState } from "react";

    const NavBar = () => {
    
    return (
        <nav className=" flex justify-end gap-4 text-xl font-medium m-4 p-4 text-[#a18c74]">
            <ul className="flex gap-4 text-xl font-semibold items-center ">
                <li className="hover:text-[#6a6b68] transition duration-500">01. Sobre mi</li>
                <li className="hover:text-[#6a6b68] transition duration-500">02. Experiencia</li>
                <li className="hover:text-[#6a6b68] transition duration-500">03. Proyectos</li>
                <li className="hover:text-[#6a6b68] transition duration-500">04. Contacto</li>
            </ul>
            <button className="font-bold p-2">Curriculum</button>
        </nav>
    )
    }

    export default NavBar