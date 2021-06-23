import axios from 'axios';

const host = "http://localhost:3030"


export const login = (username, password) => 
    axios.post(`${host}/login`, {
        username: username,
        password: password,
    });

export const register = (username, password) => 
    axios.post(`${host}/register`, {
        username: username,
        password: password,
    });
