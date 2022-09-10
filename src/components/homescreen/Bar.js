import React, { useContext } from 'react'
import { AppContext } from '../../hoc/Context'
import MenuRow from './MenuRow';

const Bar = () => {

    const { Data, Order, refOrder, isComponentVisibleOrder, setIsComponentVisibleOrder } = useContext(AppContext);

    const { data } = Data;

    return (
        <div className="Bar">
            <div className="Bar__Container">
              <i className='bx bxs-bulb'></i>
              <p className="Bar__Container-Suggestions">
                { data?.feedbacks?.length } Suggestions
              </p>
            </div>
            <div ref={refOrder} className="Bar__Container">
              <div className={ `Bar__Container-Wrapper ${ isComponentVisibleOrder ? 'Active' : '' }` } onClick={ () => setIsComponentVisibleOrder(!isComponentVisibleOrder) } >
                <p className="Bar__Container-Text">
                  Sort By :
                </p>
                <p className="Bar__Container-Text">
                  { 
                    Order
                  }
                </p>
                <i className='bx bx-chevron-down'></i>
              </div>
              <div className={ `Bar__Container-Menu ${ isComponentVisibleOrder ? 'Active' : '' }` }>
                <MenuRow title={"Most Upvotes"}/>
                <MenuRow title={"Least Upvotes"}/>
                <MenuRow title={"Most Comments"}/>
                <MenuRow title={"Least Comments"}/>
              </div>
            </div>
            <div className="Bar__Container">
              <button className="Bar__Container-Button">
                + Add Feedback
              </button>
            </div>
        </div>
    )
}

export default Bar
