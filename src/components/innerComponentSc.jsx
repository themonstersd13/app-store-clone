import React from 'react';
import DOMPurify from "dompurify";
const ScBarComponent = (props) => {
    const renderImageBackground = () => {
        if(props.innerCont!=="sc1" && props.innerCont!=="sc2" && props.innerCont!=="sc6" &&props.index!==0 && props.index!==props.size-1){
            return {backgroundColor:"white"};
        }
        else if (props.ele === "applepensilpro") {
            return {backgroundImage: `url(${require(`../database/data/${props.database}/${props.ele}.png`)})`};
        } else {
            return {backgroundImage: `url(${require(`../database/data/${props.database}/${props.ele}.jpeg`)})`};
        }
    };
    let backgroundColor = props.colors ? "black" : "initial";
    let sellerLineClass = props.colors ? "sellerLine dark" : "sellerLine";
    let offersClass = props.colors ? "offers dark" : "offers";
    let titlesClass="titles";
    const CheckPutEle=()=>{
        if(props.innerCont!=="sc1" && props.innerCont!=="sc2" && props.innerCont!=="sc6"){
            if(props.index!==0 && props.index!==props.size-1){
                 backgroundColor = props.colors ? "black" : "initial";
                 sellerLineClass = props.colors ? "sellerLine1 dark" : "sellerLine1";
                 offersClass = props.colors ? "offers1 dark" : "offers1";
                 titlesClass="titles1";
                return <img alt={"products"} className='imgk'  src={`${require(`../database/data/${props.database}/${props.ele}.jpeg`)}`}></img>;
            }
        }
        return;
    };
    const renderContent = () => {
        
            return (
                <div
                    className={`innerScBar1 ${props.innerCont}`}
                    id={props.ele}
                    style={renderImageBackground()}
                >
                    {CheckPutEle()}
                    <div className={titlesClass} dangerouslySetInnerHTML={{ __html:DOMPurify.sanitize(props.MainTitle) }}></div>
                    <div className={sellerLineClass} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.sellerLine)}}></div>
                    <div className={offersClass} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.offers)}}></div>
                </div>
            );
    };

    return renderContent();
};

export default ScBarComponent;
