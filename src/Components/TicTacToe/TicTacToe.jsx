import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'

let data = ["","","","","","","","",""];
//this will act as a storage ;


export const TicTacToe = () => {
    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);
    let titleRef = useRef(null);
    // let b1,b2,b3,b4,b5,b6,b7,b8,b9 = useRef(null); 
    // let [b1, b2, b3, b4, b5, b6, b7, b8, b9] = Array.from({ length: 9 }, () => useRef(null));
    // const [b1, b2, b3, b4, b5, b6, b7, b8, b9] = Array.from({ length: 9 }, () => useRef(null));
    // const refs = Array.from({ length: 9 }, () => useRef(null));

    const brr = [b1,b2,b3,b4,b5,b6,b7,b8,b9]

    const toggle = (e,num)=>{
        if(lock) return 0;
        if(count%2 === 0) {
            e.target.innerHTML = `<img src='${cross}'>`;  
            data[num] = "x";
            setCount(++count)
        }
        else{
            e.target.innerHTML =   `<img src='${circle}'>`;
            data[num]="o";
            setCount(++count);
        }
        chkWin();
    }

    const chkWin = ()=>{
        if(data[0] === data[1] && data[1] === data[2] && data[2]!==""){
         won(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5]!==""){
         won(data[5]);

        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8]!==""){
            won(data[8]);
   
           }
           else if (data[0] === data[3] && data[3] === data[6] && data[6]!==""){
            won(data[6]);
   
           }
           else if (data[1] === data[4] && data[4] === data[7] && data[7]!==""){
            won(data[7]);
   
           }
           else if (data[2] === data[5] && data[5] === data[8] && data[8]!==""){
            won(data[8]);
   
           }
           else if (data[0] === data[4] && data[4] === data[8] && data[8]!==""){
            won(data[8]);

           }
           else if (data[0] === data[1] && data[1] === data[2] && data[2]!==""){
            won(data[2]);
           }
           else if (data[2] === data[4] && data[4] === data[6] && data[6]!==""){
            won(data[6]);
           }


    }
    const won = (winner)=>{
        setLock(true);
        if(winner === "x")
        {
            titleRef.current.innerHTML = `Congratulations: <img src='${cross}'> Won`;
        }
        else{
            titleRef.current.innerHTML =  `Congragulations: <img src='${circle}'> Won`
        }

    
    }

    const reset = ()=>{
        setLock(false);
         data = ["","","","","","","","",""];
        titleRef.current.innerHTML =`Tic Tac Toe Game In <span>React</span>`
        brr.map(value=>{
            value.current.innerHTML = ""
        })
    
    }



  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}> Tic Tac Toe Game In <span>REACT</span></h1>
     <div className='board'>
   <div className="row1">
    <div className="boxes" onClick={(e)=>toggle(e,0)}       ref={b1} ></div> 
    <div className="boxes"onClick={(e)=>toggle(e,1)}         ref={b2}></div>
    <div className="boxes" onClick={(e)=>toggle(e,2)}        ref={b3} ></div>
   </div>
   <div className="row2">
    <div className="boxes" onClick={(e)=>toggle(e,3)} ref={b4}></div>
    <div className="boxes" onClick={(e)=>toggle(e,4)} ref={b5}></div>
    <div className="boxes"  onClick={(e)=>toggle(e,5)}  ref={b6}></div>
   </div>
   <div className="row3">
    <div className="boxes"  onClick={(e)=>toggle(e,6)} ref={b7}></div>
    <div className="boxes" onClick={(e)=>toggle(e,7)}   ref={b8}></div>
    <div className="boxes" onClick={(e)=>toggle(e,8)} ref={b9}></div>
   </div>
     </div>
     

     <button className='reset' onClick={()=>reset()} >Reset</button>
    </div>
  )
}
