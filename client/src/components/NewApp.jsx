import React, { useState } from 'react';
import "./NewApp.css";

function NewApp() {
    return ( 
        <div className='form__container'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>

           

            <div className="input-group">
                <span className="input-group-text">With textarea</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
        </div>
     );
}

export default NewApp;