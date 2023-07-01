import React from 'react'
// Components
import TopNav from './TopNav'
import Nav from './Nav';
import Notification from './Notification';
// stylesheet
import './navigation.scss';



const Navigation = () => {
    return (
        <nav>
            <TopNav />
            <Nav />
            <Notification />
        </nav>
    )
}

export default Navigation
