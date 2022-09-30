import React from 'react'
import styles from './ClassTile.module.css';
import { useHistory } from 'react-router-dom'

const ClassTile: React.FC<{ instructor: string, course: string }> = ({ instructor, course }) => {
    const history = useHistory();
    const tileClickHandler = () => {
        history.push(`dashboard/${course}`)
    }
    return (

        <div className={styles.tile} onClick={tileClickHandler}>
            <h2>{course}</h2>
            <p>{instructor}</p>
        </div>
    )
}

export default ClassTile