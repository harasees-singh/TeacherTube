import React from 'react'
import classes from './Navbar.module.css'
import img from './atcoder.png'
import Modal from './Modal'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence } from 'framer-motion'
function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const renderModalHandler = () => {
        setShowModal(true);
    }
    return (
        <div className={classes.navbar}>
            <h3>teacher tube</h3>
            <div className={classes['nav--auth']}>
                <button onClick={renderModalHandler}>join class</button>
                <img src={img}></img>
            </div>
            {/* <AnimatePresence> */}
                {/* {showModal && */}
                    {ReactDOM.createPortal(
                        <Modal setShowModal={setShowModal} showModal={showModal} />
                        , document.getElementById('modal')!
                    )}
                {/* } */}
            {/* </AnimatePresence> */}
        </div>
    )
}

export default Navbar