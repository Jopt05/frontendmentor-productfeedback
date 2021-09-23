import React, { useContext } from 'react'
import { AppContext } from '../../hoc/Context'

const ContentElement = (props) => {

    const { Filter } = useContext(AppContext);
    
    return (
        <>
            <a id={ props?.id } className={ `Content__Element ${ props?.tags.includes(Filter) || Filter==="All" ? '' : 'Hidden' }` }>
                <div className="Content__Element-Votes">
                <i className='bx bx-chevron-up' ></i>
                <p className="Content__Element-Votes-Number">
                    { props?.votes }
                </p>
                </div>
                <div className="Content__Element-Content">
                <p className="Content__Element-Content-Title">
                    { props?.title }
                </p>
                <p className="Content__Element-Content-Text">
                    { props?.description }
                </p>
                <div className="Content__Element-Content-Categories">
                    {
                        props?.tags.map( (el) => 
                        <p className="Header__Container-Button">
                        { el }
                        </p> )
                    }
                </div>
                </div>
                <div className="Content__Element-Comments">
                <i className='bx bxs-message-rounded'></i>
                <p className="Content__Element-Comments-Number">
                    { props?.comments.length }
                </p>
                </div>
            </a>
        </>
    )
}

export default ContentElement
