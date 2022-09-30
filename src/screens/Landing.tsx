import React from 'react'
import { Link } from 'react-router-dom'
function Landing() {
    return (
        <>
            <div>Landing</div>
            <Link to='/dashboard'>dashboard</Link>
        </>
    )
}

export default Landing