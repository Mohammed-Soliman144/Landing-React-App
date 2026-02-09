import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"
import Hero from "@/sections/Hero"
import Projects from "@/sections/Projects"
import Contact from "@/sections/Contact"
import "@/index.css"
export default function App(){
  return <div className="container w-screen">
    <Header/>
    <main>
      <Hero/>
      <Projects/>
      <Contact/>
    </main>
    <Footer/>
  </div>
}