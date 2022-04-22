import {createRoot } from 'react-dom/client'
import React, {useEffect } from 'react'
import App from './App'

const container = document.getElementById("root")
const root = createRoot(container)

const AppWithCallbackRender = () => {
    useEffect(()=>{
        console.log("App rendered")
    })

    return <App />
}

root.render(<AppWithCallbackRender />)