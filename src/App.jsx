import NavBar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experience';
import Proyects from './components/Proyects';
import Presentation from './components/Presentation';
import Contact from './components/Contact';

function App() {
  return (
    < >
      <NavBar/>
      <main className=' mx-[3rem] md:mx-[20rem]'>
        <Presentation/>
        
        <About/>
      

        <Experience/>

        <Proyects/>

        <Contact/>
      </main>

    </>

  )
}

export default App;
