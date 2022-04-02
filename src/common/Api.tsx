import axios from 'axios';

const getAxiosInstance = async () => {
  const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
  });
  axiosInstance.defaults.headers.common['X-Requestor-App'] = 'mwo-client';
  return axiosInstance;
}

export const api = {
  get: async (url: string) => {
    const axiosInstance = await getAxiosInstance()
    return await axiosInstance.get(url)
  }
}
