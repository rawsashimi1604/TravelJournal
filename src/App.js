import React from "react";
import Navbar from "./components/Navbar"
import Entry from "./components/Entry"

import data from "./data"

// Parse data from data.js
const newData = data.map(data => {
    return <Entry
        key={data.id}
        data={data}
    />
})


export default function App() {
    return (
        <div className="container">
            <Navbar/>

            <main className="main">
                {newData}  
            </main>
            
        </div>
        
    )
}