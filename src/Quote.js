import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Quote() {
  const [advice, setAdvice] = useState('')

  async function getAdvice(){
    const res = await axios.get("https://api.adviceslip.com/advice").then((res)=>{
      return res.data
    })
    setAdvice(res.slip.advice)
  }
  
  useEffect(()=>{
    getAdvice()
  },[])
  return (
    <div className='quote card'>
   <h5 className='card-body advise'>{advice? advice : 'Loading...'}</h5> 
   <div>
     <button className='button-transform btn btn-outline-secondary border rounded-pill' onClick={getAdvice}>Give me some advice!!</button>
     </div>
    </div>
  )
}
