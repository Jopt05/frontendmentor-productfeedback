import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../hoc/Context'

const ContentElement = (props) => {

    const { Filter } = useContext(AppContext);

    const [isVoted, setisVoted] = useState(null);

    const [ElementInfo, setElementInfo] = useState({
        votes: props?.votes  
    })

    const ref = useRef(null)

    const handleUpvote = ({ target }) => {

        if( isVoted ) {
            setisVoted(false);
            setElementInfo({
                votes: ElementInfo.votes - 1
            })
        } else {
            setisVoted(true);
            setElementInfo({
                votes: ElementInfo.votes + 1
            })
        }

        

    }

    useEffect(() => {

        if( isVoted === null ) return;

        let votedItems = JSON.parse(localStorage.getItem("votedItems"));
        
        fetch(`${process.env.REACT_APP_API_URL}/api/feedback/${props.id}`, {
            body: JSON.stringify({
                votes: ElementInfo.votes
            }),
            method: "PUT",
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        .then( resp => resp.json() )
        .then( data => console.log(data) )
        .catch( err => console.log(err) )


        if( !votedItems ) {
            localStorage.setItem("votedItems", JSON.stringify([]));
            votedItems = JSON.parse(localStorage.getItem("votedItems"));
        };

        if( isVoted ){
            votedItems.push(props.id);
            localStorage.setItem("votedItems", JSON.stringify(votedItems));
        } else {
            votedItems = JSON.parse(localStorage.getItem("votedItems"));
            votedItems = votedItems.filter( el => el !== props.id );
            localStorage.setItem("votedItems", JSON.stringify(votedItems));
        }
        
    }, [ElementInfo])

    useEffect(() => {
        
        let votedItems = JSON.parse(localStorage.getItem("votedItems"));
        if( !votedItems ) return;
        if( votedItems.includes(props.id) ) {
            setisVoted(true);
        }

    }, [])
    
    return (
        <>
            <a ref={ ref } id={ props?.id } className={ `Content__Element${ props?.tags.includes(Filter) || Filter=="All" ? '' : ' Hidden' }` }>
                <div className={ `Content__Element-Votes ${ isVoted ? 'isVoted' : '' }` } onClick={ handleUpvote }>
                    <i className='bx bx-chevron-up' ></i>
                    <p className="Content__Element-Votes-Number">
                        { ElementInfo.votes }
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
