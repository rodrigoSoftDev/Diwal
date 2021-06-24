import React from 'react';

const DashBox = ({ onClick, title, text, color, boostrapWidth}) => 
    <div key={title} className={`col-${boostrapWidth} mt-2`} onClick={onClick}>
        <div className="regular-box text-white dash-box" style={{ background: color}}>
            <div className=""> { title } </div>  
            <h2 className="text-center"> { text }</h2>
        </div>
    </div>
  
export default DashBox;