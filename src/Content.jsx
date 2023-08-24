import { useState, useEffect } from "react";
import axios from "axios";

export function Content() {
  const [coffee, setCoffee] = useState("");

  const handleClick = () => {
    console.log("You just clicked the button!");
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
      <h1>Welcome to the Random Coffee Generator 2.0!</h1>
      <img src={coffee} />
      <button onClick={handleClick}> Generate new picture</button>
    </div>
  );
}
