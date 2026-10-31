import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const base_url = import.meta.env.VITE_API_URL;
  const [message,setMessage] =useState('');

  useEffect(()=>{
    // axios.get(`${base_url}/api/message`)
    //   .then(({ data }) => setMessage(data.message))
    //   .catch((error) => console.error("Failed to load the data", error));
    async function fetchmessage() {
      const response =await axios.get(`${base_url}/api/message`)
      setMessage(response.data.message)
    }
    fetchmessage();
  },[])

  return (
    <>
      <h1>Data come from backend</h1>
      <h2>data: {message} </h2>
    </>
  )
}

export default App
