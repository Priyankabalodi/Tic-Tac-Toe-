import React, { useState,useRef } from 'react'
import '../TicTacToe/TicTacToe.css'
import Circle_icon from '../Assests/o.jpg'
import Cross_icon from '../Assests/x.jpeg'

let data = ["","","","","","","","",""];

export const TicTacToe = () => {
  let [lock,setLock] = useState(false);
    let [count,setCount] = useState(0);
    let titleRef = useRef(null);
    let box1 = useRef(null); 
    let box2 = useRef(null);
    let box3= useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7= useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    const toggle = (e,num) => {
         if(lock){
          return 0;
         }
         if(count%2===0){
          e.target.innerHTML= `<img src= '${Cross_icon}'>`;
          data [num] = "x";
          setCount(++count);
         }
         else {
          e.target.innerHTML= `<img src = '${Circle_icon}'>`;
          data [num] = "o";
          setCount(++count);
         }
         checkWin();
    }
     const checkWin = () => {
       if (data[0]===data[1]&&data[1]===data[2]&&data[2]!=="")
       {
         won(data[2]);
       }
       else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!=="")
        {
         won(data[5]);
        }
        else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!=="")
          {
           won(data[8]);
          }
       else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!=="")
       {
        won(data[6]);
       }
       else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!=="")
        {
         won(data[7]);
        }
        else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!=="")
          {
           won(data[8]);
          }
          else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!=="")
            {
             won(data[8]);
            }
            else if(data[0]===data[1]&&data[1]===data[2]&&data[2]!=="")
              {
               won(data[2]);
              }
              else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!=="")
                {
                 won(data[6]);
                }


     }

      const won = (winner) => {
        setLock(true);
        if(winner==='x')
        {
          titleRef.current.innerHTML = `congratulations: <img src=${Cross_icon}> Wins`;
        }
        else{
          titleRef.current.innerHTML = `congratulations: <img src=${Circle_icon}> Wins`;
        }
      } 
       const reset = () =>{
        setCount(0);
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = `Tic Tac Toe In <span>React</span>`;
        document.querySelectorAll('.boxes').forEach(box=> box.innerHTML="");
       } 
  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
      <div className='board'>
         <div className="row1">
          <div className="boxes" onClick={(e) =>{toggle(e,0)}}></div>
          <div className="boxes" onClick={(e) =>{toggle(e,1)}}></div>
          <div className="boxes" onClick={(e) =>{toggle(e,2)}}></div>
         </div>
         <div className="row2">
          <div className="boxes" onClick={(e) =>{toggle(e,3)}}></div>
          <div className="boxes" onClick={(e) =>{toggle(e,4)}} ></div>
          <div className="boxes" onClick={(e) =>{toggle(e,5)}}></div>
         </div>
         <div className="row3">
          <div className="boxes" onClick={(e) =>{toggle(e,6)}}></div>
          <div className="boxes" onClick={(e) =>{toggle(e,7)}}></div>
          <div className="boxes" onClick={(e) =>{toggle(e,9)}}></div>
         </div>
      </div>
     <button className='reset' onClick={()=>{reset()}}>Restart</button>
    </div>
  )
}