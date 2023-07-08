import react, { useState } from "react";

import './Tabs.css'

function Tabs() {
  const focused = "font-black green py-5 rounded-t-xl"
  const not_focused = "font-light pt-5 rounded-t-xl"
  const [focus, setFocus] = useState([focused, not_focused, not_focused])

  const texts = [
    "Dream big, connect, and ignite your passion. Seek guidance from older peers and alumni that believe in your potential and encourage you to dream fearlessly.",
    "Inspire younger students to do better and achieve more. Engage in discussions and demonstrate to peers how to succeed in your domain.",
    "Achieve more by working collaboratively with successful peers and alumni. Engage in group projects and create something better, together."
  ]

  const [content, setContent] = useState(texts[0]);

  const alignments = ["text-left", "text-center", "text-right"]
  const [align, setAlign] = useState(alignments[0]);

  const positions = ["dream", "inspire", "achieve"];
  const [position, setPosition] = useState(positions[0])

  function changeTab(n) {
    let focusArray = [not_focused, not_focused, not_focused];
    focusArray[n] = focused;
    setFocus(focusArray);
    setContent(texts[n]);
    setAlign(" " + alignments[n]);
    setPosition(positions[n]);
  }

  return (
    <div className="Tabs">
        <div className='flex tab-headers items-center mx-auto mt-20 relative overflow-hidden'>
          <div className={"tab-highlight " + position}></div>
          <a href="#" className={focus[0] + " ml-5 mr-auto"} onClick={() => changeTab(0)}>Dream</a>
          <a href="#" className={focus[1]} onClick={() => changeTab(1)}>Inspire</a>
          <a href="#" className={focus[2] + " mr-5 ml-auto"} onClick={() => changeTab(2)}>Achieve</a>
        </div>
        <div className={"content text-2xl leading-loose px-10 py-8 " + align}>
          {content}
        </div>
    </div>
  );
}

export default Tabs;
