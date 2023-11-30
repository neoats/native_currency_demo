import axios from './axios'; // MySQL bağlantı bileşeni

const dataaccess = () => {

    
  return axios.get('/api/data'); // Örneğin: '/api/data' API endpoint'i
};

export { dataaccess };