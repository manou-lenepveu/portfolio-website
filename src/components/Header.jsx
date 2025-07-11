function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">Alda Manou</h1>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#home" className="hover:text-blue-600 transition-colors">Accueil</a></li>
                    <li><a href="#about" className="hover:text-blue-600 transition-colors">À propos</a></li>
                    <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projets</a></li>
                    <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
                </ul>
                <button className="md:hidden">☰</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;