import React from "react";
import { useState, useEffect } from "react";
import firebase from "../../firebase";
import Header from "../Header";
import './UsersLists.css'

function UsersList(){
    
const ref = firebase.firestore().collection('users')
const [data, setData] = useState([])

function getData() {
    ref.onSnapshot((QuerySnapshot) =>{
        const items = []
        QuerySnapshot.forEach((doc) =>{
        items.push(doc.data())
    })
    setData(items)
    })
}

useEffect(() => {
    getData(
    )
},[])
console.log(data);


return(
    <>


     <div className="ug2">
         {data.map(elem => {
            return(
                <div className="ug1">
                    <img className="logo10" src={elem.img} />
                    <p className="p15">{elem.description}</p>
                    <p className="p16">{elem.price}₽</p>
                    <button className="b1">{elem.button}</button>
                </div>
            )
        }
        
        )}
         </div>
         


        </>
)
        }
export default UsersList