import React, { Component } from "react";
import { useState } from "react";

// 改造后
const emojiSet = ["🎃", "👻", "🧟", "😱", "👽", "💀"];

const EmojiGenerator = () => {
  const [emoji, setEmoji] = useState(emojiSet[0]);
  //   state = {
  //     emoji: emojiSet[0]
  //   };

  const generateEmoji = () => {
    let randomIndex = Math.floor(Math.random() * emojiSet.length);
    let randomEmoji = emojiSet[randomIndex];

    setEmoji(randomEmoji);
    // this.setState({
    //   emoji: randomEmoji
    // });
  };

  return (
    <div>
      <span className="emoji" role="img" aria-label="emoji">
        {/* {this.state.emoji} */}
        {emoji}
      </span>
      {/* <button className="medium-btn" onClick={this.generateEmoji}> */}
      <button className="medium-btn" onClick={generateEmoji}>
        Generate
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <EmojiGenerator />
    </div>
  );
};

export default App;

// 改造前
// const emojiSet = ["🎃", "👻", "🧟", "😱", "👽", "💀"];

// class EmojiGenerator extends Component {
//   state = {
//     emoji: emojiSet[0]
//   };

//   generateEmoji = () => {
//     let randomIndex = Math.floor(Math.random() * emojiSet.length);
//     let randomEmoji = emojiSet[randomIndex];

//     this.setState({
//       emoji: randomEmoji
//     });
//   };

//   render() {
//     return (
//       <div>
//         <span className="emoji" role="img" aria-label="emoji">
//           {this.state.emoji}
//         </span>
//         <button className="medium-btn" onClick={this.generateEmoji}>
//           Generate
//         </button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <EmojiGenerator />
//       </div>
//     );
//   }
// }

// export default App;
