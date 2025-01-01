import React from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const App = () => {
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(
    transcript ? transcript : "Please say something",
    {
      successDuration: 5000,
    }
  );

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h3 style={{ color: listening ? "green" : "red"}}>
        <span style={{color:"#2f2f2f"}}>Speech to Text Converter : </span> {listening ? "ON" : "OFF"}
        </h3>
      </div>
      
      <div className="tagline">
        <p>" Speak Freely, Transcribe Instantly. "</p>
      </div>

      <div className="listening-input">
      <p>{transcript? transcript : "Please say something"} </p>  
      </div>

      <div className="buttons">
        <button onClick={SpeechRecognition.startListening} style={{color : listening ? "green":"black"}}
        className="start">Start</button>
        <button onClick={SpeechRecognition.stopListening} className="stop">Stop</button>
        <button onClick={resetTranscript}   className="reset">Reset</button>
        <button onClick={setCopied} className="copy">Copy{isCopied ? "👍" : ""}</button>
      </div>

      
     <footer>
     <p className="copyright">Copyright © 2024 All rights reserved by jeetsuthar</p>
     </footer>
    </div>
  );
};

export default App;
