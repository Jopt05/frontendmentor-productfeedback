import React, { useContext } from 'react'
import { AppContext } from '../../hoc/Context'
import ContentElement from './ContentElement'
import ResponsiveMenu from './ResponsiveMenu'

const Content = () => {

  const context = useContext(AppContext);

  const { isComponentVisible, Data, ContentExists } = context;

    return (
        <div className={ `Content ${ ContentExists ? '' : 'Hidden' }` }>
          <div className={ `Curtain ${ isComponentVisible ? 'Active' : 'Inactive' }` }></div>
          <ResponsiveMenu />
          {
            Data?.data?.feedbacks.map( (el) =>
            <ContentElement 
              votes={ el.votes } 
              title={ el.title }
              description={ el.description }
              tags={ el.tags }
              comments={ el.comments }
              id={ el._id } /> 
            )
          }
        </div>
    )
}

export default Content
