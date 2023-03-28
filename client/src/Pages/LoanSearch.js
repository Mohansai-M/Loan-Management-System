import { ProjectContext } from "../GlobalState";
import { useState, useContext, useEffect } from "react";

function LoanSearch() {
  let firstRender = true;

  const state = useContext(ProjectContext);
    

   useEffect(() => {
    
    state.USerCheck();

    })

 
  return (
    <div>
      LoanSearch
      <h1>{state.User ? <p>ok</p> : <p>notOK</p>}</h1>
    </div>
  );
}

export default LoanSearch;
