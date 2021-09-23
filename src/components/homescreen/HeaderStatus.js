import React from 'react'

const HeaderStatus = (props) => {
    return (
        <div className="Header__Container-Statuses-Div">
            <span className="Header__Container-Statuses-Div-Pin"></span>
            <p className="Header__Container-Statuses-Div-Text">
             { props?.title }
            </p>
            <p className="Header__Container-Statuses-Div-Number">
             { props?.amount }
            </p>
        </div>
    )
}

export default HeaderStatus
