import React, { useContext } from 'react'
import { AppContext } from '../../hoc/Context';
import HeaderContainerButton from './HeaderContainerButton';

const ResponsiveMenu = () => {

    const context = useContext(AppContext);

    const { ref, isComponentVisible } = context;

    return (
        <div ref={ref} className={`MenuRes ${ isComponentVisible ? 'Active' : '' }`}>
            <div className="Header__Container">
                <HeaderContainerButton title={"All"} />
                <HeaderContainerButton title={"UI"} />
                <HeaderContainerButton title={"UX"} />
                <HeaderContainerButton title={"Enhancement"} />
                <HeaderContainerButton title={"Bug"} />
                <HeaderContainerButton title={"Feature"} />
            </div>
            <div className="Header__Container">
                <div className="Header__Container-Header">
                    <p className="Header__Container-Header-Title">
                        Roadmap
                    </p>
                    <a className="Header__Container-Header-Link">
                        View
                    </a>
                </div>
                <div className="Header__Container-Statuses">
                    <div className="Header__Container-Statuses-Div">
                        <span className="Header__Container-Statuses-Div-Pin"></span>
                        <p className="Header__Container-Statuses-Div-Text">
                            Planned
                        </p>
                        <p className="Header__Container-Statuses-Div-Number">
                            2
                        </p>
                    </div>
                    <div className="Header__Container-Statuses-Div">
                    <span className="Header__Container-Statuses-Div-Pin"></span>
                    <p className="Header__Container-Statuses-Div-Text">
                        In-Progress
                    </p>
                    <p className="Header__Container-Statuses-Div-Number">
                        3
                    </p>
                    </div>
                    <div className="Header__Container-Statuses-Div">
                    <span className="Header__Container-Statuses-Div-Pin"></span>
                    <p className="Header__Container-Statuses-Div-Text">
                        Live
                    </p>
                    <p className="Header__Container-Statuses-Div-Number">
                        1
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveMenu
