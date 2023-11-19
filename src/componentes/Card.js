import React from 'react';
import Indicator from './Indicator.js';
import '../stylesheets/Card.css'

function Card(props) {
  return(
    <div className='contenedor-card' style={{backgroundColor: props.bgColor}}>
        <img className='imagen-card'
        src={require(`../images/${props.image}.svg`)}
        alt='card' />
        <div className='content-card'>
          <div className='contenedor-texto-card'>
            <h3 className='title-card'>{props.title}</h3>
            <p className='text-card'>{props.description}</p>
          </div>
          <div className='footer'>
            <div className='contenedor-indicator'>
              <Indicator
                currentStep={props.currentStep}
                totalSteps={props.totalSteps}
                goToStep = {props.goToStep}
              />
            </div>    
            <div className='contenedor-boton'>
             {props.currentStep ==0 && <button className='next' onClick={props.next}>&#8594;</button>}
             {props.currentStep > 0 && props.currentStep < props.totalSteps -1 &&
             (<div>
              <button className='prev' onClick={props.prev}>&#8592;</button>
              <button className='next' onClick={props.next}>&#8594;</button>
             </div>)}
             {props.currentStep == props.totalSteps - 1 && 
             <button className='prev' onClick={props.prev}>&#8592;</button>}    
            </div>           
          </div>  
        </div>
    </div>
  );
}

export default Card;