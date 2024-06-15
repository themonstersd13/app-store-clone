import React from 'react';

function TobarInnerContent1(props) {
  return (
    <div
      className="innerproductsone"
      id="Mac"
      style={{ backgroundImage: `url(${require(`../database/data/belownavbar/${props.link}.png`)})` }}
    >
    </div>
  );
}

function TobarInnerContent2(props) {
    return (
      <div
        className="innerproductsoneText"
      >
        {props.text}
      </div>
    );
  }

export default TobarInnerContent1;
export {TobarInnerContent2};
