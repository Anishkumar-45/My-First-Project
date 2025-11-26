const App = () => {
    const [selectedHotel, setSelectedHotel] = React.useState(null);
    const [hotels, setHotels] = React.useState([]);

    React.useEffect(() => {
        // Load data from global window object (defined in data.js)
        if (window.hotels) {
            setHotels(window.hotels);
        }

        // Re-initialize icons when DOM updates
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, []);

    React.useEffect(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    });

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <HotelList hotels={hotels} onBook={setSelectedHotel} />

            {selectedHotel && (
                <BookingForm
                    hotel={selectedHotel}
                    onClose={() => setSelectedHotel(null)}
                />
            )}

            <footer style={{ background: '#0f172a', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display', marginBottom: '1rem' }}>LuxeStay</div>
                    <p style={{ opacity: 0.7, marginBottom: '2rem' }}>© 2025 LuxeStay Hotels. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
