import React from 'react'
import { Link } from 'react-router-dom'

const Notification = () => {
    return (
        <div className='notification'>
            <div className='notification_container'>
                    <p className='headline'>New Styles on Sale: Up to 40% Off</p>
                    <p className='des'>Applies to orders of ₹ 14 000.00 or more. <Link to="/">View details</Link> </p>
            </div>
        </div>
    )
}

export default Notification
