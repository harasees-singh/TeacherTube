import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ClassTile from '../components/classroom/ClassTile'
import styles from './Dashboard.module.css'
import Classroom from './Classroom'
import Class from '../models/class'
import NotFound from './NotFound'

function Dashboard() {
    const classesList: Class[] = [
        new Class('software engineering', 'rajesh bhatia'),
        new Class('machine learning', 'padmavati'),
        new Class('machine learning', 'padmavati'),
        new Class('machine learning', 'padmavati'),
        new Class('machine learning', 'padmavati'),
        new Class('machine learning', 'padmavati'),
        new Class('machine learning', 'padmavati'),
    ]
    return (
        <>
            <Switch>
                <Route path='/dashboard' exact>
                    {/* grid of classtiles */}
                    <div className={styles.grid}>
                        {
                            classesList.map( (classObject, index) => {
                                return <ClassTile key={index} {...classObject} />
                            })
                        }
                    </div>
                </Route>
                <Route path='/dashboard/class'>
                    <Classroom />
                </Route>
                <Route path='*'><NotFound /></Route>
            </Switch>
        </>
    )
}

export default Dashboard