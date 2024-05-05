import "./index.css";
import Header from "./Components/Header.js";
import Meme from "./Components/Meme";
export default function App() {
  return (
    <div className="bodyOfTheBody">
      <div className="body">
        <Header />
        <Meme />
      </div>
    </div>
  );
}
