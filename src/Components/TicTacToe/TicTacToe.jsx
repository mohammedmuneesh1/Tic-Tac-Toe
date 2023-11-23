import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import circle from "../Assets/circle.png";
import cross from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""]; //this will act as a storage ;

export const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [cwon, setCwon] = useState(0);
  let [draw, setDraw] = useState(0);
  let [crwon, setCrwon] = useState(0);

  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  const b1 = useRef();
  const b2 = useRef();
  const b3 = useRef();
  const b4 = useRef();
  const b5 = useRef();
  const b6 = useRef();
  const b7 = useRef();
  const b8 = useRef();
  const b9 = useRef();
  const brr = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

  const toggle = (e, num) => {
    if (lock) return 0;
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle}'>`;
      data[num] = "o";
      setCount(++count);
    }
    chkWin();
  };

  const chkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    }
    //data[]!=="" didnt give then , empty rows makes the condition true and run won function;
    else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (!data.includes("")) {
      // All cells are filled, and no winner
      won("draw");
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      setCrwon(crwon + 1);

      titleRef.current.innerHTML = `Congratulations: <img src='${cross}'> Won`;
    } else if (winner === "o") {
      setCwon(cwon + 1);
      titleRef.current.innerHTML = `Congragulations: <img src='${circle}'> Won`;
    } else {
      setDraw(draw + 1);
      titleRef.current.innerHTML = `Draw`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    // titleRef.current.innerHTML = `<span className="tic">Tic</span><span className="tac"> Tac </span><span className="toe">Toe</span>  `;
    // titleRef.current.innerHTML = `<span style = {{color:"#26ffcb"}}>Tic</span><span className="tac"  style = {{color:"#26ffcb"}}> Tac </span><span className="toe">Toe</span>`;
    titleRef.current.innerHTML = `<span style="color:#26ffcb">TIC</span>  <span style="color:rgba(169,191,201,255)">TAC</span>   <span style="color:rgba(255,194,38,255)">TOE</span> `;

    brr.map((value) => {
     return value.current.innerHTML = "";
    });
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        {" "}
        Tic Tac Toe  Using <span className="react">REACT</span>
      </h1>

      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)} ref={b1}></div>
          <div className="boxes" onClick={(e) => toggle(e, 1)} ref={b2}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)} ref={b3}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)} ref={b4}></div>
          <div className="boxes" onClick={(e) => toggle(e, 4)} ref={b5}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)} ref={b6}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)} ref={b7}></div>
          <div className="boxes" onClick={(e) => toggle(e, 7)} ref={b8}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)} ref={b9}></div>
        </div>
      </div>

      <button className="reset" onClick={() => reset()}>
        <span class="reset-text-one">Reset</span>
        <span class="reset-text-two">Play Again</span>
      </button>

      <div className="result">
        <div className="circle-box">
          <h3>CIRCLE</h3>
          <span>{cwon}</span>
        </div>
        <div className="draw-box">
          <h3>DRAW</h3>
          <span>{draw}</span>
        </div>
        <div className="cross-box">
          <h3>CROSS</h3>
          <span>{crwon}</span>
        </div>
      </div>
    </div>
  );
};
