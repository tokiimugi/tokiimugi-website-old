import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar } from './components/NavBar';
import { Blog } from './components/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2GUIHUfINxar06G7aJeDes_T4sQLh7dk",
    authDomain: "tokiimugi-website.firebaseapp.com",
    databaseURL: "https://tokiimugi-website-default-rtdb.firebaseio.com",
    projectId: "tokiimugi-website",
    storageBucket: "tokiimugi-website.appspot.com",
    messagingSenderId: "410123432207",
    appId: "1:410123432207:web:885a58ede6e326ba578e7a",
    measurementId: "G-C7FL9QS1FW"
  };

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);


const Send = ()=>{
    function handleButton(){
        set(ref(database, 'test'),{
            test: test
        })
    }
    return(
        <button className="main" onClick={handleButton}>test</button>
    )
}

// ========================================

const items = {
    Home: <Blog/>,
    Portfolio: <p className="main">test</p>,
    About: <Send/>,
}

const Root = (props) => {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {Object.keys(props.items).map((ele, val) => {
                        return (
                            <Route key={val} path={val ? "/" + ele.toLowerCase() : '/'} element={items[ele]} />
                        )
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}


ReactDOM.render(
    <NavBar items={items} />,
    document.getElementById('nav')
);
ReactDOM.render(<Root items={items}/>, document.getElementById('root'))


