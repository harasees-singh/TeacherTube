import styles from './Modal.module.css'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ImCross } from 'react-icons/im';
import { addDoc, arrayUnion, collection, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../serverless/firebase';
const Modal: React.FC<{ setShowModal: React.Dispatch<React.SetStateAction<boolean>> }> = (props) => {
    const [classCode, setclassCode] = useState('');
    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setclassCode(event.currentTarget.value);
    }
    const submitHandler = async () => {
        const userId = auth.currentUser?.uid;
        await setDoc(doc(db, `users/${userId}`), {
            enrolledClassrooms: arrayUnion(classCode)
        }, {merge: true})
        console.log(classCode);
    }
    return (
        <>
            <div className={styles.backdrop} onClick={() => props.setShowModal(false)}></div>
            <div className={styles.overlay}>
                <header>
                    <h2>Join a class</h2>
                    <ImCross onClick={() => props.setShowModal(false)} className={styles.icon}/>
                </header>
                <footer>
                    <TextField
                        id="outlined-name"
                        label="Enter Class Code"
                        value={classCode}
                        onChange={changeHandler}
                        className={styles.muiTextField}
                    />
                    <Button
                        variant="contained"
                        onClick={submitHandler}
                    >
                        Join Class
                    </Button>
                </footer>
            </div>
        </>
    )
}

export default Modal