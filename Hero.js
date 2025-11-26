const Hero = () => {
    return (
        <header className="hero" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=90")' }}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Escape to Paradise</h1>
                <p className="hero-subtitle">Discover the world's most exclusive hotels and resorts.</p>

                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="Where is your next dream destination?" />
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </header>
    );
};

window.Hero = Hero;
