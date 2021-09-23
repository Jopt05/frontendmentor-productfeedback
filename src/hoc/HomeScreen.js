import React, { useContext } from 'react'
import ResponsiveHeader from '../components/homescreen/ResponsiveHeader'
import Header from '../components/homescreen/Header'
import Bar from '../components/homescreen/Bar'
import Content from '../components/homescreen/Content'
import NoContent from '../components/homescreen/NoContent'
import { AppContext } from './Context'

const HomeScreen = () => {

  const { isComponentVisible } = useContext(AppContext);

    return (
     <div className="Container">
        <div className={ `Curtain ${ isComponentVisible ? 'Active' : 'Inactive' }` }></div>
        <ResponsiveHeader />
        <Header />
        <Bar />
        <Content />
        <NoContent />
      </div>
    )
}

export default HomeScreen
