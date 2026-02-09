import Card from "@/components/Card";
import aiSass from '@/assets/images/ai-saas.png'
import socialMedia from '@/assets/images/social-media.png'
import stopWatch from '@/assets/images/stopwatch.png'

export default function Projects() {
    return <section id='projects' className="bg-primary w-screen py-15 relative">
        <div className="container mx-auto p-6 before:content[''] before:absolute before:bottom-[0%] before:left-0  before:right-0 before:h-[1.5px] before:bg-[linear-gradient(to_right,transparent_0%,#f163bd_35%,#f163bd_60%,transparent_100%)]">
            <h2 className="capitalize text-white text-3xl md:text-6xl font-bold mb-15 text-center tracking-wide">my projects</h2>
            <div className="cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between items-center gap-12 ">
                <Card 
                    imgSrc={aiSass} 
                    imgAlt="AI Saas Platform" 
                    contentTitle="ai saaS platform"
                    contentDescription="A modern SaaS platform built with Next.js and OpenAI  intergration, featuring real-time AI-powered content generation and analytics."
                    items={['Next.js', 'OpenAI', 'TailwindCSS']}/>
                <Card 
                    imgSrc={socialMedia} 
                    imgAlt="Social Media Dashboard" 
                    contentTitle="Social Media Dashboard"
                    contentDescription="A comprenhensive social media management dashboard with analytics, scheduling, and engagement tracking features."
                    items={['React', 'Node.js', 'MonogoDB']}/>
                <Card 
                    imgSrc={stopWatch}
                    imgAlt="Timer App" 
                    contentTitle="productivity timer"
                    contentDescription="A sleek productivity timer application with customizable work sessions, statistics tracking, and dark mode support."
                    items={['React', 'TypeScript', 'TailwindCSS']}/>
            </div>
        </div>      
    </section>
}