import React from 'react';
import ScBarComponent from './innerComponentSc';

function NormalSc(props) {
    const RepeatContentBlock = props.cont.images.slice(0, props.cont.images.length).map((image, index) => (
        <ScBarComponent 
        ele={image} 
        database={props.database} 
        MainTitle={props.cont.titles[index]} 
        sellerLine={props.cont.sellerLine[index]}
        offers={props.cont.offers[index]}
        colors={props.cont.colors[index]}
        innerCont={props.val}
        index={index}
        size={image.length}
    />
      ));
    return (
        <div className="outeronesc1">
                <div className={`scbar1cont ScBar${props.key}`}>
                    {RepeatContentBlock}
                </div>
        </div>
    );
}

export default NormalSc;
