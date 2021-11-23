import axios from 'axios'; //cria um pseudo server interno na app

export const api =  axios.create({
    baseURL: 'http://localhost:4444/'
})
