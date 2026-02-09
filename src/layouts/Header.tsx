import { Link } from "react-router-dom"
export default function Header() {
    return <header className="w-screen bg-[#291D4B] py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="logo">
                <Link to="/" className="capitalize text-foreground text-shadow-2xs text-2xl font-bold">portfolio</Link>
            </div>
            <nav>
                <ul className="capitalize flex text-white text-base gap-4">
                    <li><Link to="#home" className="relative transition-all duration-500 ease-in-out hover:text-foreground after:content-[''] after:absolute after:w-0 after:h-1 after:-bottom-2 after:left-0 after:transition-all after:duration-500 after:ease-in-out after:bg-foreground hover:after:w-full ">home</Link></li>
                    <li><Link to="#projects" className="relative transition-all duration-500 ease-linear hover:text-foreground after:content-[''] after:absolute after:w-0 after:h-1 after:-bottom-2 after:left-0 after:transition-all after:duration-500 after:ease-in-out after:bg-foreground hover:after:w-full ">projects</Link></li>
                    <li><Link to="#contact" className="relative transition-all duration-500 ease-linear hover:text-foreground after:content-[''] after:absolute after:w-0 after:h-1 after:-bottom-2 after:left-0 after:transition-all after:duration-500 after:ease-in-out after:bg-foreground hover:after:w-full ">contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
}