export default function Footer() {
    const currentYear = new Date().getFullYear();
    return <footer className="bg-primary text-white py-8 w-screen text-center">
        <div className="container mx-auto px-6">
            <p className="flex items-center justify-center capitalize text-md lg:text-lg">&copy; {currentYear} mohammed soliman. all rights reserved.</p>
        </div>
    </footer>
}