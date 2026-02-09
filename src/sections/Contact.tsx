import { useState } from "react"
import '@/index.css'

export default function Contact() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const uname = formdata.get("username");
        const uemail = formdata.get("email");
        const umessage = formdata.get("message");
        console.log(uname, uemail, umessage);
    }

    return <section id='contact' className="bg-secondary w-screen py-15 text-foreground-100">
        <form action="" className="container mx-auto px-6 w-150 max-w-full" onSubmit={handleSubmit}>
            <h2 className="capitalize text-4xl md:text-6xl font-bold mb-12 mt-15 text-center tracking-wide">get in touch</h2>
            <div className="controls capitalize text-white flex flex-col gap-4 tracking-wide text-md">
                <div className="name">
                    <label htmlFor="name">
                    <input 
                        name="username"
                        className="w-full rounded-lg border border-slate-400 py-4 placeholder-shown:capitalize text-white pl-3 focus-visible:border focus-visible:border-foreground focus-visible:shadow-md focus-visible:shadow-foreground focus-visible:outline-0 focus-within:text-foreground-100 transition-transform duration-600 ease-in-out focus-within:scale-105"
                        type="text"
                        placeholder="your name..." 
                        id="name"
                        value={name}
                        onChange={(e) => {setName(e.currentTarget.value)}}
                        required
                    />
                    </label>
                </div>
                <div className="email">
                    <label htmlFor="email">
                    <input 
                        name="email"
                        className="w-full rounded-lg border border-slate-400 py-4 placeholder-shown:capitalize text-white pl-3 focus-visible:border focus-visible:border-foreground focus-visible:shadow-md focus-visible:shadow-foreground focus-visible:outline-0 focus-within:text-foreground-100 transition-transform duration-600 ease-in-out focus-within:scale-105"
                        type="email"
                        placeholder="your name..." 
                        id="email"
                        value={email}
                        onChange={(e) => {setEmail(e.currentTarget.value)}}
                        required
                    />
                    </label>
                </div>
                <div className="message">
                    <label htmlFor="message">
                    <textarea
                        name="message"
                        className="w-full rounded-lg border border-slate-400 py-4 placeholder-shown:capitalize text-white pl-3 h-40 focus-visible:border focus-visible:border-foreground focus-visible:shadow-md focus-visible:shadow-foreground focus-visible:outline-0 focus-within:text-foreground-100 transition-transform duration-600 ease-in-out focus-within:scale-105"
                        placeholder="your message..."
                        id="message"
                        value={message}
                        onChange={(e) => {setMessage(e.currentTarget.value)}}
                        required
                    >
                    </textarea>
                    </label>
                </div>
                <button type="submit" className="capitalize text-md font-bold w-full bg-[#7C3AED] py-4 rounded-lg transition-all duration-600 ease-in-out hover:scale-105 shimmer-shine">
                    send message
                </button>
            </div>
        </form>
    </section>
}