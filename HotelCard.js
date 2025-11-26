const HotelCard = ({ hotel, onBook }) => {
    return (
        <div className="hotel-card" onClick={() => onBook(hotel)}>
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
                <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
                    <h3 className="hotel-name">{hotel.name}</h3>
                    <div className="hotel-rating">
                        <i data-lucide="star" style={{ width: '16px', height: '16px', fill: 'currentColor' }}></i>
                        {hotel.rating}
                    </div>
                </div>
                <div className="hotel-location">
                    <i data-lucide="map-pin" style={{ width: '14px', height: '14px' }}></i>
                    {hotel.location}
                </div>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {hotel.description}
                </p>
                <div className="flex justify-between items-center" style={{ marginTop: 'auto' }}>
                    <div className="hotel-price">${hotel.price} <span style={{ fontSize: '0.9rem', fontWeight: 400, color: 'var(--text-light)' }}>/ night</span></div>
                    <button className="btn btn-accent" onClick={(e) => {
                        e.stopPropagation();
                        onBook(hotel);
                    }}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

window.HotelCard = HotelCard;
