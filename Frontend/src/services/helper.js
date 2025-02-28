import axios from 'axios';

// You can adjust the API URL depending on your environment
export const myAxios = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5001', // Ensure the correct port (5001 in your case)
    headers: {
        'Content-Type': 'application/json',
    },
});
