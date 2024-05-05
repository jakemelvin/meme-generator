import React from "react";
import "../index.css";
export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  
  const [allMemes, setAllMemes] = React.useState([]);
  
  function randomImage() {
    let randomNumber = Math.floor(Math.random() * allMemes.length);
    console.log(allMemes[randomNumber].url);
    setMeme((prevState) => ({
      ...prevState,
      randomImage: allMemes[randomNumber].url,
    }));
  }
  function handleChange(event) {
    setMeme((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then(data => setAllMemes(data.data.memes));
  },[]);
  return (
    <div className="conteneur-meme">
      <div className="meme">
        <input
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={(event) => handleChange(event)}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={(event) => handleChange(event)}
        />
        <button className="form-button" onClick={randomImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme-image">
        <img src={meme.randomImage} alt="Image de Meme" />
        <h2 className="top-text">{meme.topText}</h2>
        <h2 className="bottom-text">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
