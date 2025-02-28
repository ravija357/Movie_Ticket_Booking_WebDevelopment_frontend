import React, { useState } from 'react';  // Add useState import
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';

const theaters = [
    { id: 1, name: 'Civil Mall-QFX Cinemas', timings: ['10:30 AM', '1:30 PM', '4:30 PM', '7:30 PM'] },
    { id: 2, name: 'One Cinemas', timings: ['11:30 AM', '2:30 PM', '5:30 PM', '8:30 PM'] },
    { id: 3, name: 'INNI Cinemas', timings: ['12:30 PM', '3:30 PM', '6:30 PM', '9:30 PM'] },
    { id: 4, name: 'Big-Movies', timings: ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM'] },
    { id: 5, name: 'Elite-Cinema Hall', timings: ['11:00 AM', '2:00 PM', '5:00 PM', '8:00 PM'] },
    { id: 6, name: 'Biratnagar QFX Cinemas', timings: ['12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'] },
];

const BookTickets = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);  // State to store selected time
    const navigate = useNavigate();  // Initialize useNavigate hook

    // Handle the Proceed button click to navigate to seat selection page
    const handleProceed = () => {
        navigate('/seatSelection');
    };

    // Handle time selection
    const handleTimeSelect = (time) => {
        setSelectedTime(time);  // Set selected time
    };

    return (
        <div className='pt-20 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <DatePicker
                    placeholderText="Select Date"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    className="px-4 py-2 border-[1px] border-red-400 rounded-lg focus:outline-none mt-5"
                />
            </div>
            {theaters.map((theater) => (
                <div key={theater.id} className='flex flex-col justify-center w-[95%] h-28 rounded-lg border-[1px] border-red-400 bg-[#fef2f2] mt-5'>
                    <h1 className='text-yellow-500 text-lg pl-4'>{theater.name}</h1>
                    <div className='flex flex-wrap gap-4 pl-4 pt-2'>
                        {theater.timings.map((time) => (
                            <div key={time} className="flex flex-wrap gap-10">
                                <button 
                                    className={`px-4 py-2 rounded border hover:bg-red-500 hover:text-white border-black ${selectedTime === time ? 'bg-red-500 text-white' : 'bg-transparent text-black'}`}
                                    onClick={() => handleTimeSelect(time)} // Set selected time
                                >
                                    {time}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className="mt-8 text-center">
                <button
                    onClick={handleProceed}
                    className="px-8 mb-10 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 disabled:opacity-50"
                    disabled={!selectedDate || !selectedTime} // Disable if no date or time selected
                >
                    Proceed
                </button>
            </div>
        </div>
    );
};

export default BookTickets;
