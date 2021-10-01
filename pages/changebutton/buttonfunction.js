import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; 
import { faTimes} from "@fortawesome/free-solid-svg-icons"; 
import { faCircle} from "@fortawesome/free-solid-svg-icons";// import the icons you need
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from "next/link"
import React, { useState } from 'react';





export default function buttonfunction(){
const [clickCount,Setclickcount]=useState(1);
const [PlayerOne,SetPlayerOne]=useState("Active");
const [PlayerTwo,SetPlayerTwo]=useState("");
const [button_id,Setbutton_id]=useState(0);
const [btn_state,Set_btn_state]=useState(false);
const [winner,Setwinner]=useState("");


const [array_one,Setarray_one]=useState([]);
const [array_two,Setarray_two]=useState([]);

const [one_icon,Set_one_icon]=useState(faTimes);
const [two_icon,Set_two_icon]=useState(faCircle);

const [btn_one,Set_btn_one]=useState(false);
const [btn_two,Set_btn_two]=useState(false);
const [btn_three,Set_btn_three]=useState(false);
const [btn_four,Set_btn_four]=useState(false);
const [btn_five,Set_btn_five]=useState(false);
const [btn_six,Set_btn_six]=useState(false);
const [btn_seven,Set_btn_seven]=useState(false);
const [btn_eight,Set_btn_eight]=useState(false);
const [btn_nine,Set_btn_nine]=useState(false);





var Button_icon ={};

function changeIconPlayerOne(id){
    Setbutton_id(id);
    let click_number=clickCount+1;
   
    
   
    if(click_number%2==1 ){
      
        if(id==1 && btn_one==false){
            array_two.push(id)
           
            Set_btn_one(true);
        }else if(id==2 && btn_two==false){
            array_two.push(id)
            Set_btn_two(true);
        }else if(id==3 && btn_three==false ){
            array_two.push(id)
            Set_btn_three(true);
        }else if(id==4 && btn_four==false ){
            array_two.push(id)
            Set_btn_four(true);
        }else if(id==5 && btn_five==false ){
            array_two.push(id)
            Set_btn_five(true);
        }else if(id==6 && btn_six==false ){
            array_two.push(id)
            Set_btn_six(true);
        }else if(id==7 && btn_seven==false ){
            array_two.push(id)
            Set_btn_seven(true);
        }else if(id==8 && btn_eight==false ){
            array_two.push(id)
            Set_btn_eight(true);
        }else if(id==9 && btn_nine==false ){
            array_two.push(id)
            Set_btn_nine(true);
        }
        SetPlayerOne(" ");
        SetPlayerTwo("Active");
        calculateWinner(array_two) ;
        console.log("check_res",calculateWinner(array_one));
    }else if(click_number%2==0){
     
        if(id==1 && btn_one==false){
            array_one.push(id)
            console.log("a gya");
            Set_btn_one(true);
        }else if(id==2 && btn_two==false){
            array_one.push(id)
            Set_btn_two(true);
        }else if(id==3 && btn_three==false ){
            array_one.push(id)
            Set_btn_three(true);
        }else if(id==4 && btn_four==false ){
            array_one.push(id)
            Set_btn_four(true);
        }else if(id==5 && btn_five==false ){
            array_one.push(id)
            Set_btn_five(true);
        }else if(id==6 && btn_six==false ){
            array_one.push(id)
            Set_btn_six(true);
        }else if(id==7 && btn_seven==false ){
            array_one.push(id)
            Set_btn_seven(true);
        }else if(id==8 && btn_eight==false ){
            array_one.push(id)
            Set_btn_eight(true);
        }else if(id==9 && btn_nine==false ){
            array_one.push(id)
            Set_btn_nine(true);
        }
        SetPlayerOne("Active ");
        SetPlayerTwo(" ");
    }
    
    // if(click_number <= 3){
    //     array_one.push();
    // }else if(click_number > 3 && click_number <= 6 ){
    //     array_two.push();
    // }else if(click_number > 6 && click_number <=9 ){
    //     array_three.push();
    // }
    if(click_number==10){
        Set_btn_state(true);
        Setwinner("Winner is Player One");
        
    }
    Setclickcount(click_number);
}
 function calculateWinner(squares) {
    console.log("calculateWinner");
    console.log("squares",squares);
    const lines = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
    console.log(lines.length);
    for (let i = 0; i < lines.length; i++) {
      
        
      const [a, b, c] = lines[i];
      console.log("squares[a]",squares[a]);
      console.log("squares[b]",squares[b]);
      console.log("squares[c]",squares[c]);
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
console.log("array one",array_one);
 console.log("array two",array_two);

return(
    <>
     {/* <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon> */}
      <div className="container">
      <h1 className="text-center mt-2 mb-2 text-success">{winner}</h1>
        <h1 className="text-center"> Tic tac toe</h1>
        <div className="row">
            <div className="col-sm-12 col-md-6 div_border_right text-center" >
                <h2 className="text-info">{PlayerOne}</h2>
                <h2 >Player One</h2>
                
            </div>
            <div className="col-sm-12 col-md-6 text-end">
               <h2 className="text-info text-center">{PlayerTwo}</h2>
               <h2 className="text-center">Player Two</h2>
                 
               
            </div>
        </div>
        <div className="row text-center mt-5">

                     
                    <div className="col-sm-4">
                        <button  className="btn btn-success tic_button" disabled={btn_state} onClick={()=>changeIconPlayerOne(1)}> { array_one.includes(1) ? <FontAwesomeIcon style={{marginRight:5}} icon={one_icon}></FontAwesomeIcon> :  array_two.includes(1) ? <FontAwesomeIcon style={{marginRight:5}} icon={two_icon}></FontAwesomeIcon> : ""}</button>
                    </div>
                    <div className="col-sm-4">
                      <button className="btn btn-success tic_button" disabled={btn_state} onClick={()=>changeIconPlayerOne(2)}>{ array_one.includes(2) ? <FontAwesomeIcon style={{marginRight:5}} icon={one_icon}></FontAwesomeIcon> :  array_two.includes(2) ? <FontAwesomeIcon style={{marginRight:5}} icon={two_icon}></FontAwesomeIcon> : "" }</button>
                    </div>
                    <div className="col-sm-4">
                    <button className="btn btn-success tic_button" disabled={btn_state} onClick={()=>changeIconPlayerOne(3)}> { array_one.includes(3) ? <FontAwesomeIcon style={{marginRight:5}} icon={one_icon}></FontAwesomeIcon> :  array_two.includes(3) ? <FontAwesomeIcon style={{marginRight:5}} icon={two_icon}></FontAwesomeIcon> : "" } </button>
                   </div>
                   <div className="col-sm-4  mt-3 mb-3">
                   <button className="btn btn-success tic_button" disabled={btn_state} onClick={()=>changeIconPlayerOne(4)}> { array_one.includes(4) ? <FontAwesomeIcon style={{marginRight:5}} icon={one_icon}></FontAwesomeIcon> :  array_two.includes(4) ? <FontAwesomeIcon style={{marginRight:5}} icon={two_icon}></FontAwesomeIcon> : ""  }</button>
                    </div>
                    <div className="col-sm-4 mt-3 mb-3">
                    <button className="btn btn-success tic_button" disabled={btn_state} onClick={()=>changeIconPlayerOne(5)}> { array_one.includes(5) ? <FontAwesomeIcon style={{marginRight:5}} icon={one_icon}></FontAwesomeIcon> :  array_two.includes(5) ? <FontAwesomeIcon style={{marginRight:5}} icon={two_icon}></FontAwesomeIcon> : "" }</button>
                    </div>
                    <div className="col-sm-4  mt-3 mb-3">
                    <button className="btn btn-success tic_button" disabled={btn_state} onClick={()=>changeIconPlayerOne(6)}> {  array_one.includes(6) ? <FontAwesomeIcon style={{marginRight:5}} icon={one_icon}></FontAwesomeIcon> :  array_two.includes(6) ? <FontAwesomeIcon style={{marginRight:5}} icon={two_icon}></FontAwesomeIcon> : ""  }</button>
                   </div>
                   <div className="col-sm-4">
                   <button className="btn btn-success tic_button" disabled={btn_state} onClick={()=>changeIconPlayerOne(7)}> {  array_one.includes(7) ? <FontAwesomeIcon style={{marginRight:5}} icon={one_icon}></FontAwesomeIcon> :  array_two.includes(7) ? <FontAwesomeIcon style={{marginRight:5}} icon={two_icon}></FontAwesomeIcon> : ""  }</button>
                    </div>
                    <div className="col-sm-4">
                    <button className="btn btn-success tic_button" disabled={btn_state} onClick={()=>changeIconPlayerOne(8)}> { array_one.includes(8) ? <FontAwesomeIcon style={{marginRight:5}} icon={one_icon}></FontAwesomeIcon> :  array_two.includes(8) ? <FontAwesomeIcon style={{marginRight:5}} icon={two_icon}></FontAwesomeIcon> : "" }</button>
                    </div>
                    <div className="col-sm-4">
                    <button className="btn btn-success tic_button" disabled={btn_state} onClick={()=>changeIconPlayerOne(9)}> { array_one.includes(9) ? <FontAwesomeIcon style={{marginRight:5}} icon={one_icon}></FontAwesomeIcon> :  array_two.includes(9) ? <FontAwesomeIcon style={{marginRight:5}} icon={two_icon}></FontAwesomeIcon> : "" }</button>
                   </div>
                
        </div>
       
      </div>
      
    </>
)
}