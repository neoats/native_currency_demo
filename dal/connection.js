import axios from 'axios';

const connection = axios.create({
  baseURL: 'https://your-db4free-url', // db4free.net URL
  port: 3306, // Port numarası
  auth: {
    username: 'azure0101', // Kullanıcı adı
    password: 'LetBeBlind01.', // Şifre
  },
  timeout: 10000, // Timeout süresi (opsiyonel)
});

export default connection;
