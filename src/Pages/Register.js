import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { register } from "../client";
import { useHistory } from "react-router-dom";
import Alert from "../Components/Alert";
import './Auth.css';

const Register = () => {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(false);
    const history = useHistory();

    const setUser = e => {
        const user = e.target.value;
        if (user !== "") setInfo({...info, user: user})
        else setInfo({...info, user: null})
    };


    const onSubmit = () => 
        register(info.user, info.password)
            .then(() => history.push("/dashboard"))
            .catch(err => {
                setError(err);
                setTimeout(() => setError(null), 5000);
            });
    

    const disabledButton = 
        !info || 
        !info.user || 
        !info.password || 
        info.password !== info.passwordR ||
        info.password.trim() === "" || 
        info.user.trim() === "" ||
        info.user.length < 5;

    return (
    <div>
        <div className="row p-0 mb-5 justify-content">
           <div className="col-12 mt-5"> 
                <h2 className="text-center">
                    Crea una cuenta nueva y comenza a disfrutar la aplicacion
                </h2>
           </div>
        </div>
        <div className="row h-50 justify-content">
            <div className="col-12">
                <div className="regular-box">  
                    <div className="form-group">
                        <label>Eliga su nombre de usuario</label>
                        <input 
                            className="form-control mt-2" 
                            onChange={e => setUser(e)}
                        />
                    </div>
                    <Collapse isOpened={info && info.user && info.user.length > 5}>
                        <div className="form-group mt-2">
                            <label>Contraseña</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                onChange={e => setInfo({...info, password: e.target.value})}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label>Repita la contraseña</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                onChange={e => setInfo({...info, passwordR: e.target.value})}
                            />
                        </div>
                    </Collapse>
                    <button disabled={disabledButton} onClick={onSubmit} className="btn btn-primary btn-md  btn-block mt-4">
                        Crear
                    </button>
                </div>
            </div>
        </div>
        <Alert type="error" className="mt-10" show={error} message="El usuario especificado ya existe." />
  </div>
  );
}

export default Register;
