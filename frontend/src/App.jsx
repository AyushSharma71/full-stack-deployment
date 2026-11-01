import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const base_url = "http://15.206.211.96:3500";
  console.log(base_url)
  const [message,setMessage] =useState('');

  useEffect(()=>{
    // axios.get(`${base_url}/api/message`)
    //   .then(({ data }) => setMessage(data.message))
    //   .catch((error) => console.error("Failed to load the data", error));
    async function fetchmessage() {
      console.log("useEffect running");

      const response =await axios.get(`${base_url}/api/message`)
      console.log("API response:", response.data);
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
