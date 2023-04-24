import React, { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const BASE_URL = "http://localhost:5001";

function DogFinder() {
  const [dogData, setdogData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { name } = useParams();

  async function getAllDogs() {
    setLoading(true);
    const dogList = await axios.get(`${BASE_URL}/dogs`);

    // dogList.data.map(
    //   (d) => (d = { name: d.name, age: d.age, image: d.src, facts: d.facts }));
    setdogData(dogList.data)
    setLoading(false);
  };
  const dogList = getAllDogs();


  console.log(dogList);

  if (name) {
    // Check if params exist
    // AJAX request for single dog
    // Generate instance of dog class
    // Render DogDetails
  }

  // If no params
  // Get all dog data
  // Pass as params into DogList and render

  return (
    <div>
      {loading ? <h4>loading..</h4> : <dogList />}
    </div>
  )
}

export default DogFinder;
