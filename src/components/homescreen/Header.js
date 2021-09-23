import React, { useContext } from 'react'
import { AppContext } from '../../hoc/Context'
import HeaderContainerButton from './HeaderContainerButton'
import HeaderStatus from './HeaderStatus';

const Header = () => {

  const { Statuses } = useContext(AppContext);

    return (
        <header className="Header">
          <div className="Header__Container">
            <h1 className="Header__Container-Title">
              Frontend Mentor
            </h1>
            <p className="Header__Container-Subtitle">
              Feedback Board
            </p>
          </div>
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
        </header>
    )
}

export default Header
