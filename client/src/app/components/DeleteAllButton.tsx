

'use client'
import { deleteAll } from "../services/DeleteAllApi";
import React, { useState, useEffect } from "react";


export default function DeleteAllButton(){
  const handleClick = () =>{
    deleteAll()
  }

  


  return(

    <>
      <button type="submit" onClick = {handleClick}> Delete All</button>
    </>
  
    
  )
   
}




