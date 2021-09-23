import React from 'react'
import ResponsiveHeader from '../components/homescreen/ResponsiveHeader'
import Header from '../components/homescreen/Header'
import Bar from '../components/homescreen/Bar'
import Content from '../components/homescreen/Content'
import NoContent from '../components/homescreen/NoContent'

const HomeScreen = () => {
    return (
     <div className="Container">
        <ResponsiveHeader />
        <Header />
        <Bar />
        <Content />
        <NoContent />
      </div>
    )
}

export default HomeScreen
