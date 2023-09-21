import { useState } from "react";
import ExpandableText from "./components/ExapandableText/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsam
        reprehenderit minima porro totam pariatur harum quod dolore, officia quo
        exercitationem dignissimos magnam eligendi, quisquam, alias debitis
        fugiat quidem nisi?
      </ExpandableText>
    </div>
  );
}

export default App;
