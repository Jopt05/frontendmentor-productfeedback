import React, { useEffect, useState } from 'react'

const useFilter = (Data) => {

    const [Filter, setFilter] = useState("All");

    const [ContentExists, setContentExists] = useState(true);

    const handleChangeFilter = ({target}) => {
        setFilter(target.innerText);
    }

    useEffect(() => {

        if( Filter === "All" ) return;

        let feedbacksWithTag = Data?.data?.feedbacks.filter( el => el.tags.includes(Filter) );

        if( feedbacksWithTag?.length === 0 ) {
            setContentExists(false);
        } else {
            setContentExists(true);
        }
        
    }, [Filter])

    return [ Filter, handleChangeFilter, ContentExists ];
    
}

export default useFilter
