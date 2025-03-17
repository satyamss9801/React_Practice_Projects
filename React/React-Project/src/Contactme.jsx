import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Contactme() {
    return (
        <>
        <div className="container">
            <h1>...............Contact Me ...............</h1>
            <label htmlFor="name">NAME : </label>
            <input type="text" name='name' placeholder='Enter Your name' /><br />
            <label htmlFor="gmail">Gmail Id: </label>
            <input type="text" name='gmail' placeholder='Enter Gmail' />
            <h1>Please click on Button</h1>
            <button onClick={() => document.querySelector("h1").innerText="Form Submited successfully"}>SUBMIT</button>
        </div>
        </>
    )
}

export default Contactme;
