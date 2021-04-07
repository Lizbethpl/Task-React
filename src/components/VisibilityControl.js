import React from 'react';

export const VisibilityContro = props =>{
    return(
        <div className="form-check">
            
            <label htmlFor="form-check-label">
                <input 
                    type="checkbox"
                    className="form-check"
                    checked={props.isChecked/*Propiedad para ver si esta marcado o no*/}
                    onChange={e => props.callback(e.target.checked)}
                />
                Show {props.description}
            </label>
        </div>
    )
}