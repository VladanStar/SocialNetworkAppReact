import axios from 'axios';

const baseURL=axios.create({
    baseURL:'https://backend-social-network.herokuapp.com/'
})

export default baseURL; 