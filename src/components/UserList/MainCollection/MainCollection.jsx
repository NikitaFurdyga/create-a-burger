import React, { useEffect, useState } from 'react';
import firebase from '../../../firebase.js';
import './MainCollection.css'

const MainCollection = () => {

    const ref = firebase.firestore().collection('users')
    const [data, setdata] = useState([])

    function getData() {
        ref.onSnapshot((QuerySnapshot) => {
            const items = []
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setdata(items)
        })
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(data);

    return (
        <div className="MainCollection">
            {data.map((elem) => {
                return (
                    <div className='Subsidiary'>  
                        <img src = {elem.img}/>                   
                        <p>{elem.name}</p>
                        <p>{elem.price} руб</p>
                    </div>
                )
            }
            )}
        </div> 
    )
}

export default MainCollection;
