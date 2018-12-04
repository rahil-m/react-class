import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 49a5ff547bf6bb91df981688d6adf16c064b20d5619d70929991d32b950c6d79'
    }
});