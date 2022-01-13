import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Converter = (props) => {
  const [bits, setBits] = useState(new Array(8).fill(0));

  const s = bits.join(""); //joins all the bits to a string
  const dec = parseInt(s, 2);

  //function to handle toggling
  function toggleBit(i, evt) {
    const copy = bits.slice();
    // if (copy[i]) {
    //   copy[i] = 0;
    // } else {
    //   copy[i] = 1;
    // }
    copy[i] = copy[i] === 0 ? 1 : 0;
    setBits(copy);
  }
  //an array of Bit component
  const bitComponents = bits.map((val, i) => {
    //our event handler expects only one parameter
    //solution: use arrow so we reduce the argument to just 'evt'
    return <Bit toggleBit={(evt) => toggleBit(i, evt)} val={val} key={i} />;
  });
  return (
    <>
      <h1>bin to dec</h1>
      {bitComponents}
      <Dec dec={dec} />
    </>
  );
};

const Dec = (props) => {
  return <div>{props.dec}</div>;
};

const Bit = (props) => {
  return (
    <div onClick={props.toggleBit} className="bit">
      {props.val}
    </div>
  );
};
ReactDOM.render(<Converter />, document.getElementById("root"));
