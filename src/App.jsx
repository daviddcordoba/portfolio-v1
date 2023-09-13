import imagen from './assets/profile.jpg';
import imgDetail from './assets/imgDetail.jpeg';
import imgDetail1 from './assets/chimuDetail.jpeg';
import imgDetailSalem from './assets/salemVintage.jpeg'
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
      <main className=' mx-[20rem]'>
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
