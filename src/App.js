import { useState } from "react";
import "./styles.css";

const emojiPhedia = {
  "😊": "Smile",
  "😂": "Laughing",
  "🍪": "Cookie",
  "🤑": "Rich",
  "😬": " Nervous",
  "😡": " Angry"
};

export default function App() {
  var [getEmoji, setEmoji] = useState("");

  function emojiEventHandler(event) {
    var inputEmoji = event.target.value;

    var getEmoji = emojiPhedia[inputEmoji];

    if (getEmoji === undefined) {
      getEmoji = "No Emoji Found";
    }
    setEmoji(getEmoji);
  }

  return (
    <div className="App">
      <h1>markEight | Emoji InterPreter</h1>
      <input onChange={emojiEventHandler} />
      <h2> {getEmoji} </h2>
      <h2> 😊 | 😂 | 🍪 | 🤑 | 😬 | 😡 </h2>
    </div>
  );
}
