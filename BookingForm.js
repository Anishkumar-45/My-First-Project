const BookingForm = ({ hotel, onClose }) => {
    const [step, setStep] = React.useState(1); // 1: Details, 2: Payment, 3: Success
    const [paymentMethod, setPaymentMethod] = React.useState('card'); // 'card' or 'upi'
    const [isProcessing, setIsProcessing] = React.useState(false);
    const [bookingId, setBookingId] = React.useState(null);

    if (!hotel) return null;

    const handleNext = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
            setBookingId('BK' + Math.floor(Math.random() * 1000000));
            setStep(3);
        }, 2000);
    };

    const renderStep1 = () => (
        <form onSubmit={handleNext}>
            <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                    <label className="form-label">Check-in</label>
                    <input type="date" className="form-input" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Check-out</label>
                    <input type="date" className="form-input" required />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Guests</label>
                <select className="form-input">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="John Doe" required />
            </div>

            <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="john@example.com" required />
            </div>

            <div className="flex justify-between items-center" style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
                <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Total Price</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>${hotel.price}</div>
                </div>
                <button type="submit" className="btn btn-primary">Continue to Payment</button>
            </div>
        </form>
    );

    const renderStep2 = () => (
        <form onSubmit={handlePayment}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Select Payment Method</h3>

            <div className="payment-methods">
                <div
                    className={`payment-method-card ${paymentMethod === 'card' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('card')}
                >
                    <i data-lucide="credit-card" className="payment-icon"></i>
                    <span>Card</span>
                </div>
                <div
                    className={`payment-method-card ${paymentMethod === 'upi' ? 'selected' : ''}`}
                    onClick={() => setPaymentMethod('upi')}
                >
                    <i data-lucide="smartphone" className="payment-icon"></i>
                    <span>UPI</span>
                </div>
            </div>

            {paymentMethod === 'card' && (
                <div className="card-details">
                    <div className="form-group">
                        <label className="form-label">Card Number</label>
                        <input type="text" className="form-input" placeholder="0000 0000 0000 0000" maxLength="19" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-group">
                            <label className="form-label">Expiry</label>
                            <input type="text" className="form-input" placeholder="MM/YY" maxLength="5" required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">CVV</label>
                            <input type="password" className="form-input" placeholder="123" maxLength="3" required />
                        </div>
                    </div>
                </div>
            )}

            {paymentMethod === 'upi' && (
                <div className="upi-details">
                    <div className="form-group">
                        <label className="form-label">UPI ID</label>
                        <input type="text" className="form-input" placeholder="username@upi" required />
                    </div>
                </div>
            )}

            <div className="flex justify-between items-center" style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
                <button type="button" className="btn" onClick={() => setStep(1)} style={{ color: 'var(--text-light)' }}>Back</button>
                <button type="submit" className="btn btn-primary" disabled={isProcessing}>
                    {isProcessing ? 'Processing...' : `Pay $${hotel.price}`}
                </button>
            </div>
        </form>
    );

    const renderStep3 = () => (
        <div className="success-animation">
            <div className="success-icon">
                <i data-lucide="check" style={{ width: '32px', height: '32px' }}></i>
            </div>
            <h2 style={{ marginBottom: '0.5rem' }}>Booking Confirmed!</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                Your booking ID is <strong>{bookingId}</strong>. <br />
                We have sent a confirmation email to you.
            </p>
            <button className="btn btn-primary" onClick={onClose}>Done</button>
        </div>
    );

    // Re-run lucide icons when step changes
    React.useEffect(() => {
        if (window.lucide) window.lucide.createIcons();
    }, [step, paymentMethod]);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {step < 3 && (
                    <button className="close-btn" onClick={onClose}>
                        <i data-lucide="x"></i>
                    </button>
                )}

                {step < 3 && (
                    <div className="step-indicator">
                        <div className={`step ${step >= 1 ? 'active' : ''}`}></div>
                        <div className={`step ${step >= 2 ? 'active' : ''}`}></div>
                        <div className={`step ${step >= 3 ? 'active' : ''}`}></div>
                    </div>
                )}

                {step < 3 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h2 style={{ marginBottom: '0.25rem' }}>Book Your Stay</h2>
                        <p style={{ color: 'var(--text-light)' }}>at {hotel.name}</p>
                    </div>
                )}

                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
            </div>
        </div>
    );
};

window.BookingForm = BookingForm;
