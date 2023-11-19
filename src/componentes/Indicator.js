import React from 'react';
import styled from "styled-components";



function Indicator ({totalSteps, currentStep, goToStep}){

   
    const IndicatorStyle = styled.div`
        display: flex;
        font-size: 20px;
        `;
    
    const Dot = styled.div`
        color: grey;
        cursor: pointer;
        `;
    const CurrentDot = styled.div`
        color: red;
        `;      
    
    const tutorialData = new Array(totalSteps);
    
    for (let i = 0; i < totalSteps; i++) {
        tutorialData[i] = '';
    };
    
    const steps = tutorialData.map((step, index) => {
        if(index === currentStep){
        return step = <CurrentDot>&#x268A;</CurrentDot>;
        }
        return <Dot onClick={() => {
            goToStep(index);
          }}>&#9679;</Dot>
    });
    
    return(
        <IndicatorStyle>
            {steps}
        </IndicatorStyle>      
    );
    
}
export default Indicator;

