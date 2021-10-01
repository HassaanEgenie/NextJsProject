import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import React, { useState } from 'react';


export default function Home() {
  const [TableNumber,SettableNumber]=useState(0);
  const [startNumber,SetstartNumber]=useState(0);
  const [endNumber,SetendNumber]=useState(0);
  const [tableInfo,SettableInfo]=useState({});
  const handleInput=(e)=>{
   let target=e.target;
   let name=e.target.name;
   let value=e.target.value;
   if(name=="start_number"){
     SetstartNumber(value);
   }else if(name=="end_number"){
     SetendNumber(value);
   }else{
    SettableNumber(value);
   }
   
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3 className={styles.title}>
            Click to Go  <Link  href={{pathname:"/changebutton/Game"}}><a > Change Button </a></Link>
        </h3>
        <h3 className={styles.title}>
            Click to Go to table <Link  href={{pathname:"/dicegame/game"}}><a >Dice Game</a></Link>
        </h3>
        <h3 className={styles.title}>
            Click to Go to table <Link  href={{pathname:"/table/"+startNumber+"/"+endNumber,query:{data:TableNumber}}}><a >Render Table</a></Link>
        </h3>
        <div>
            <h3>Enter a Number</h3>
            <input  className="userinput form-control"  name="user_input" id="user_input" onChange={handleInput}></input>
            <h3>Enter Start Number</h3>
            <input  className="userinput form-control"  name="start_number" id="start_number" onChange={handleInput}></input>
            <h3>Enter End Number</h3>
            <input  className="userinput form-control"  name="end_number" id="end_number" onChange={handleInput}></input>
        </div>
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
