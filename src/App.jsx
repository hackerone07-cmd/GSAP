import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function App() {

  const boxRef = useRef()
  const rotatebox = function(){
    gsap.to(boxRef.current,{
      rotate:360,
      duration:1,
    })
  }
  return (
    <main>
    <button onClick={rotatebox}> Animate</button>
    <div ref={boxRef} className="box">Box</div>
    </main>
  )
}

export default App
