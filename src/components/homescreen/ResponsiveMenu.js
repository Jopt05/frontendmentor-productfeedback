import React, { useContext } from 'react'
import { AppContext } from '../../hoc/Context';
import HeaderContainerButton from './HeaderContainerButton';
import HeaderStatus from './HeaderStatus';

const ResponsiveMenu = () => {

    const context = useContext(AppContext);

    const { ref, isComponentVisible, Statuses } = context;

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
                    {
                    Statuses?.planned
                        ? <HeaderStatus title={"Planned"} amount={Statuses?.planned?.length} />
                        : ''
                    }
                    {
                    Statuses?.progress
                        ? <HeaderStatus title={"In-Progress"} amount={Statuses?.progress?.length} />
                        : ''
                    }
                    {
                    Statuses?.live
                        ? <HeaderStatus title={"Live"} amount={Statuses?.live?.length} />
                        : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default ResponsiveMenu
