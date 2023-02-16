import './Tab1.css';
import React, { useState } from 'react';
import { IonCard, IonList, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';



const Tab2 = () => {
  const [matches, setMatches] = useState([
    { homeTeam: 'Real Madrid', awayTeam: 'Barcelona', score: '2-3' },
    { homeTeam: 'Manchester United', awayTeam: 'Liverpool', score: '1-1' },
  ]);

  const [homeTeam, setHomeTeam] = useState('');
  const [awayTeam, setAwayTeam] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMatches([...matches, { homeTeam, awayTeam, score }]);
    setHomeTeam('');
    setAwayTeam('');
    setScore('');
  };
  return (
    <IonCard>
    <IonList>
      {matches.map((match, index) => (
        <IonItem key={index}>
          <IonLabel>
            <h2>{match.homeTeam}</h2>
            <p>{match.awayTeam}</p>
            <p>{match.score}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
    <form onSubmit={handleSubmit}>
      <IonItem>
        <IonLabel position="floating">Home Team</IonLabel>
        <IonInput value={homeTeam} onIonChange={(e) => setHomeTeam(e.target.value)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Away Team</IonLabel>
        <IonInput value={awayTeam} onIonChange={(e) => setAwayTeam(e.target.value)} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Score</IonLabel>
        <IonInput value={score} onIonChange={(e) => setScore(e.target.value)} />
      </IonItem>
      <IonButton type="submit">Add Match</IonButton>
    </form>
  </IonCard>
   
  );
};

export default Tab2;