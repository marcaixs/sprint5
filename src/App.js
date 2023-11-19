import './App.css';
import Card from './componentes/Card.js';
import { useState } from 'react';

const tutorialData = [{
  title:'Dedica moltes hores',
  description:'Un minim de 30 hores a la setmana. Si no en tens prou, hauries de dedicar-li més hores. Al principi sembla impossible, però notaras una millora ràpidament.',
  bgColor: '#2396ad',
  image:'time_managment',
},
{
  title:'Programa projectes propis',
  description:'Més val 10 hores treballant en projectes propis que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
  bgColor: '#a8a8a8',
  image:'programming',
},
{
  title:'Procura descansar',
  description:"Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrés i l'anseitat. Milloraràs la teva atenció i consolidaràs el teu aprenentatge.",
  bgColor: '#d9a223',
  image:'meditation',
}]



function App() {
  const [step, setStep] = useState(0);
  const currentCardData = tutorialData[step];

  function nextStep(){setStep(prev => prev+1)}
  
  function prevStep(){setStep(prev => prev-1)}

  function goToStep(index) {
    setStep(index);
  }

  return (
    <div className="App">
      <Card
      image = {currentCardData.image}
      bgColor = {currentCardData.bgColor}
      title={currentCardData.title}
      description={currentCardData.description}
      prev = {prevStep}
      next = {nextStep}
      currentStep={step}
      totalSteps={tutorialData.length}
      goToStep = {goToStep}/>
      
    </div>
  );
}

export default App;
