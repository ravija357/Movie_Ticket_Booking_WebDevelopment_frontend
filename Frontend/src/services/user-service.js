import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5001/api/auth';


export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        console.error('Signup Error:', error?.response?.data || error.message);
        throw error.response?.data || { message: 'Signup failed' };
    }
};

export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, userData);
        return response.data;
    } catch (error) {
        console.error('Login Error:', error?.response?.data || error.message);
        throw error.response?.data || { message: 'Login failed' };
    }
};
