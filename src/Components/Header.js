import "../index.css";
import memelogo from "../Images/meme.png";
export default function Header() {
  return (
    <div className="header">
      <div className="titre-header">
        <img src={memelogo} alt="Logo Meme" />
        <p>Meme Generator</p>
      </div>
      <p className="react-course">React Course - Project 3</p>
    </div>
  );
}
