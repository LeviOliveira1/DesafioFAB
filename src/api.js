import { useEffect, useState } from "react";

function DadJoke() {
  const [animal, setAnimal] = useState("jokes here");

  useEffect(() => {
    getAnimal();
  }, []);

  const getAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setAnimal(data.animal);
  };

  return (
    <div className="container">
      <h1>Dad Joke</h1>
      <p className="joke">{animal}</p>
      <button type="button" className="btn" onClick={getAnimal}>
        Get Another Joke
      </button>
    </div>
  );
}

export default DadJoke;