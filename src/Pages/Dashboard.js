import React, { useState, useEffect } from 'react';
import { Collapse } from 'react-collapse';
import { getUser } from "../client";
import { getResponseData, moneyDivisor } from "../Utils/helpers";
import DashBox from "../Components/DashBox";
import './Dashboard.css';

const Dashboard = () => {
    const [showers, setShowers] = useState({
        expandCurrentMoney: true,
        expandExpendedMoney: false,
    }); 
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);

    const expandCurrentMoney = () => 
        setShowers({ ...showers, expandCurrentMoney:  !showers.expandCurrentMoney});

    const expandExpendedMoney = () => 
        setShowers({ ...showers, expandExpendedMoney:  !showers.expandExpendedMoney});

    const loadData = () => {
        const userId =  JSON.parse(localStorage.getItem("user")).userToken;
        getUser(userId).then(res => {
            const userInfo = getResponseData(res, "info");
            setUserInfo(userInfo);
            setLoading(false);
        });
    };

    useEffect(() => {
        loadData();
    }, [])

    return loading ? <div>CARGANDO</div> : (
        <>
            <div className="row justify-content">
                <DashBox
                    title="Dinero actual"
                    text={userInfo.totalMoney}
                    boostrapWidth={12}
                    color="#36a836"
                    onClick={expandCurrentMoney}
                />
                <Collapse isOpened={showers.expandCurrentMoney}>
                    <div className="row justify-content">
                        {moneyDivisor.currentMoney.map(type => {
                                const typeKey = Object.keys(type)[0];
                                return(
                                    <DashBox
                                        title={type[typeKey].title}
                                        text={userInfo[typeKey]}
                                        boostrapWidth={type[typeKey].width}
                                        color="#36a836"
                                    />
                                )
                        })}
                    </div>
                </Collapse>
            </div>

            <div className="row justify-content">
                <DashBox
                    title="Gastos totales"
                    text={userInfo.expendedMoney}
                    boostrapWidth={12}
                    color="rgb(228 40 27)"
                    onClick={expandExpendedMoney}
                />
                <Collapse isOpened={showers.expandExpendedMoney}>
                    <div className="row justify-content">
                        {moneyDivisor.expendedMoney.map(type => {
                                const typeKey = Object.keys(type)[0];
                                return(
                                    <DashBox
                                        title={type[typeKey].title}
                                        text={userInfo[typeKey]}
                                        boostrapWidth={type[typeKey].width}
                                        color="rgb(228 40 27)"
                                    />
                                )
                        })}
                    </div>
                </Collapse>
            </div>
    </>
    )
}

export default Dashboard;
