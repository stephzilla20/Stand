

'use client'
import { addVideo } from "../services/AddVideoApi";
import React, { useState, useEffect } from "react";


export default function AddVideoButton(){


  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleClick = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const data = {
      title: title,
      link: link
    }
    addVideo(data)
  }





  return(

    
      <form onSubmit={handleClick} className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)} //when field changes, set title to value of field
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
            Link
          </label>
          <input
            type="text"
            id="link"
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)} //when field changes, set title to value of field
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
  
    
  )
   
}




