export const isLogged = () => 
    JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user")).logged;

export const getResponseData = (res, key) => {
    if (key) return res.data.data[key]
    else return res.data.data;
};

export const getResponseText = res => res.response.data.response;

