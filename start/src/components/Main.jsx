import Image from "next/image"
import React from "react"

const greetMe = 'Helo Everyone'

export default function Main(){
  return(
    <div className="grid grid-cols-2 mt-10">
      <div>
     <Image src='/chairs.jpg' alt="living room interior" width={600} height={500}/>
    </div>

     <div className="text-4xl bg-slate-950 text-white flex flex-col justify-center items-center">
     <h2>Good morning,{greetMe}</h2>
     <h1>Fundamentals of React JS</h1>
     </div>
    </div>
   
  )
}