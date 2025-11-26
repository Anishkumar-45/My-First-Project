const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container flex justify-between items-center">
                <a href="#" className="nav-logo">
                    <i data-lucide="palmtree"></i>
                    LuxeStay
                </a>
                <div className="flex gap-4">
                    <button className="btn">Destinations</button>
                    <button className="btn">Experiences</button>
                    <button className="btn btn-primary">Sign In</button>
                </div>
            </div>
        </nav>
    );
};

window.Navbar = Navbar;
