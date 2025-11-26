const HotelList = ({ hotels, onBook }) => {
    return (
        <section className="container" style={{ paddingBottom: '4rem' }}>
            <h2 className="section-title">Curated Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
                {hotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} onBook={onBook} />
                ))}
            </div>
        </section>
    );
};

window.HotelList = HotelList;
