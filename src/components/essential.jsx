import React from 'react';
import { topBar1 } from '../database/database';
import TobarInnerContent1, { TobarInnerContent2 } from './topBar';

const Essential = () => {
  const topBarImageComponents = topBar1.productsOn1st.slice(0, 9).map((product, index) => (
    <TobarInnerContent1 key={index} link={product} />
  ));

  const topBarTextComponents = topBar1.productsOn1stText.slice(0, 9).map((text, index) => (
    <TobarInnerContent2 key={index} text={text} />
  ));

  return (
    <div>
      <div className="empty">
        Get up to 24 months No Cost EMI on all iPhone models from most leading banks. Footnote§ Learn more
      </div>
      <div className="tagline">
        <div className="maintagline">
          <pre>
            <font>Store.</font>The best way to buy the<br />products you love.
          </pre>
        </div>
      </div>
      <div className="outeronesc">
        <div className="onestscrollbar">
          {topBarImageComponents}
        </div>
        <div className="onestscrollbar2">
          {topBarTextComponents}
        </div>
        <div className="emptyinner"></div>
      </div>
    </div>
  );
};

export default Essential;
