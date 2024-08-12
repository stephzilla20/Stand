import React, { useState, useEffect } from "react";



export const getHelloWorld = () => {
  return fetch('http://localhost:8080/hello')
    .then((res) => res.text())
    .catch((error) => {
      console.error('Error,', error)
    })

}