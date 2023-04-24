import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const BASE_URL = "http://localhost:5001"

function DogFinder() {

  const { name } = useParams();

  async function getAllDogs() {
    const dogList = await axios.get(`${BASE_URL}/dogs`)
    return dogList.data.map(d => d = {name: d.name, age: d.age, image: d.src, facts: d.facts})
  }

  const dogList = getAllDogs()

  console.log(dogList)


  if (name) {
    // Check if params exist
    // AJAX request for single dog
    // Generate instance of dog class
    // Render DogDetails
  }


  // If no params
  // Get all dog data
  // Pass as params into DogList and render



}

export default DogFinder;