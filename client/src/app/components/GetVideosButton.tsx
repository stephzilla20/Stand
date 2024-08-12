'use client'

import { getVideos } from "../services/GetVideosApi";
import React, { useState, useEffect } from "react";


export default function GetVideosButton() {

  const [videos, setVideos] = useState(""); // Initialize as an empty array

  const handleButton = () =>{
      getVideos()
      .then((data) => {
        setVideos(data)
        console.log("videos displayed")
      })
      .catch((error) => {
        console.error("error", error);
      });

    }




return (
  <div>
    <button onClick={handleButton}>Show all videos</button>
    {JSON.stringify(videos)}
  </div>
    
    )
  }
  

