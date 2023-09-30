// import firebase from '../../firebase.js';
// import React, { useEffect, useState } from 'react';
import './UserList.css'
import Collection from './Collection/Collection.jsx';
import Navbar from './Navbar/Navbar.jsx';
import MainCollection from './MainCollection/MainCollection.jsx';

const UserList = () => {


     return (
           <div className='UsersList'>
                <Collection/>
                <Navbar/>
                <MainCollection/>
           </div>
        )
}

export default UserList;