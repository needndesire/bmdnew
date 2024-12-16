"use client"

import { createContext, useState } from "react"


export let HeaderContext=createContext()


export default function ContextManege({children}){
    let [header,setheader,menu,setmenu]=useState('')
    return(
        <>
        <HeaderContext.Provider value={[header,setheader,menu,setmenu]}>
                {children}
        </HeaderContext.Provider>
        </>
    )
}