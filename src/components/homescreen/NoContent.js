import React, { useContext } from 'react'
import SVG from '../../assets/NoContent.svg'
import { AppContext } from '../../hoc/Context'

const NoContent = () => {

        const { ContentExists, Filter } = useContext(AppContext);

    return (
        <div className={ `NoContent ${ ContentExists ? 'Hidden' : '' }` }>
            <div className="NoContent__Container">
                <img src={ SVG } alt="No content" />
            </div>
            <div className="NoContent__Container">
                <p className="NoContent__Container-Header">
                    There is no { Filter } feedback yet.
                </p>
            </div>
            <div className="NoContent__Container">
                <p className="NoContent__Container-Text">
                    Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
                </p>
            </div>
            <div className="NoContent__Container">
                <button className="Bar__Container-Button">
                    + Add Feedback
                </button>
            </div>
        </div>
    )
}

export default NoContent
