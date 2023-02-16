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
        <IonTitle>Liste des Tournois</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonList>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Tournois</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Ligue 1</IonCardTitle>
          <IonCardSubtitle>Compétition de football</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Le Championnat de France de football, de plus haut niveau de la FFF. Il regroupe les meilleurs clubs de France métropolitaine et de Monaco.
        </IonCardContent>

        <IonButton fill="clear">Voir les Matchs</IonButton>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>FA Cup</IonCardTitle>
          <IonCardSubtitle>Compétition de football</IonCardSubtitle>
        </IonCardHeader>

        <IonButton fill="clear">Voir les Matchs</IonButton>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>LaLiga</IonCardTitle>
          <IonCardSubtitle>Compétition de football</IonCardSubtitle>
        </IonCardHeader>

        <IonButton fill="clear">Voir les Matchs</IonButton>
      </IonCard>
      
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Serie A</IonCardTitle>
          <IonCardSubtitle>Compétition de football</IonCardSubtitle>
        </IonCardHeader>

        <IonButton fill="clear">Voir les Matchs</IonButton>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Super League</IonCardTitle>
          <IonCardSubtitle>Compétition de football</IonCardSubtitle>
        </IonCardHeader>

        <IonButton fill="clear">Voir les Matchs</IonButton>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Coupe du monde</IonCardTitle>
          <IonCardSubtitle>Compétition de football</IonCardSubtitle>
        </IonCardHeader>

        <IonButton fill="clear">Voir les Matchs</IonButton>
      </IonCard>

      </IonList>
    </IonContent>


  </IonPage>
   
  );
};

export default Tab2;