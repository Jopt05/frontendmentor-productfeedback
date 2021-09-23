import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [Data, setData] = useState({
        data: null,
        isLoading: true,
        errors: null,
    })

    useEffect(() => {

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {

                // data.feedbacks = data?.feedbacks.sort(function(a, b){return b?.votes-a?.votes})

                setData({
                    isLoading: false,
                    errors: null,
                    data
                })

            } )
        
    }, [url])

    return [Data , setData]
    
}

export default useFetch
