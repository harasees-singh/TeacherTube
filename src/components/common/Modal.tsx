import styles from './Modal.module.css'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ImCross } from 'react-icons/im';
import { addDoc, arrayUnion, collection, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../serverless/firebase';

const Modal: React.FC<{ setShowModal: React.Dispatch<React.SetStateAction<boolean>>, showModal: boolean }> = (props) => {
    const [classCode, setclassCode] = useState('');
    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setclassCode(event.currentTarget.value);
    }
    const submitHandler = async () => {
        const userId = auth.currentUser?.uid;
        await setDoc(doc(db, `users/${userId}`), {
            enrolledClassrooms: arrayUnion(classCode)
        }, { merge: true })
        console.log(classCode);
    }
    return (
        <AnimatePresence>
            {props.showModal &&
                <>
                    <motion.div
                        className={styles.backdrop}
                        onClick={() => props.setShowModal(false)}
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 0.6,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.3,
                            }
                        }}
                    >
                    </motion.div>
                    <motion.div
                        className={styles.overlay}
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1,
                            transition: {
                                duration: 0.2,
                            }
                        }}
                        exit={{
                            scale: 0,
                            transition: {
                                duration: 0.2,
                            }
                        }}
                    >
                        <header>
                            <h2>Join a class</h2>
                            <ImCross onClick={() => props.setShowModal(false)} className={styles.icon} />
                        </header>
                        <motion.footer
                            initial={{
                                y: -50,
                            }}
                            animate={{
                                y: 0,
                                transition: {
                                    delay: 0.1,
                                    duration: 0.1,
                                }
                            }}
                        >
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
                        </motion.footer>
                    </motion.div>
                </>
            }
        </AnimatePresence>
    )
}

export default Modal