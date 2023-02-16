import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import './Tab2.css';

interface Tab2 {
  homeTeam: string;
  awayTeam: string;
  date: string;
  location: string;
}

const Tab2: React.FC<Tab2> = ({ homeTeam, awayTeam, date, location }) => {
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

export default Tab2;
