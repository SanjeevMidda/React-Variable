import Pass from "./components/Pass";
import "./styles.css";
import React, {useState} from "react";
import dictionary from "./data/dictionary";

function App() {

  let noOfSweets = 25;

  const [chocolates, setChocolates] = useState(5);
  const [word, setWord] = useState("");

  function addChocolate(){
    setChocolates(chocolates + 1);
  }

  function newWord(){
    setWord(
      dictionary[Math.floor(Math.random() * dictionary.length)]
    )
  }

  let answer = true;

  const [turnOn, setTurnOn] = useState(true)

  function turnOff(){
    setTurnOn(!turnOn)
  }

  return (
    <div className="parent">
      {noOfSweets}
      {chocolates}
      <Pass sweets = {noOfSweets} chocolates = {chocolates}/>

      <button onClick={addChocolate}>update!</button>

      <h1>{word}</h1>
      <button onClick={newWord}>add new word!</button>

      <h4>{answer? "Correct" : "Incorrect"}</h4>
      <h5>{true? <h1>{5+10}</h1> : <h1>two</h1>}</h5>

      <h1>{turnOn? "ON" : null}</h1>
      <button onClick={turnOff}>TURN OFF</button>
    </div>
  );
}

export default App;
