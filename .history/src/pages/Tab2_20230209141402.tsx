import './Tab1.css';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import { IonContent,IonButton, IonHeader, IonPage, IonTitle, IonToolbar,IonList } from '@ionic/react';

interface MatchProps {
  homeTeam: string;
  awayTeam: string;
  date: string;
  location: string;
}

const Tab2: React.FC<MatchProps> = ({ homeTeam, awayTeam, date, location }) => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Liste des Matchs</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonList>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Matchs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonCard>
      <IonCardHeader>
        <IonCardTitle>{homeTeam} vs {awayTeam}</IonCardTitle>
        <IonCardSubtitle>{date}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Lieu : {location}</p>
      </IonCardContent>
    </IonCard>

      </IonList>
    </IonContent>


  </IonPage>
   
  );
};

export default Tab2;