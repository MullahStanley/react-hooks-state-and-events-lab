import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark,setDark]= useState("false")
  function darkMode(){
    setDark((isDark)=>!isDark)
  }
  return (
    <div className={isDark ? "App dark": "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkMode}>{isDark ? "App dark" : "App light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
