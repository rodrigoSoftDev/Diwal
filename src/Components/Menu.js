import React, { useState } from 'react';
import "./Menu.css"
import { Collapse } from 'react-collapse';
import { ProSidebar, Menu as MenuPS, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="row justify-content">
                <div className="col-12 pt-2 pb-2" style={{ background: "cadetblue", height: "50px" }}>
                    <img 
                        onClick={() => setOpen(!open)} 
                        src="/menu-open.png" 
                        alt="menu"
                        className="menu-img"
                    />
                </div>
            </div>
            <div className="row p-0 justify-content">
                <div className="col-6 p-0">
                    <Collapse isOpened={open}>
                        <ProSidebar>
                            <MenuPS iconShape="square">
                                <MenuItem>
                                    <img alt="general" className="menu-item" src="/menu-general.png"/>
                                    General
                                </MenuItem>
                                <MenuItem>
                                    <img alt="movements" className="menu-item" src="/menu-movements.png"/>
                                    Movimientos
                                 </MenuItem>
                                <MenuItem>
                                    <img alt="add" className="menu-item" src="/menu-add.png"/>
                                    Registrar
                                </MenuItem>
                                <MenuItem>
                                    <img alt="config" className="menu-item" src="/menu-config.png"/>
                                    Configuracion
                                </MenuItem>
                            </MenuPS>
                        </ProSidebar>
                    </Collapse>
                </div>
            </div>
        </div>
    )
};
export default Menu;