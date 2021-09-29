import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Link from "next/link"
import React, { useState } from 'react';
import dice_image_1 from "../../public/images/dice_image_1.png";
import dice_image_2 from "../../public/images/dice_image_2.png";
import dice_image_3 from "../../public/images/dice_image_3.png";
import dice_image_4 from "../../public/images/dice_image_4.png";
import dice_image_5 from "../../public/images/dice_image_5.png";
import dice_image_6 from "../../public/images/dice_image_6.png";


export default function rendertable() {
  const [diceNumber,SetdiceNumber]=useState(1);
  const [dice_source,Setdicesource]=useState(dice_image_1);
  const [disable_button_one,Setdisablebuttonone]=useState(false);
  const [disable_button_two,Setdisablebuttontwo]=useState(false);


  const [player_one_score,Setplayer_one_score]=useState(0);
  const [player_two_score,Setplayer_two_score]=useState(0);
  const [activePlayerone,SetactivePlayerone]=useState("");
  const [activePlayertwo,SetactivePlayertwo]=useState("");

  const [winner,setWinner]=useState("");
  

  const playerone_score=()=>{
    let total_score=player_one_score + diceNumber;
    Setplayer_one_score(total_score);
    if(total_score >= 100){
      setWinner("Winner is Player 1");
      Setdisablebuttonone(true);
      Setdisablebuttontwo(true);
    }
  }
  const playertwo_score=()=>{
    let total_score=player_two_score + diceNumber;
    Setplayer_two_score(total_score);
    if(total_score >= 100){
      setWinner("Winner is Player 2");
      Setdisablebuttonone(true);
      Setdisablebuttontwo(true);
    }
  }

  const generateNumber_diceone=()=>{
    SetactivePlayerone("Active");
    var dice_value=Math.floor(Math.random()*6)+1;
    console.log(dice_value);
    SetdiceNumber(dice_value);
    // let p1_score=player_one_score;
    // p1_score=dice_value+p1_score;
    // console.log("total_score",p1_score);
    // Setplayer_one_score(p1_score);
   
    if(dice_value==1){
        Setdicesource(dice_image_1);
    }else if(dice_value==2){
        Setdicesource(dice_image_2);
    }else if(dice_value==3){
        Setdicesource(dice_image_3);
    }else if(dice_value==4){
        Setdicesource(dice_image_4);
    }else if(dice_value==5){
        Setdicesource(dice_image_5);
    }else{
        Setdicesource(dice_image_6);
        Setdisablebuttonone(true);
        Setdisablebuttontwo(false);
        SetactivePlayerone(" ");
        SetactivePlayertwo("Active");
      
    }
  }

  const generateNumber_dicetwo=()=>{
    SetactivePlayertwo("Active");
    var dice_value=Math.floor(Math.random()*6)+1;
    SetdiceNumber(dice_value);
   
    // let p1_score=player_two_score;
    // p1_score=dice_value+p1_score;
    // Setplayer_two_score(p1_score);
     
    if(dice_value==1){
        Setdicesource(dice_image_1);
    }else if(dice_value==2){
        Setdicesource(dice_image_2);
    }else if(dice_value==3){
        Setdicesource(dice_image_3);
    }else if(dice_value==4){
        Setdicesource(dice_image_4);
    }else if(dice_value==5){
        Setdicesource(dice_image_5);
    }else{
        Setdicesource(dice_image_6);
        Setdisablebuttontwo(true);
        Setdisablebuttonone(false);
        SetactivePlayertwo(" ");
        SetactivePlayerone("Active");
    }
  
  }
  const newGame=()=>{
    Setdicesource(dice_image_1);
    Setdisablebuttonone(false) ;
    Setdisablebuttontwo(false) ;
    Setplayer_one_score(0);
    Setplayer_two_score(0);
    SetactivePlayerone("Active");
    setWinner(" ");
    SetdiceNumber(1);
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-12">
                 <h1 className="text-center">Dice Game</h1>
                 <h1 className="text-center text-success">{winner}</h1>
            </div>
            <div className="col-sm-12 text-center">
                <button className="btn btn-success" onClick={newGame}> New Game</button>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6">
               <h2 className="text-info">{activePlayerone}</h2>
               <h2>Player 1</h2>
               <h3>Score {player_one_score}</h3>
               <button className="btn btn-primary" onClick={generateNumber_diceone}  disabled={disable_button_one}>Throwdice</button>
               
               <div className="mt-3">
                  <button className="btn btn-primary" onClick={playerone_score} disabled={disable_button_one}>Save Score</button>
               </div>
            </div>
            <div className="col-sm-6 text-end">
            <h2 className="text-info">{activePlayertwo}</h2>
               <h2>Player 2</h2>
               <h3>Score {player_two_score}</h3>
               <button className="btn btn-primary" onClick={generateNumber_dicetwo} disabled={disable_button_two}> Throwdice</button>
               <div className="mt-3">
                  <button className="btn btn-primary" onClick={playertwo_score}  disabled={disable_button_two}>Save Score</button>
               </div>
            </div>
        </div>
        <div className="text-center">
            <Image  src={dice_source}></Image>
        </div>
       
    </div>
  )
}
