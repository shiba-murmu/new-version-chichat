import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({baseURL});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (res) => res,
    async (error) => {
        const originalRequest = error.config;

        if(error.response?.status == 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refresh = localStorage.getItem('refresh')
                if(!refresh) throw new Error('No refresh token')
                
                const res = await axios.post(`${baseURL}api/token/refresh/`, {refresh});
                localStorage.setItem('access', res.data.access);
                if (res.data.refresh) {
                    localStorage.setItem('refresh', res.data.refresh)
                }
                originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
                return api(originalRequest);
            } catch (err) {
                localStorage.clear();
                window.location.href = '/login'
                return Promise.reject(err);
            }
        }
        return Promise.reject(err);
    }
);

export default api;