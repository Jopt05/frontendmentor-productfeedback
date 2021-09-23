import { useEffect, useState } from 'react'

const useOrder = ( menuActiveChanger, Data, setData ) => {
    
    const [Order, setOrder] = useState("Most Upvotes");

    const handleOrderChange = ({target}) => {
        setOrder(target?.innerText);
        menuActiveChanger(false);
    }

    useEffect(() => {

        if( !Data?.data?.feedbacks ) return;

        switch (Order) {
            case "Most Upvotes":
                setData({
                    ...Data,
                    data: {
                        feedbacks: Data?.data?.feedbacks.sort(function(a, b){return b?.votes-a?.votes})
                    }
                })
                break;
            
            case "Least Upvotes":
                setData({
                    ...Data,
                    data: {
                        feedbacks: Data?.data?.feedbacks.sort(function(a, b){return a?.votes-b?.votes})
                    }
                })
                break;

            case "Most Comments":
                setData({
                    ...Data,
                    data: {
                        feedbacks: Data?.data?.feedbacks.sort(function(a, b){return b?.comments.length-a?.comments.length})
                    }
                })
                break;

            case "Least Comments":
                setData({
                    ...Data,
                    data: {
                        feedbacks: Data?.data?.feedbacks.sort(function(a, b){return a?.comments.length-b?.comments.length})
                    }
                })
                break;
        
            default:
                break;
        }
        
    }, [Order])

    return [ Order, handleOrderChange ];

}

export default useOrder
