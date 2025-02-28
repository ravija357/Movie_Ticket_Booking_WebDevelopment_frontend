import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  const seats = [
    ['available', 'available', 'taken', 'available', 'available', 'available', 'taken', 'available', 'available', 'available'],
    ['available', 'taken', 'available', 'available', 'available', 'available', 'taken', 'available', 'taken', 'available'],
    ['taken', 'available', 'available', 'available', 'taken', 'available', 'available', 'available', 'available', 'available'],
    ['available', 'available', 'taken', 'available', 'available', 'taken', 'available', 'available', 'available', 'taken'],
    ['available', 'available', 'available', 'available', 'taken', 'available', 'available', 'taken', 'available', 'available'],
  ];

  const handleSeatClick = (rowIndex, seatIndex) => {
    const isSelected = selectedSeats.some(seat => seat.row === rowIndex && seat.index === seatIndex);

    setSelectedSeats(prevSeats =>
      isSelected
        ? prevSeats.filter(seat => seat.row !== rowIndex || seat.index !== seatIndex)
        : [...prevSeats, { row: rowIndex, index: seatIndex }]
    );
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }

    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    navigate('/paymentDetails');
  };

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen flex flex-col items-center">
      {/* Movie Details */}
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

      {/* Date and Time Selection */}
      <div className="mt-8 max-w-4xl w-full">
        <h2 className="text-lg font-semibold">Choose Date & Time</h2>
        <div className="flex space-x-4 mt-4">
          <div className="flex flex-col items-center">
            <p>Thu, 4 May</p>
            <button className="bg-green-600 px-4 py-2 rounded mt-2">20:00</button>
          </div>
        </div>
      </div>

      {/* Seat Layout */}
      <div className="mt-8 max-w-4xl w-full">
        <h2 className="text-lg font-semibold">Select Your Seats</h2>
        <div className="grid grid-cols-10 gap-2 mt-4">
          {seats.map((row, rowIndex) => (
            row.map((seat, seatIndex) => (
              <button
                key={`${rowIndex}-${seatIndex}`}
                className={`w-10 h-10 rounded ${
                  seat === 'taken' 
                    ? 'bg-red-600' 
                    : selectedSeats.some(s => s.row === rowIndex && s.index === seatIndex) 
                    ? 'bg-green-500' 
                    : 'bg-gray-700'
                }`}
                disabled={seat === 'taken'}
                onClick={() => handleSeatClick(rowIndex, seatIndex)}
              />
            ))
          ))}
        </div>
      </div>

      {/* Proceed Button */}
      <button 
        onClick={handleProceed} 
        className="bg-green-500 px-6 py-2 rounded shadow-lg mt-6"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default SeatSelection;
