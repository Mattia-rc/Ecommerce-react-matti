
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios' 

export const dataContext = createContext()

function DataContext({children}) {

  const [data, setData] = useState([])
  useEffect(()=>{
    axios("data.json").then((res)=>setData(res.data))
  },[])

  return (
    <dataContext.Provider value={{ data }}>{children}</dataContext.Provider>
  )
}

export default DataContext