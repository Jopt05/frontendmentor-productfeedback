import React, { useContext } from 'react'
import { AppContext } from '../../hoc/Context';

const MenuRow = (props) => {

    const { Order, handleOrderChange } = useContext(AppContext);

    return (
        <div className="Bar__Container-Menu-Row" onClick={ handleOrderChange }>
            <p className="Bar__Container-Menu-Row-Text">
                { props?.title }
            </p>
            {
                Order === props?.title 
                    ? <i class='bx bx-check'></i>
                    : ''
            }
        </div>
    )
}

export default MenuRow
