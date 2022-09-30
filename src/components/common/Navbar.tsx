import React from 'react'
import classes from './Navbar.module.css'
import img from './atcoder.png'
import Modal from './Modal'
import {useState} from 'react'
import ReactDOM from 'react-dom'
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
            {showModal && ReactDOM.createPortal(<Modal setShowModal={setShowModal} />, document.getElementById('modal')!) }
        </div>
    )
}

export default Navbar