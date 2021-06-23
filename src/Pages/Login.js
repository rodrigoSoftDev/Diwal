import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { login } from "../client";
import { useHistory } from "react-router-dom";
import { getResponseData, getResponseText } from "../Utils/helpers";
import Alert from "../Components/Alert";
import './Auth.css';

const Login = () => {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(false);
    const history = useHistory();

    const setUser = e => {
        const user = e.target.value;
        if (user !== "") setInfo({...info, user: user})
        else setInfo({...info, user: null})
    };

    const successLogin = (res) => {
        const idUser = getResponseData(res, "id");
        const tempLog = {
            logged: true,
            userToken: idUser,
        };
        localStorage.setItem("user", JSON.stringify(tempLog));
        window.location.href= "/dashboard"
    };

    const failedLogin = (err) => {
        const error = getResponseText(err);
        setError(error);
        setTimeout(() => setError(null), 5000)
    };

    const onSubmit = () => 
        login(info.user, info.password)
            .then(res => successLogin(res))
            .catch(err => failedLogin(err));
    

    const disabledButton = !info || !info.user || !info.password;

    return (
    <div>
        <div className="row p-0 mb-5 justify-content">
           <div className="col-12 mt-5"> 
                <h2 className="text-center">
                    Ingresa tus datos y comenza a administrat tus gastos.
                </h2>
           </div>
        </div>
        <div className="row justify-content">
            <div className="col-12">
                <div className="regular-box">  
                    <div className="form-group">
                        <label>Nombre de usuario</label>
                        <input 
                            className="form-control mt-2" 
                            onChange={e => setUser(e)}
                        />
                    </div>
                    <Collapse isOpened={info && info.user && info.user.length > 5}>
                        <div className="form-group mt-2">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                onChange={e => setInfo({...info, password: e.target.value})}
                            />
                        </div>
                    </Collapse>
                    <button disabled={disabledButton} onClick={onSubmit} className="btn btn-primary btn-md  btn-block mt-4">
                        Ingresar
                    </button>
                </div>
            </div>
        </div>
        <div className="row h-25 justify-content mt-4"> 
            <div className="col-6">
                <div onClick={() => history.push("/register")} className="regular-box"> 
                    Cear cuenta 
                </div>
            </div>
            <div className="col-6">
                <div className="regular-box"> 
                    Olvide mis datos
                </div>
            </div>
        </div>
        <Alert type="error" className="mt-5" show={error} message="Usuario o contraseña incorrecta"/>
  </div>
  );
}

export default Login;
