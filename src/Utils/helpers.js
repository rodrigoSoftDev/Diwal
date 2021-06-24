export const isLogged = () => 
    JSON.parse(localStorage.getItem("user")) && JSON.parse(localStorage.getItem("user")).logged;

export const getResponseData = (res, key) => {
    if (key) return res.data.data[key]
    else return res.data.data;
};

export const getResponseText = res => res.response.data.response;

export const moneyDivisor = {
    currentMoney : [
        { cash: { title: "Efectivo", width: 6 } }, 
        { investments: { title: "Inversiones", width: 6 } },
        { bankAccount: { title: "En cuenta", width: 6 } },
        { cash: { title: "Dinero total", width: 6 } },
    ],
    expendedMoney : [ 
        { leisure: { title: "Ocio", width: 6 } }, 
        { things: { title: "Bienes", width: 6 } },
        { friends: { title: "Amigos", width: 6 } },
        { fee: { title: "Cuotas", width: 6 } },
    ],
};
