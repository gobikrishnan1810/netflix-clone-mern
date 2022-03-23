import axios from 'axios'

const axiosinstance= axios.create({
    baseURL:"https://netflix-mernclone.herokuapp.com"
});

export default axiosinstance;
