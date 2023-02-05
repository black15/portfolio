import About from "../components/sections/About";
import Banner from "../components/sections/Banner";
import Portfolio from "../components/sections/Portfolio";
import Services from "../components/sections/Services";
import Skills from "../components/sections/Skills";

export default function Home() {
  return (
    <main className='lg:p-8'>
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Skills />
    </main>
  )
}
