import { useState } from "react";
import ExpandableText from "./components/ExapandableText/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText
        textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsam reprehenderit minima porro totam pariatur harum quod dolore, officia quo exercitationem dignissimos magnam eligendi, quisquam, alias debitis fugiat quidem nisi?"
        maxLengthToDisplay={50}
      />
    </div>
  );
}

export default App;
