import { Link } from "react-router-dom"
import { LuLinkedin, LuGithub, LuTwitter } from "react-icons/lu"
export default function Hero() {
    return <section id='home' className="w-screen background-hero py-15">
        <div className="container mx-auto p-6 grid grid-cols-1 gap-12 justify-center items-center lg:grid-cols-2 lg:place-content-start lg:place-items-start text-center lg:text-left">
            <div className="intro-hero flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start">
                <header>
                    <div className="tag">
                        <p className="text-white text-base backdrop-blur-sm shadow-lg rounded-4xl px-4 py-2 bg-secondary-muted inline-block capitalize"><span className="pr-1">👋</span>hello, i'm</p>
                    </div>
                    <h1 className="text-foreground-100 text-shadow-[0px_1px_2px_#fafafa] backdrop-blur-sm text-5xl font-extrabold capitalize mt-6 hover:scale-105 transition-all duration-500">mohammed soliman
                    </h1>
                    <div className="tag">
                        <span className="block text-4xl font-bold text-foreground/80 text-shadow-2xs capitalize mt-2">front end developer</span>
                    </div>
                    <p className="text-lg text-white capitalize my-4">i craft beautiful digital experiences that combine stunning design with powerful functionality. specializing in modern web applications and interactive user interfaces.</p>
                </header>
                <nav className="buttons capitalize text-base flex gap-6">
                    <a href="https://github.com/Mohammed-Soliman144" className="inline-block bg-white text-main-100 font-bold px-6 py-3 rounded-full shadow-2xl backdrop-blur-md hover:scale-105 transition-all duration-500 outline-0">view my work</a>
                    <Link to="#contact" className="inline-block bg-secondary-muted/80 text-white font-bold px-6 py-3 rounded-full shadow-2xl backdrop-blur-md hover:scale-105 transition-all duration-500 ring-1 outline-0">contact me</Link>
                </nav>
                <ul className="socials flex justify-start items-center gap-5 mt-4">
                    <li><a href="https://github.com/Mohammed-Soliman144" className=""><LuGithub className="bg-white rounded-full p-2 transition-all duration-500 hover:bg-foreground" size={38}/></a></li>
                    <li><a href="https://www.linkedin.com/in/muhammad-soliman144/" className=""><LuLinkedin className="bg-white rounded-lg p-2 transition-all duration-500 hover:bg-foreground" size={38}/></a></li>
                    <li><Link to="/" className=""><LuTwitter className="bg-white rounded-full p-2 transition-all duration-500 hover:bg-foreground" size={38}/></Link></li>
                </ul>
            </div>
            <aside className="code hidden md:block relative bg-primary-muted px-6  py-8 rounded-3xl shadow-xl text-sm">
                <pre>
                    <code>
                        <span className="keyword text-property-key font-semibold">const</span> <span className="text-property-name">aboutMe<span className="text-property-symbol">:</span></span> <span className="text-property-instance font-semibold capitalize">developerProfile</span><span className="text-property-symbol"> = {"{"} </span>
                        <span className="block"> <span className="text-property-name">codeName<span className="text-property-symbol">:</span></span> <span className="text-property-value">{"MohammedSoliman"}</span><span className="text-property-symbol"><span className="text-property-symbol">,</span></span></span>
                        <span className="block"> <span className="text-property-name">origin<span className="text-property-symbol">:</span></span> <span className="text-property-value">{"🌍 Somewhere between a coffee shop and a terminal"}</span></span>
                        <span className="block"> <span className="text-property-name">role<span className="text-property-symbol">:</span></span> <span className="text-property-value">{"front end developer"}</span><span className="text-property-symbol">,</span></span>
                        <span className="block"> <span className="text-property-name">stack<span className="text-property-symbol">: {"{"}</span></span></span> 
                        <span className="block">     <span className="text-property-name">languages<span className="text-property-symbol">: [</span></span> <span className="text-property-value">{`"JavaScript"`}</span><span className="text-property-symbol">,</span> <span className="text-property-value">{`"TypeScript"`}</span><span className="text-property-symbol">,</span>  <span className="text-property-value">{`"HTML5"`}</span><span className="text-property-symbol">,</span> <span className="text-property-value">{`"CSS3"`}</span><span className="text-property-symbol"> ],</span></span>
                        <span className="block">     <span className="text-property-name">frameworks<span className="text-property-symbol">: [</span></span> <span className="text-property-value">{`"React"`}</span><span className="text-property-symbol">,</span> <span className="text-property-value">{`"Next.js"`}</span><span className="text-property-symbol">,</span>  <span className="text-property-value">{`"TailwindCSS"`}</span><span className="text-property-symbol">,</span> <span className="text-property-value">{`"Bootstrap"`}</span><span className="text-property-symbol"> ],</span></span>
                        <span className="block"> <span className="text-property-name">traits: {"["}</span></span> 
                        <span className="block"><span className="pl-10 text-property-value">{`"pixel-perfectionist"`}<span className="text-property-symbol">,</span></span><span className="block pl-10 text-property-value">{`"API whisperer"`}<span className="text-property-symbol">,</span></span><span className="block pl-10 text-property-value">{`"dark mode advocate"`}<span className="text-property-symbol">,</span></span><span className="pl-10 text-property-value">{`"terminal aesthetic enthusiast"`}<span className="text-property-symbol">,</span></span></span> 
                        <span className="block"> <span className="text-property-symbol">{"]"}</span></span> 
                        <span className="block"> <span className="text-property-name" >{"missionStatement"}<span className="text-property-symbol">:</span></span></span> 
                        <span className="block">     <span className="text-property-value">{`"Turning ideas into interfaces and bugs into feature"`}<span className="text-property-symbol">,</span></span></span> 
                        <span className="block"> <span className="text-property-name">{"availability"}<span className="text-property-symbol">:</span></span>  <span className="text-property-value">{`"Available for hire"`}<span className="text-property-symbol">,</span></span></span> 
                        <span className="block text-property-symbol">{`}`}</span> 
                    </code>
                </pre>
                <p className="absolute -bottom-6 -right-5 text-base font-bold text-white rounded-2xl px-7 py-5  bg-secondary-muted shadow-lg backdrop-blur-sm animate-bounce"><span className="px-2">💻</span>Currently working on something awesome!</p>
            </aside>
        </div>
    </section>
}