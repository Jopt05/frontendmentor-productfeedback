import React, { useContext } from 'react'
import { AppContext } from '../../hoc/Context';

const ResponsiveHeader = () => {

  const context = useContext(AppContext);

  const { isComponentVisible, setIsComponentVisible } = context;

    return (
        <div className="HeaderRes">
          <div className="HeaderRes__Container">
            <h1 className="Header__Container-Title">
              Frontend Mentor
            </h1>
            <p className="Header__Container-Subtitle">
              Feedback Board
            </p>
          </div>
          <div className={ `HeaderRes__Container ${ isComponentVisible ? 'Active' : '' }` } onClick={ () => setIsComponentVisible(!isComponentVisible) }>
            <span className="HeaderRes__Container-Span"></span>
            <span className="HeaderRes__Container-Span"></span>
            <span className="HeaderRes__Container-Span"></span>
          </div>
        </div>
    )
}

export default ResponsiveHeader
