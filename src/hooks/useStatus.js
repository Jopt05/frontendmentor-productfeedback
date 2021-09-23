import React, { useEffect, useState } from 'react'

const useStatus = (Data) => {

    const [Statuses, setStatuses] = useState({
        planned: 0,
        progress: 0,
        live: 0
    });

    useEffect(() => {

        setStatuses({
            planned: Data?.data?.feedbacks.filter( el => el.status === "Planned" ),
            progress: Data?.data?.feedbacks.filter( el => el.status === "In-Progress" ),
            live: Data?.data?.feedbacks.filter( el => el.status === "Live" )
        })
        
    }, [Data])

    return Statuses
    
}

export default useStatus
