import About from "../components/sections/About";
import Banner from "../components/sections/Banner";
import Services from "../components/sections/Services";

export default function Home() {
  return (
    <main className='lg:p-8'>
      <Banner />
      <About />
      <Services />
    </main>
  )
}
