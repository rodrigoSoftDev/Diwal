import axios from 'axios';
import { getApiEndpoint } from "./Utils/helpers";

export const login = (username, password) => 
    axios.post(`${getApiEndpoint}/login`, {
        username: username,
        password: password,
    });

export const register = (username, password) => 
    axios.post(`${getApiEndpoint}/register`, {
        username: username,
        password: password,
    });

export const getUser = (id) => axios.get(`${getApiEndpoint}/user/${id}`)