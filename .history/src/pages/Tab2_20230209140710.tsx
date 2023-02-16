import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';

interface MatchProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  location: string;
}

const MatchCard: React.FC<MatchProps> = ({ homeTeam, awayTeam, date, location }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{homeTeam} vs {awayTeam}</IonCardTitle>
        <IonCardSubtitle>{date}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Lieu : {location}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default MatchCard;