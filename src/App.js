import "./styles.css";
import { useState } from "react";

export default function App() {
  // Data Structures
  let podcastDictionary = {
    Science: [
      "Lex Fridman Podcast",
      "Huberman Lab Podcast",
      "The Psychology Podcast"
    ],
    Entrepreneaurship: [
      "Tim Ferris Show",
      "How I built this",
      "Indie Hackers Podcast"
    ],
    Philosophy: ["Daily Stoic Show", "On Purpose", "Philosiphize this!"]
  };

  // variables
  const [podcastIndex, setpodcastIndex] = useState(0);
  const podcastCategories = Object.keys(podcastDictionary);
  var podcasts = Object.values(podcastDictionary);
  var displayPodcasts = podcasts[podcastIndex];
  // const [podcast, setPodcast] = useState("")
  // Functions

  function clickHandler(item, index) {
    setpodcastIndex(index);
  }

  // Final
  return (
    <div className="App">
      <h1>
        <span role="img"> 🎧 </span> Good Podcasts
      </h1>
      <small>Check out my favourite podcasts</small>
      <br />
      {podcastCategories.map((item, index) => (
        <button class="button" onClick={() => clickHandler(item, index)}>
          {" "}
          {item}{" "}
        </button>
      ))}
      <br />
      <div class="podcastDiv">
        {displayPodcasts.map((values) => (
          <div class="podcastName"> {values} </div>
        ))}
      </div>
    </div>
  );
}

// Data Structures
