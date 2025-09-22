import { useGSAP } from '@gsap/react'
import { Main } from 'next/document'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {
  const random =    gsap.utils.random(-500,500,100)
const [xvalue, setXValue] = useState(0)
// const boxRef = useRef()
//   useGSAP(() =>{
//     gsap.from(boxRef.current,{
//       rotate:360,
//       scale:0,
//       duration:1,
//       delay:1,
//       opacity:0

//     })
//   })
const boxRef = useRef()
  useGSAP(() =>{
    gsap.to(boxRef.current,{
      x:xvalue,
     
      duration:1,
      

    })
  },[xvalue])
  return (
    <div>
  <main>
    <button onClick={()=>{
      setXValue(random)
    }} className="move">Animate</button>
    <div ref={boxRef} className="box">
      
    </div>
   {/* <div className="container">
    <div className="circle"></div>
    <div ref={boxRef} className="box"></div>
   </div>
   <div className="kuch">
    <div className="circle"></div>
    <div className="box"></div>
   </div> */}
  </main>
    </div>
  )
}

export default App
