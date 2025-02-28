import React, { useEffect, useState } from 'react';

const PaymentDetails = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const ticketPrice = 10;

  useEffect(() => {
    const storedSeats = localStorage.getItem('selectedSeats');
    if (storedSeats) {
      setSelectedSeats(JSON.parse(storedSeats));
    }
  }, []);

  const total = selectedSeats.length * ticketPrice;

  const handlePayment = () => {
    alert('Proceeding to payment...');
  };

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>

      {/* Movie Details Section */}
      <div className="flex items-start space-x-8 max-w-4xl">
        <img
          src="your-movie-poster-url.jpg"
          alt="Movie Poster"
          className="w-48 h-64 rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">Ghost In The Shell</h1>
          <p className="mt-2">Director: Rupert Sanders</p>
          <p>Starring: Scarlett Johansson, Pilou Asbæk</p>
          <p>Genre: Action, Crime, Sci-Fi</p>
        </div>
      </div>

      {/* Selected Seats Summary */}
      <div className="mb-4 mt-6">
        <p className="text-lg">Selected Seats:</p>
        {selectedSeats.length > 0 ? (
          <div className="flex space-x-2 mt-2">
            {selectedSeats.map((seat, index) => (
              <span key={index} className="bg-green-500 text-black rounded px-3 py-1">
                Row {String.fromCharCode(65 + seat.row)}, Seat {seat.index + 1}
              </span>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-red-500">No seats selected.</p>
        )}
      </div>

      {/* Price Summary */}
      <div className="flex justify-between items-center border-t border-gray-600 pt-4 mt-4">
        <p className="text-lg">Ticket Price:</p>
        <p>${ticketPrice} per seat</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-lg font-semibold">Total:</p>
        <p className="text-xl font-bold">${total}</p>
      </div>

      {/* Payment Button */}
      <button
        onClick={handlePayment}
        className="bg-green-500 w-full py-3 mt-6 rounded text-white font-semibold hover:bg-green-600"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentDetails;
