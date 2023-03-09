"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // useEffect(()=>{
  //   let c = document.getElementById('canvas');
  //   let $ = c.getContext('2d');
  //   let col = function(x,y,r,g,b){
  //     $.fillStyle = `rgb(${r},${g},${b})`
  //     $.fillRect(x,y,1,1) 
  //   }
  //   let R = function(x,y,z){
  //     return (Math.floor(192 + 64 * Math.cos((x*x - y*y)/300 + t)));
  //   }
  //   let G = function(x,y,t){
  //     return (Math.floor(192+64*Math.sin((x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300)))
  //   }
  //   let B = function(x,y,t){
  //     return (Math.floor(192+64*Math.sin((5*Math.sin(t/9)+(x-100)*(x-100) + (y-100)*(y-100))/1100)))
  //   }

  //   let t = 0
  //   let run = function(){
  //     for(var x = 0;x<=35;x++){
  //       for(var y=0;y<=35;y++){
  //         col(x,y,R(x,y,t),G(x,y,t),B(x,y,t))
  //       }
  //     }
  //     t = t + 0.080
  //     window.requestAnimationFrame(run)
  //   }
  //   run()
  // },[])
  return (
    <div className='bg-black'>
      <div id="canvas" className='h-screen text-center my-auto flex justify-center items-center font-bold text-5xl text-white'>
      <TypeAnimation
      sequence={[
        'The Programming Club', 
        1000, 
        'IIT Indore', 
        
        
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1.5em' }}
    />
      </div>
      <style jsx>
        {`
          #canvas{
            
            animation:bg ease-in-out infinite 20000ms;
          }

          @keyframes bg{
            0%{
              background:url('images/Frame21.jpg');
              background-size:cover;background-position:center;
              
            }
            10%{
              background:url('images/Frame22.jpg');
              background-size:cover;background-position:center;
            }
            20%{
              background:url('images/Frame23.jpg');
              background-size:cover;background-position:center;
            }
            30%{
              background:url('images/Frame24.jpg');
              background-size:cover;background-position:center;
            }
            40%{
              background:url('images/Frame25.jpg');
              background-size:cover;background-position:center;
            }
            50%{
              background:url('images/Frame26.jpg');
              background-size:cover;background-position:center;
            }
            60%{
              background:url('images/Frame27.jpg');
              background-size:cover;background-position:center;
            }
            70%{
              background:url('images/Frame28.jpg');
              background-size:cover;background-position:center;
            }
            80%{
              background:url('images/Frame29.jpg');
              background-size:cover;background-position:center;
            }
            90%{
              background:url('images/Frame210.jpg');
              background-size:cover;background-position:center;
            }
            100%{
              background:url('images/Frame211.jpg');
              background-size:cover;background-position:center;
            }
          }
          
        `}
      </style>
    </div>
  )
}
