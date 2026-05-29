/*Task:
Write a program to build React app to perform the tasks as asked below. 
•	• Add three buttons “Change Text”, “Change Color”, “Hide/Show”. 
•	• Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in h2 tag. 
•	• By clicking on “Change text” button text should be changed to “Welcome students” and vice versa. 
•	• By clicking on “Change Color” button change color of text to “blue” and vice versa. This color change should be performed while double clicking on the button. 
•	• Initially button text should be “Hide”. While clicking on it the button text should be changed to “Show” and text “React Js Hooks” will not be shown. 
*/
import { useState } from "react";

function US5() {
  const [isChangedText, setIsChangedText] = useState(false);
  const [isBlueColor, setIsBlueColor] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  function handleTextChange() {
    setIsChangedText(!isChangedText);
  }

  function handleColorDoubleClick() {
    setIsBlueColor(!isBlueColor);
  }

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }

  let headingText = "LJ University";
  if (isChangedText) {
    headingText = "Welcome students";
  }

  let headingColor = "red";
  if (isBlueColor) {
    headingColor = "blue";
  }

  let buttonText = "Hide";
  if (!isVisible) {
    buttonText = "Show";
  }

  return (
    <div>
      <button onClick={handleTextChange}>Change Text</button>
      <button onDoubleClick={handleColorDoubleClick}>Change Color</button>
      <button onClick={handleToggleVisibility}>{buttonText}</button>

      <h1 style={{ color: headingColor }}>{headingText}</h1>

      {isVisible && <h2>React Js Hooks</h2>}
      <hr></hr>
    </div>
  );
}

export default US5;