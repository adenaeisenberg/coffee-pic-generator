import { useState, useEffect } from "react";
import axios from "axios";
import { RandomCoffee } from "./RandomCoffee";

export function Content() {
  const [coffee, setCoffee] = useState("");

  const handleClick = () => {
    axios.get("https://coffee.alexflipnote.dev/random.json").then((response) => {
      console.log(response.data.file);
      setCoffee(response.data.file);
    });
  };

  useEffect(() => {
    console.log("useEffect just ran");
  });

  return (
    <div>
      <h1>Welcome to the Virtual Coffee Station!</h1>
      <RandomCoffee picturesofcoffee={coffee} />
      <button onClick={handleClick}> Generate new picture</button>
    </div>
  );
}
