import React, { useState} from 'react';
import { Collapse } from 'react-collapse';
import './Dashboard.css';

const Dashboard = () => {
    const [showers, setShowers] = useState({
        expandCurrentMoney: false,
    }); 

    const expandCurrentMoney = () => 
        setShowers({ ...showers, expandCurrentMoney:  !showers.expandCurrentMoney})

    return (
        <div className="row justify-content">
            <div className="col-12 mt-3" onClick={expandCurrentMoney}>
                <div className="regular-box text-white dash-box" style={{ background: "#36a836"}}>
                    <div className=""> Dinero actual </div>  
                    <h2 className="text-center"> 825200 $</h2>
                </div>
        </div>
        <Collapse isOpened={showers.expandCurrentMoney}>
            <div className="row justify-content">
                <div className="col-6 mt-3">
                        <div className="regular-box text-white dash-box" style={{ background: "#36a836"}}>
                            <div className=""> Efectivo </div>  
                            <h2 className="text-center"> 825200 $</h2>
                        </div>
                </div>
                <div className="col-6 mt-3">
                        <div className="regular-box text-white dash-box" style={{ background: "#36a836"}}>
                            <div className=""> Inversiones </div>  
                            <h2 className="text-center"> 825200 $</h2>
                        </div>
                </div>
                <div className="col-6 mt-3">
                        <div className="regular-box text-white dash-box" style={{ background: "#36a836"}}>
                            <div className=""> Cuenta en pesos </div>  
                            <h2 className="text-center"> 825200 $</h2>
                        </div>
                </div>
                <div className="col-6 mt-3">
                        <div className="regular-box text-white dash-box" style={{ background: "#36a836"}}>
                            <div className=""> Cuenta en dolares </div>  
                            <h2 className="text-center"> 825200 $</h2>
                        </div>
                </div>
            </div>
        </Collapse>
    </div>
    )
}

export default Dashboard;
