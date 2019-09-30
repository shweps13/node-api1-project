import axios from 'axios';


export const AxiosThing = () => {

  return axios.create({
    baseURL: 'http://localhost:8000/api/',

  });
};

export default AxiosThing