import React from 'react';
function TaglineHead(props){
  return <div className="tagline">
        <div className="belowtagline">
           <pre><font>{props.dark}</font>{props.content}</pre>
        </div>
    </div>;
};

export default TaglineHead;