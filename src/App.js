import React from "react";
import Navbar from "./components/Navbar"
import Entry from "./components/Entry"

import data from "./data"


export default function App() {
    return (
        <div className="container">
            <Navbar/>

            <main className="main">
                <Entry/>     
            </main>
            
        </div>
        
    )
}